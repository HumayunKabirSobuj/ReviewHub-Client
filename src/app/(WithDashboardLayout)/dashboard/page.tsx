"use client";
import {
  MdAddChart,
  MdDashboard,
  MdManageHistory,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

import { GiSplitCross } from "react-icons/gi";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import React, { useMemo, useState } from "react";

import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link"; // Import Link from Next.js

import { FaJediOrder, FaUserCog } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useUser } from "@/components/context/UserContext";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const userRole = {
  ADMIN: "ADMIN",
  USER: "USER",
};

const AdminDashboardLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { user, setIsLoading, isLoading } = useUser();
  let sidebarItems;
  sidebarItems = useMemo(() => {
    switch (user?.role) {
      case userRole.USER:
        return [
          {
            key: "UserDashboard",
            icon: <MdDashboard />,
            label: <Link href={"/user/dashboard"}>Dashboard</Link>,
          },
          {
            key: "MyReviews",
            icon: <MdOutlineProductionQuantityLimits />,
            label: <Link href={"/user/dashboard/my-reviews"}>My Reviews</Link>,
          },
          {
            key: "CreateReview",
            icon: <MdAddChart />,
            label: <Link href={"/user/dashboard/create-review"}>Create Review</Link>,
          },
          {
            key: "OrderHistory",
            icon: <FaMoneyCheckDollar />,
            label: <Link href={"/user/dashboard/view-order-history"}>Payment History</Link>,
          },
        ];
  
      case userRole.ADMIN:
        return [
          {
            key: "AdminDashboard",
            icon: <MdDashboard />,
            label: <Link href={"/admin/dashboard"}>Dashboard</Link>,
          },
          {
            key: "ReviewModeration",
            icon: <MdManageHistory />,
            label: "Review Moderation",
            children: [
              {
                key: "PendingReviews",
                icon: <MdManageHistory />,
                label: <Link href={"/admin/dashboard/pending-reviews"}>Pending Reviews</Link>,
              },
              {
                key: "PublishedReviews",
                icon: <MdManageHistory />,
                label: <Link href={"/admin/dashboard/published-reviews"}>Published Reviews</Link>,
              },
            ],
          },
          {
            key: "PremiumReviewManagement",
            icon: <MdOutlineProductionQuantityLimits />,
            label: "Premium Reviews",
            children: [
              {
                key: "AddPremiumReview",
                icon: <MdAddChart />,
                label: <Link href={"/admin/dashboard/add-premium-review"}>Add Premium Review</Link>,
              },
              {
                key: "ManagePremiumReviews",
                icon: <MdManageHistory />,
                label: <Link href={"/admin/dashboard/manage-premium-reviews"}>Manage Premium Reviews</Link>,
              },
            ],
          },
          {
            key: "UserManagement",
            icon: <FaUserCog />,
            label: "User Management",
            children: [
              {
                key: "AllUsers",
                icon: <FaUserCog />,
                label: <Link href={"/admin/dashboard/all-users"}>All Users</Link>,
              },
              {
                key: "DeactivateUsers",
                icon: <GiSplitCross />,
                label: <Link href={"/admin/dashboard/deactivating-accounts"}>Deactivate Accounts</Link>,
              },
            ],
          },
          {
            key: "PaymentAnalytics",
            icon: <FaMoneyCheckDollar />,
            label: <Link href={"/admin/dashboard/payment-analytics"}>Payment Analytics</Link>,
          },
        ];
      default:
        return [];
    }
  }, [user]);
  

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        //   className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] min-w-f"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>
        <Content>
          <div
            style={{
            //   minHeight: 360,
              height: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet  />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboardLayout;
