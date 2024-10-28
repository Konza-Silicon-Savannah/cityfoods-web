"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button";
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
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message:"Email must be valid"
    }),
    password: z.string().min(8, {
        message:"Password must be atleast 8 characters"
    }),
    password2: z.string().min(8, {
        message:"Password must be the same as the above"
    }),
}).refine((data) => data.password === data.password2, {
    message: "Passwords don't match",
    path:["password2"],
});


export function UserSignupForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    // 1. Define the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password2: "",  
        }
    })
    // 2. Define a submit handler
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        //Do something with the form values
        // This will be typesafe and validated
        setIsLoading(true);
        setApiError("");
        try {
            const response = await fetch('https://cityfoods.konza.go.ke/api/v1/accounts/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    name: values.name,
                    password: values.password,
                    password2: values.password2
                }),
            });
            const data = await response.json();
            if (!response.ok) {
                //Handle specific error messages from the backend
                if (data.email) {
                    setApiError(data.email[0]);
                } else if (data.name) {
                    setApiError(data.name[0])
                } else if (data.password) {
                    setApiError(data.password[0])
                } else if (data.non_field_errors) {
                    setApiError(data.non_field_errors[0]);
                } else {
                    setApiError("Registration failed. Please try again.");
                }
                throw new Error('Registration failed');
            }
            console.log('Registration successful:', data);
            router.push('/signin/');
        }
        catch (error) {
            console.log('Registration error:', error);
            setApiError("Unexpected error occured. Please try again.");
        }
        finally {
            setIsLoading(false);
        }
    }


    return (
      <Form {...form}>
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            City<span className="text-green-600">Foods</span>
          </h1>
          <h2 className="mt-2 text-lg text-gray-700">Create an Account</h2>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fullname</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>Enter your fullnames.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email@domain.com" {...field} />
                </FormControl>
                <FormDescription>Enter your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormDescription>Choose a strong password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the same password again.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {apiError && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{apiError}</AlertDescription>
            </Alert>
          )}
          <Button
            type="submit"
            className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {/* Login instead link */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </Form>
    );
}