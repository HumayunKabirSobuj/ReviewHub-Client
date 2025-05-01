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
};

export default CommonLayout;
