//components/ui/signin.tsx

"use client";

import React, { useState } from "react";
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
import { secureStorage } from "@/utils/secureStorage";

const formSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, { message: "Enter a valid password" }),
});

export function UserLoginForm() {
    const [apiError, setApiError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setApiError("");
        setIsLoading(true);

        try {
            const response = await fetch('https://cityfoods.konza.go.ke/api/v1/accounts/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) {
                setApiError(data.error || "Login failed. Please try again.");
                return;
            }

            // Securely store tokens and user data
            try {
                secureStorage.setTokens({
                    access: data.access,
                    refresh: data.refresh
                });
                
                secureStorage.setUser(data.user);

                // Redirect based on user role
                const user = secureStorage.getUser();
                if (user?.role === 'customer') {
                    router.push('/dashboard/home');
                } else if (user?.role === 'vendor') {
                    router.push('/vendor');
                } else {
                    setApiError('Unknown user role. Please contact support.');
                }
            } catch (storageError) {
                console.error('Storage error:', storageError);
                setApiError("Failed to secure session data. Please try again.");
            }

        } catch (error) {
            console.error('Login error:', error);
            setApiError("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
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
                <Button type="submit" className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300">
                    {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
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
