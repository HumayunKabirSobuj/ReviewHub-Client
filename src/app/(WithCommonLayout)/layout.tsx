<<<<<<< HEAD
import NavBar from '@/components/shared/Navbar';
import { Layout, MenuProps } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {/*Add Nav bar here <Navbar /> */}
            <NavBar />
            <main className="min-h-screen mt-20">

                {children}</main>
            <footer>Footer</footer>
        </>

    );
=======
import NavBar from '@/client-components/global/navigationbar';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="default-padding-body">
			<NavBar />

			{children}
			<footer>Footer</footer>
		</div>
	);
>>>>>>> 33fb3f0548125e1a136ee6db9e5ca1cb41dca82d
};

export default CommonLayout;
