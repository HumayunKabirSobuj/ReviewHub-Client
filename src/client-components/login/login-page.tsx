'use client';

import { Col, Row } from 'antd';
import './assets/login-page.css';
import { Button, Form, FormProps, Input } from 'antd';
import { FieldTypeLogin } from '@/types/login-register-page-types';
import { toast } from 'sonner';
import Link from 'next/link';

export default function LoginSection() {
	const onFinish: FormProps<FieldTypeLogin>['onFinish'] = async (values) => {
		let toastId: string | number = 'login';

		try {
			console.log(values);
		} catch (err) {
			toast.error(err as string, { id: toastId });
		}
	};

	return (
		<>
			<Row gutter={[16, 16]} className="login-section">
				<Col
					xs={24}
					sm={24}
					md={{ span: 14, offset: 5 }}
					lg={{ span: 14, offset: 5 }}
					xl={{ span: 16, offset: 4 }}
					className="gutter-row"
				>
					<h1 className="login-title">Login Page</h1>
					<Form
						className="login-form"
						name="basic"
						initialValues={{ remember: true }}
						onFinish={onFinish}
						autoComplete="off"
					>
						<Form.Item<FieldTypeLogin>
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

						<Form.Item<FieldTypeLogin>
							label="Password"
							className="label-input"
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
						>
							<Input.Password placeholder="Enter your password" className="input" />
						</Form.Item>

						<Form.Item label={null} style={{ display: 'flex', justifyContent: 'center' }}>
							<Button className="login-submit" htmlType="submit">
								Login
							</Button>
						</Form.Item>
					</Form>
					<h4 className="route-to-register">
						Don&apos;t have an account? Please <Link href="/register">Register</Link>
					</h4>
				</Col>
			</Row>
		</>
	);
}
