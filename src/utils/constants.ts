import { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number] & { route: string };

export const AuthenticatedNavRoutes: MenuItem[] = [
	{
		label: 'Home',
		key: '/',
		route: '/',
	},
	{
		label: 'About Us',
		key: 'about',
		route: '/about',
	},
	{
		label: 'Tutors',
		key: 'tutors',
		route: '/tutors',
	},
	{
		label: 'FAQ',
		key: 'faq',
		route: '/faq',
	},
	{
		label: 'Blog',
		key: 'blog',
		route: '/blog',
	},
	{
		label: 'Dashboard',
		key: 'dashboard',
		route: '/dashboard',
	},
	{
		label: 'Logout',
		key: 'logout',
		route: '/',
		
	},
];

export const basicNavRoutes: MenuItem[] = [
	{
		label: 'Home',
		key: '/',
		route: '/',
	},
	{
		label: 'About Us',
		key: 'about',
		route: '/about',
	},
	{
		label: 'Tutors',
		key: 'tutors',
		route: '/tutors',
	},
	{
		label: 'FAQ',
		key: 'faq',
		route: '/faq',
	},
	{
		label: 'Blog',
		key: 'blog',
		route: '/blog',
	},
	{
		label: 'Login',
		key: 'login',
		route: '/login',
	},
	{
		label: 'Register',
		key: 'register',
		route: '/register',
	},
];
