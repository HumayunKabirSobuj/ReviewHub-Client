"use client";

import Image from "next/image";
import styles from "@/app/page.module.css";
import "@/../assets/root.css";
import "@/components/global/assets/navigationbar.css";
import { useRouter } from "next/navigation";
import { ConfigProvider, Menu, MenuProps } from "antd";
import {
  basicNavRoutes,
  AuthenticatedNavRoutes,
  MenuItem,
} from "@/utils/constants";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { logout } from "@/services/AuthServices";

export default function NavBar() {
  const { user, setIsLoading, isLoading } = useUser();
  const router = useRouter();
  const [navRoutes, setNavRoutes] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (user?.id) {
      setNavRoutes(AuthenticatedNavRoutes);
    } else {
      setNavRoutes(basicNavRoutes);
    }
  }, [user]);

  const onClick: MenuProps["onClick"] = async (e) => {
    document.title = e.key;

    const selectedItem = navRoutes.find((item) => item?.key === e.key);
    console.log({ selectedItem });

    if (selectedItem?.key === "logout") {
      setIsLoading(true); // প্রথমে loading শুরু করি
      await logout(); // async call শেষ না হওয়া পর্যন্ত wait করি
      setIsLoading(false); // তারপর loading false করি
      router.push("/");
    } else {
      router.push(selectedItem?.route || "/");
    }
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHoverColor: "#000",
            itemColor: "#000",
            popupBg: "#002855",
          },
        },
      }}
    >
      <div className={`${styles.navContainer} navigation-bar`}>
        <h1 className="siteName">REVIEW HUB</h1>
        <Menu
          mode="horizontal"
          onClick={onClick}
          items={navRoutes}
          className={styles.navStyle}
        />
      </div>
    </ConfigProvider>
  );
}
