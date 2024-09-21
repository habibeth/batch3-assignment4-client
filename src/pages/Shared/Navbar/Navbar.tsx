import { useState } from 'react';
import { Layout, Menu, Drawer, Button, Badge, Avatar } from 'antd';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/S.png'
import '../../../styles/Navbar.css'
import { useAppSelector } from '../../../redux/hook';
import { useCurrentToken } from '../../../redux/feature/auth/authSlice';
import { verifyToken } from '../../../utils/verifyToken';
import { useGetMyCartsQuery } from '../../../redux/feature/User/CartManagement.api';


const { Header } = Layout;

const Navbar = () => {

    const token = useAppSelector(useCurrentToken);

    let user: any;

    if (token) {
        user = verifyToken(token)
    }

    const { data: myCarts, isLoading, isFetching } = useGetMyCartsQuery(user?.email)

    const [drawerOpen, setDrawerOpen] = useState(false);

    const showDrawer = () => {
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const items = [
        {
            key: 'Home',
            label: <NavLink to={`/`}>Home</NavLink>
        },
        {
            key: 'Products',
            label: <NavLink to={`/products`}>Products</NavLink>
        },
        {
            key: 'About US',
            label: <NavLink to={`/about`}>About US</NavLink>
        },
        {
            key: 'Contact US',
            label: <NavLink to={`/contact`}>Contact US</NavLink>
        },
        {
            key: 'Dashboard',
            label: user?.role ? <NavLink to={`/${user.role}/dashboard`}>Dashboard</NavLink> : <NavLink to={`/login`}>Dashboard</NavLink>
        },
    ];

    if (isLoading && isFetching) {
        <div className="">Loading!!!</div>
    }

    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="" style={{ height: '50px', width: '50px' }} />
            </div>

            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                className="desktop-menu"
                style={{ flex: 1, minWidth: 0, textAlign: 'center' }}
            />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to={user?.role ? `/${user.role}/cart` : '/login'}>
                    <Badge count={myCarts?.data!.length}>
                        <Avatar size="large" icon={<ShoppingCartOutlined />} style={{ marginRight: '0px', cursor: 'pointer' }} />
                    </Badge>
                </Link>
            </div>

            <Button
                className="mobile-menu-button"
                type="text"
                icon={<MenuOutlined style={{ color: '#fff' }} />}
                onClick={showDrawer}
                style={{ marginRight: 'auto' }}
            />

            <Drawer
                title="Menu"
                placement="left"
                onClose={closeDrawer}
                open={drawerOpen}
            >
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['2']}
                    items={items}
                />
            </Drawer>
        </Header>
    );
};

export default Navbar;