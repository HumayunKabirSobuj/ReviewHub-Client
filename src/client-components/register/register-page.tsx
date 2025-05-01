'use client';

import { Button, Card, Col, Form, FormProps, Input, Row, Select } from 'antd';
import { FieldTypeRegister } from '@/types/login-register-page-types';
import Link from 'next/link';
import { toast } from 'sonner';
import './assets/register-page.css';

export default function RegisterSection() {
	const onFinish: FormProps<FieldTypeRegister>['onFinish'] = async (values) => {
		const toastId: string | number = 'register';

		try {
			console.log(values);
		} catch (err) {
			const message = err instanceof Error ? err.message : 'An unknown error';
			toast.error(message, { id: toastId });
		}
	};
	return (
		<>
			<Row gutter={[16, 16]} className="register-section">
				<Col
					xs={24}
					sm={24}
					md={{ span: 14, offset: 5 }}
					lg={{ span: 14, offset: 5 }}
					xl={{ span: 16, offset: 4 }}
					className="gutter-row"
				>
					<h1 className="register-title">Register Page</h1>
					<Form
						className="register-form"
						name="basic"
						initialValues={{ role: 'student' }}
						onFinish={onFinish}
						autoComplete="off"
					>
						<Form.Item<FieldTypeRegister>
							label="Name"
							name="name"
							className="label-input"
							rules={[{ required: true, message: 'Please input your name!' }]}
						>
							<Input placeholder="Enter your name" className="input" />
						</Form.Item>
						<Form.Item<FieldTypeRegister>
							label="Email"
							name="email"
							className="label-input"
							rules={[
								{ required: true, message: 'Please input your email!' },
								{ type: 'email', message: 'Please enter a valid email!' },
							]}
						>
							<Input placeholder="Enter your email" className="input" />
						</Form.Item>

						<Form.Item<FieldTypeRegister>
							label="Password"
							className="label-input"
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
						>
							<Input.Password placeholder="Enter your password" className="input" />
						</Form.Item>
						<Form.Item<FieldTypeRegister>
							label="Confirm Password"
							className="label-input"
							name="confirm_password"
							rules={[{ required: true, message: 'Please input your password again!' }]}
						>
							<Input.Password placeholder="Enter your password again" className="input" />
						</Form.Item>

						<Form.Item label={null} style={{ display: 'flex', justifyContent: 'center' }}>
							<Button className="register-submit" htmlType="submit" style={{ width: '250px' }}>
								Register
							</Button>
						</Form.Item>
					</Form>
					<h4 style={{ textAlign: 'center' }}>
						Already have an account? Please <Link href="/login">Login</Link>
					</h4>
				</Col>
			</Row>
		</>
	);
}
