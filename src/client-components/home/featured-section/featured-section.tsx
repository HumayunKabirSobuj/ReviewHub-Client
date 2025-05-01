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
				<Col xs={24} sm={24} md={14} lg={14} xl={16} className="gutter-row">
					<div className="featured-section">
						<div className="single-featured-review">
							<h1 className="featured-title">Featured Review</h1>
							<div className="category-time">
								<span className="category">Smartphones</span>
								<span className="time">4 hours ago</span>
							</div>
							<h1 className="feature-review-title">
								It is a long established fact that a reader will be distracted by the readable content
								of a page when looking at its layout
							</h1>
							<Button className="review-read-btn">Read Review</Button>
						</div>
						<div className="featured-review-navigation">
							<div className="individual-navigation">
								<div className="category-time">
									<span className="category">Smartphones</span>
									<span className="time">4 hours ago</span>
								</div>
								<p className="description">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout
								</p>
							</div>
							<div className="individual-navigation">
								<div className="category-time">
									<span className="category">Smartphones</span>
									<span className="time">4 hours ago</span>
								</div>
								<p className="description">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout
								</p>
							</div>
							<div className="individual-navigation">
								<div className="category-time">
									<span className="category">Smartphones</span>
									<span className="time">4 hours ago</span>
								</div>
								<p className="description">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout
								</p>
							</div>
						</div>
					</div>
				</Col>
				<Col xs={24} sm={24} md={10} lg={10} xl={8} className="gutter-row">
					<div className="review-list">
						<Search placeholder="search review" allowClear onSearch={onSearch} style={{ width: '100%' }} />
						<div className="recommended-view-all">
							<span className="recommended">Recommended</span>
							<span className="view-all">
								View All <RightOutlined className="icon" />
							</span>
						</div>
						<div className="review-image-container">
							<Image
								src={`/images/static/review-image.png`}
								width={100}
								height={100}
								className="review-image"
								alt="team-image"
							/>
							<div className="gradient-overlay">
								<div className="gradient-content">
									<p>
										It is a long established fact that a reader will be distracted by the readable
										content of a page when looking at its layout
									</p>
									<div className="category-time">
										<span className="category">Smartphones</span>
										<span className="time">4 hours ago</span>
									</div>
								</div>
							</div>
						</div>
						<div className="review-list-container">
							<div className="review-content-item">
								<div className="category-time">
									<span className="category">Smartphones</span>
									<span className="time">4 hours ago</span>
								</div>
								<p className="description">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout
								</p>
							</div>
							<div className="review-content-item">
								<div className="category-time">
									<span className="category">Smartphones</span>
									<span className="time">4 hours ago</span>
								</div>
								<p className="description">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout
								</p>
							</div>
							<div className="review-content-item">
								<div className="category-time">
									<span className="category">Smartphones</span>
									<span className="time">4 hours ago</span>
								</div>
								<p className="description">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout
								</p>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
}
