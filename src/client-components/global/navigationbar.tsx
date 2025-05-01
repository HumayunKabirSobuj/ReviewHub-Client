'use client';

import Image from 'next/image';
import styles from '@/app/page.module.css';
import '@/../assets/root.css';
import '@/client-components/global/assets/navigationbar.css';
import { useRouter } from 'next/navigation';
import { ConfigProvider, Menu, MenuProps } from 'antd';
import { basicNavRoutes, AuthenticatedNavRoutes, MenuItem } from '@/utils/constants';
// import { useUser } from '@/context/UserContext';
// import { logout } from '@/services/AuthService';

import { useEffect, useState } from 'react';

export default function NavBar() {
	const router = useRouter();
	const [navRoutes, setNavRoutes] = useState<MenuItem[]>(basicNavRoutes);

	// const { user, setIsLoading } = useUser();

	// useEffect(() => {
	// 	if (user?.userId) {
	// 		setNavRoutes(AuthenticatedNavRoutes);
	// 	} else {
	// 		setNavRoutes(basicNavRoutes);
	// 	}
	// }, [user]);

	const onClick: MenuProps['onClick'] = (e) => {
		document.title = e.key;

		if (e.key == 'logout') {
			// setIsLoading(true);

			// logout();
			router.push('/');
		} else {
			router.push(e.key);
		}
	};
	return (
		<>
			<ConfigProvider
				theme={{
					components: {
						Menu: {
							itemHoverColor: '#000',
							itemColor: '#000',
							popupBg: '#002855',
						},
					},
				}}
			>
				<div className={`${styles.navContainer}  navigation-bar`}>
					<h1 className="siteName">REVIEW HUB</h1>
					<Menu mode="horizontal" onClick={onClick} items={navRoutes} className={styles.navStyle} />
				</div>
			</ConfigProvider>
		</>
	);
}
