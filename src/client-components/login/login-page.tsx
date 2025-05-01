'use client';

import { Button, Col, Row, Input } from 'antd';
import './assets/featured-section.css';
const { Search } = Input;
import type { GetProps } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Image from 'next/image';

type SearchProps = GetProps<typeof Input.Search>;

export default function FeaturedSection() {
	const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
	return (
		<>
			<Row gutter={[16, 16]} className="featured-review-sections">
				<Col xs={24} className="gutter-row">
					<h1>Login Page</h1>
				</Col>
			</Row>
		</>
	);
}
