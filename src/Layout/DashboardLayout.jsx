import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme, ConfigProvider } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SideBarItem } from "../utils/SideBarItem";
const { Header, Sider, Content } = Layout;
import logo from "../assets/logo.png";
import { menuSideBarItems } from "../themes/index";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useProfileQuery } from "../Redux/api/authApi";

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    const handleGoHomePage = () => {
        navigate("/");
    };

    const handleMenuSelect = ({ key }) => {
        if (key === "/logout") {
            navigate("/signin");
        } else {
            navigate(key);
        }

    };
    const { pathname } = useLocation();

    const [activeButton, setActiveButton] = useState(null);

    const handleNotification = () => {
        setActiveButton('notification');
        navigate("/notifications");
        console.log("Notification button clicked!");
    };


    const { data: profileData } = useProfileQuery();
    const handleProfile = () => {
        setActiveButton('profile');
        navigate("/profile");
    };

    return (
        <ConfigProvider theme={menuSideBarItems}>
            <Layout style={{}}>
                <Sider
                    width="300px"
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{
                        height: "100vh",
                        backgroundColor: "#FAF6EF",
                    }}
                >
                    <div className="demo-logo-vertical" />

                    <div
                        className="logo"
                        style={{
                            background: "#FAF6EF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // marginTop: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <div onClick={handleGoHomePage} style={{ cursor: "pointer" }}>
                            <img
                                style={{
                                    marginTop: "44px",
                                    marginBottom: "20px",
                                }}
                                src={logo}
                            />
                        </div>
                    </div>

                    <ConfigProvider theme={menuSideBarItems}>
                        <Menu
                            onClick={handleMenuSelect}
                            style={{
                                backgroundColor: "#FAF6EF",
                                color: "black",
                                marginTop: "10px",
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                                paddingBlockEnd: "1rem",
                                border: "none",                                // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                                // borderRadius: "10px",
                                width: `${collapsed ? "80px" : "290px"}`,
                            }}
                            selectedKeys={[pathname]}
                            mode="inline"
                            // defaultSelectedKeys={['1']}
                            items={SideBarItem}
                        />
                    </ConfigProvider>
                </Sider>

                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            backgroundColor: "#D0A65A",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                color: "white",
                                width: 64,
                                height: 64,
                            }}
                        />

                        <div className="flex pr-8">
                            <Button
                                className={`shadow-md ${activeButton === 'notification' ? 'bg-black' : 'bg-slate-400'}`}
                                type="text"
                                icon={<FaBell color="#ffffff" size={24} />}
                                onClick={handleNotification}
                                style={{
                                    fontSize: "16px",
                                    width: 52,
                                    height: 52,
                                    marginRight: "16px"
                                }}
                            />

                            {profileData?.data?.image ? (
                                <img src={profileData.data.image.publicFileUrl} alt="Profile Image" onClick={handleProfile} style={{ width: 52, height: 52, borderRadius: 10 }} />
                            ) : (
                                <Button
                                    className={`shadow-md ${activeButton === 'profile' ? 'bg-black' : 'bg-slate-400'}`}
                                    type="text"
                                    icon={<FaUser color="#ffffff" size={24} />}
                                    onClick={handleProfile}
                                    style={{
                                        fontSize: "16px",
                                        width: 52,
                                        height: 52,
                                    }}
                                />
                            )}
                        </div>

                    </Header>
                    <Content
                        style={{
                            // margin: "24px 16px",
                            padding: 12,
                            minHeight: 280,
                            background: "#F0E3CC",
                            // borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );


};
export default DashboardLayout;
