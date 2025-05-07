'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FieldValues, type SubmitHandler, useForm, Controller } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { registerUserApi } from '@/services/AuthServices';
import { useRef } from 'react';

// Schema definition (similar to your StudentFormSchema)
const StudentFormSchema = z
	.object({
		name: z.string().min(1, 'Name is required'),
		email: z.string().email('Invalid email address'),
		password: z.string().min(6, 'Password must be at least 6 characters'),
		passwordConfirm: z.string().min(1, 'Please confirm your password'),
		image: z.any().refine((file) => file, 'Image is required'),
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: 'Passwords do not match',
		path: ['passwordConfirm'],
	});

export default function RegistrationForm() {
	const router = useRouter();
	const imgFileInputRef = useRef<HTMLInputElement>(null);

	const form = useForm<z.infer<typeof StudentFormSchema>>({
		resolver: zodResolver(StudentFormSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
			image: undefined,
		},
	});

	const {
		formState: { isSubmitting },
		watch,
	} = form;

	const password = watch('password');
	const passwordConfirm = watch('passwordConfirm');

	const onSubmit = async (data: any) => {
		let toastId: string | number = 1;
		toastId = toast.loading('...Loading', { id: toastId });
		try {
			let res;

			res = await registerUserApi(data);

			if (res?.success) {
				form.reset({
					name: '',
					email: '',
					password: '',
					passwordConfirm: '',
					image: undefined,
				});

				imgFileInputRef.current?.value && (imgFileInputRef.current.value = '');
				toast.success(res?.message, { id: toastId });
				router.push('/login');
			} else {
				toast.error(res?.message, { id: toastId });
				console.log(res);
			}
		} catch (error) {
			console.error(error);
		}
	};

	// Mock function - replace with your actual service

	return (
		<div className="flex flex-col md:flex-row min-h-screen">
			{/* Left side - Illustration */}
			<div className="w-full md:w-1/2 bg-[#f0f7ff] flex items-center justify-center p-6">
				<div className="max-w-md">
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

			{/* Right side - Form */}
			<div className="w-full md:w-1/2 flex items-center justify-center p-6">
				<div className="w-full max-w-md">
					<div className="mb-8 text-center md:text-left">
						<h1 className="text-2xl font-bold mb-2">Create an Account</h1>
						<p className="text-gray-500 text-sm">Welcome back! please enter your detail</p>
					</div>

					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<Form {...form}>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Name <span className="text-red-400">*</span>
										</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													type="text"
													{...field}
													value={field.value || ''}
													className="pl-10"
												/>
												<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="18"
														height="18"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
														<circle cx="12" cy="7" r="4"></circle>
													</svg>
												</div>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Email <span className="text-red-400">*</span>
										</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													type="email"
													{...field}
													value={field.value || ''}
													className="pl-10"
												/>
												<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="18"
														height="18"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
														<polyline points="22,6 12,13 2,6"></polyline>
													</svg>
												</div>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Password <span className="text-red-400">*</span>
										</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													type="password"
													{...field}
													value={field.value || ''}
													className="pl-10"
												/>
												<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="18"
														height="18"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
														<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
													</svg>
												</div>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="passwordConfirm"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Confirm Password <span className="text-red-400">*</span>
										</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													type="password"
													{...field}
													value={field.value || ''}
													className="pl-10"
												/>
												<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="18"
														height="18"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
														<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
													</svg>
												</div>
											</div>
										</FormControl>
										{passwordConfirm && password !== passwordConfirm ? (
											<FormMessage>Password does not match</FormMessage>
										) : (
											<FormMessage />
										)}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="image"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Upload Image <span className="text-red-400">*</span>
										</FormLabel>
										<FormControl>
											<Input
												type="file"
												accept="image/*"
												ref={imgFileInputRef}
												onChange={(e) => {
													const file = e.target.files?.[0];
													field.onChange(file);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								className="w-full bg-blue-600 py-5"
								disabled={isSubmitting || (!!passwordConfirm && password !== passwordConfirm)}
							>
								{isSubmitting ? 'Registering...' : 'REGISTER'}
							</Button>

							<p className="text-center text-sm mt-4">
								Already have an account?
								<Link href="/login" className="text-blue-600 font-semibold hover:underline ml-2">
									Log in here
								</Link>
							</p>
						</Form>
					</form>
				</div>
			</div>
		</div>
	);
}
