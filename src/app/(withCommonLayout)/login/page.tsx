/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { InboxIcon as EnvelopeIcon, LockOpenIcon as LockClosedIcon } from 'lucide-react';
import Link from 'next/link';
import { loginUser } from '@/services/AuthServices';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useUser } from '@/components/context/UserContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const { handleUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const result = await loginUser(loginData);

      if (result?.success) {
        toast.success(result?.message);
        handleUser();
        router.push('/');
      } else {
        toast.success(result?.message, { duration: 2000 });
      }
    } catch (err) {
      toast.error('Something went wrong', { duration: 2000 });
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50 md:flex-row">
      {/* Illustration Section */}
      <div className="flex flex-1 flex-col items-center justify-center bg-blue-50 p-6 md:p-8 lg:w-1/2">
        <div className="max-w-xs sm:max-w-sm md:max-w-md">
          <Image
            src="/images/admin-illustration.png"
            alt="Person working at desk"
            width={400}
            height={400}
            priority
            className="mx-auto h-auto w-full"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:w-1/2">
        <div className="mx-auto w-full max-w-sm space-y-4 sm:space-y-6">
          <div className="space-y-1 text-center sm:space-y-2">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Sign In</h1>
            <p className="text-xs text-gray-500 sm:text-sm">
              Welcome back! please enter your detail.
            </p>
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

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
                <label
                  htmlFor="remember"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sm:text-sm"
                >
                  Remember me
                </label>
              </div>

              <Link
                href="/forgot-password"
                className="text-xs font-medium text-blue-600 hover:text-blue-500 sm:text-sm"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 h-10 text-sm font-medium sm:h-11 sm:text-base"
            >
              LOGIN
            </Button>

            <p className="text-center text-sm mt-4">
              Do not have an account?
              <Link href="/register" className="text-blue-600 font-semibold hover:underline ml-2">
                Signup in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
