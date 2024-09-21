import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import logo from "../../assets/S.png"
import { useAppSelector } from "../../redux/hook";
import { TUser, useCurrentToken } from "../../redux/feature/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { SidebarGenerator } from "../../utils/sidebarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { userPaths } from "../../routes/user.routes";
import { Link } from "react-router-dom";

const userRole = {
    ADMIN: 'admin',
    USER: 'user',
}

const Sidebar = () => {
    const token = useAppSelector(useCurrentToken);
    let user;

    if (token) {
        user = verifyToken(token)
    }

    const role = (user as TUser)?.role;

    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = SidebarGenerator(adminPaths, userRole.ADMIN)
            break;

        case userRole.USER:
            sidebarItems = SidebarGenerator(userPaths, userRole.USER)
            break;

        default:
            break;
    }
    return (
        <Sider
            style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Link to="/">
                <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                    <img src={logo} alt="" style={{ height: '50px', width: '50px', margin: '0 15px' }} />
                    <h2>PicoStore</h2>
                </div>
            </Link>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;