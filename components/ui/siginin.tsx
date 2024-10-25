"use client"

import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, { message: "Enter a valid password" }),
});

export function UserLoginForm() {
    const [apiError, setApiError] = useState("");
    const [isRedirecting, setIsRedirecting] = useState(false);
    const router = useRouter();
    
    // Helper function to retrieve cookies by name
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        if (isRedirecting) {
            console.log("Attempting to redirect...");
        }
    }, [isRedirecting, router]);

    const onSubmit = async (values) => {
        setApiError("");
        try {
            const response = await fetch('/auth/login', {
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
            // console.log('Login response:', data);

            if (!response.ok) {
                if (data.message) {
                    setApiError(data.message);
                } else {
                    setApiError("Login failed. Please try again.");
                }
                return;
            }

            // Tokens are now set as HttpOnly cookies by the server
            // We don't need to store them in localStorage anymore

            // Retrieve the user role from the cookie
            const userRole = getCookie('userRole');
            if (!userRole) {
                console.error('User role not found in cookies');
                setApiError('Authentication failed: User role not found');
                return;
            }

            console.log('Login successful, preparing to redirect...');
            setIsRedirecting(true);

            // Redirect based on user role
            if (userRole === 'customer') {
                router.push('/dashboard/home');
            } else if (userRole === 'vendor') {
                router.push('/vendor');
            } else {
                console.error('Unknown user role:', userRole);
                setApiError('Unknown user role. Please contact support.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setApiError("An unexpected error occurred. Please try again.");
        }
    };

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
                                <Input type="email" placeholder="Email@domain.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your email address.
                            </FormDescription>
                            <FormMessage />
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
                                <Input type="password" placeholder="*************" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your password.
                            </FormDescription>
                            <FormMessage />
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
    );
}
