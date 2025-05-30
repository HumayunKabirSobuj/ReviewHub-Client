"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InboxIcon as EnvelopeIcon,
  LockOpenIcon as LockClosedIcon,
} from "lucide-react";
import Link from "next/link";
import { loginUser } from "@/services/AuthServices";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/components/context/UserContext";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { handleUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    // console.log({ email, password })

    const loginData = {
      email,
      password,
    };
    // console.log(loginData);

    try {
      //   console.log(values);
      const result = await loginUser(loginData);
      // console.log(result);

      if (result?.success) {
        toast.success(result?.message);

        handleUser();
        router.push("/");
      } else {
        toast.success(result?.message, { duration: 2000 });
      }
    } catch (err) {
      toast.error("Something went wrong", { duration: 2000 });
      console.log(err);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="space-y-1 text-center sm:space-y-2">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Sign In
        </h1>
        <p className="text-xs text-gray-500 sm:text-sm">
          Welcome back! please enter your detail.
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => {
            setEmail("admin123@gmail.com");
            setPassword("admin123");
          }}
          className="flex-1 text-xs sm:text-sm h-9"
        >
          Admin Credentials
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => {
            setEmail("user@gmail.com");
            setPassword("user1234");
          }}
          className="flex-1 text-xs sm:text-sm h-9"
        >
          User Credentials
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <EnvelopeIcon className="h-4 w-4 text-gray-400 sm:h-5 sm:w-5" />
            </div>
            <Input
              type="email"
              placeholder="test@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-10 sm:h-11 text-sm sm:text-base"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <LockClosedIcon className="h-4 w-4 text-gray-400 sm:h-5 sm:w-5" />
            </div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 h-10 sm:h-11 text-sm sm:text-base"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-purple-600 h-10 text-sm font-medium sm:h-11 sm:text-base"
        >
          LOGIN
        </Button>

        <p className="text-center text-sm mt-4">
          Do not have an account?
          <Link
            href="/register"
            className="text-purple-600 font-semibold hover:underline ml-2"
          >
            Signup in here
          </Link>
        </p>
      </form>
    </div>
  );
}
