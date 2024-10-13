"use client"

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, { message: "Enter a valid password" }),
})

export function UserLoginForm() {
    const [apiError, setApiError] = useState("");
    const [isRedirecting, setIsRedirecting] = useState(false);
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",  
        }
    })

    useEffect(() => {
        if (isRedirecting) {
            console.log("Attempting to redirect...");
            // The actual redirection will happen in onSubmit
        }
    }, [isRedirecting, router]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setApiError("");
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            });
            const data = await response.json();
            console.log('Login response:', data);
            
            if (!response.ok) {
                if (data.message) {
                    setApiError(data.message);
                } else if (data.error) {
                    setApiError(data.error);
                } else {
                    setApiError("Login failed. Please try again.");
                }
                return;
            }

            if (!data.token || !data.user) {
                console.error('No token or user data received from server');
                setApiError('Authentication failed: Incomplete data received');
                return;
            }

            // Store the token in localStorage
            localStorage.setItem('authToken', data.token);
            console.log('Token stored:', data.token);

            // Store user data (you might want to store only necessary information)
            localStorage.setItem('userData', JSON.stringify(data.user));

            console.log('Login successful, preparing to redirect...');
            setIsRedirecting(true);

            // Redirect based on user role
            if (data.user.role === 'customer') {
                router.push('/dashboard/home');
            } else if (data.user.role === 'vendor') {
                router.push('/vendor');
            } else {
                console.error('Unknown user role:', data.user.role);
                setApiError('Unknown user role. Please contact support.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setApiError("An unexpected error occurred. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <div className="w-full max-w-sm">
              <h1 className="text-3xl font-bold text-gray-900">
                  City<span className="text-green-600">Foods</span>
              </h1>
              <h2 className="mt-2 text-lg text-gray-700">Welcome back 👋</h2>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {apiError && (
                    <Alert variant="destructive" className="mt-4">
                        <AlertDescription>{apiError}</AlertDescription>
                    </Alert>
                )}
                <FormField
                    control={form.control} 
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Email@domain.com" {...field}/>
                            </FormControl>
                            <FormDescription>
                                Enter your email address.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}                   
                />
                <FormField
                    control={form.control} 
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <div className="mt-4 flex items-center justify-between">
                                <FormLabel>Password</FormLabel>
                                <div className="text-sm">
                                    <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                                </div>
                            </div>
                            <FormControl>
                                <Input type="password" placeholder="*************" {...field}/>
                            </FormControl>
                            <FormDescription>
                                Enter your password.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}                   
                />
                <Button type="submit" className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300">Submit</Button>
            </form>
            <div className="mt-4">
                <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-blue-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </Form>
    )
}