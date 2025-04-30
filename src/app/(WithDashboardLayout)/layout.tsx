import { LogoutOutlined } from "@ant-design/icons";
import { Badge, Col, Row } from "antd";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="dashboard-main-section">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8} md={8} lg={8} xl={6} className="gutter-row">
        <div className="dashboard-sidebar-section">
                <div className="personal-detail">
                    <Image
                        src={
                            // user?.imageUrl ||
                            '/images/static/profile.png'}
                        width={40}
                        height={40}
                        className="user-image"
                        alt="user-image"
                    />

                    <h4 className="username">{'user?.name'}</h4>
                </div>

                {/* Tutor navigation */}
                {/* {user?.role == 'tutor' && ( */}
                <div className="navigation">
                    <button
                        className={`nav-title`}

                    >
                        Manage Profile
                    </button>
                    <button
                        // disabled={user?.updateProfile == true}
                        className={`nav-title`}
                    // onClick={() => setActiveMenu('booking-request')}
                    >
                        Bookings Requests{' '}
                        <Badge
                            className="site-badge-count-109"
                            //   count={bookings?.length}
                            style={{ backgroundColor: '#52c41a', marginLeft: '10px' }}
                        />
                    </button>
                    <button
                        // disabled={user?.updateProfile == true}
                        className={
                            `
                 nav-title`}
                    // onClick={() => setActiveMenu('earnings')}
                    >
                        Earnings
                    </button>
                    <button
                        //    disabled={user?.updateProfile == true}
                        className="nav-title">
                        <div className="logout-action"
                        // onClick={handleLogout}
                        >
                            <LogoutOutlined className="icon" />
                            Logout
                        </div>
                    </button>
                </div>
                {/* )} */}
            </div> 
        </Col>
        <Col xs={24} sm={16} md={16} lg={16} xl={18} className="gutter-row">
          {/* <DashboardManagement
            activeMenu={activeMenu}
            bookings={bookings}
            setLoading={setLoading}
          /> */}
           {children}
        </Col>
      </Row>
        </div>
           
        </div>
    )
}