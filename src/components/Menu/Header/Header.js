import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';

const { Header } = Layout;

const HeaderMenu = () => {
    const { loginState } = useContext(AppContext);

    const [login, setLogin] = loginState;

    const handleOut = () => {
        localStorage.clear();
        setLogin(0);
    }

    return (
        <Header style={{ padding: 0 }}>
            <Menu style={{ float: 'right' }} theme="dark" mode="horizontal" selectedKeys={0}>
                {
                    login === 1 || localStorage.getItem('isLogin') && localStorage.getItem('user') ?
                        <>
                            <Menu.Item key="20" icon={<UserOutlined />}>
                                Hello {JSON.parse(localStorage.getItem('user')).name}
                            </Menu.Item>
                            <Menu.Item key="7" icon={<LogoutOutlined />} onClick={handleOut}>
                                <Link to='/' >Logout</Link>
                            </Menu.Item>
                        </>
                        :
                        <Menu.Item key="8" icon={<LoginOutlined />}>
                            <Link to='/' >Login</Link>
                        </Menu.Item>
                }
            </Menu>
        </Header>
    );
}

export default HeaderMenu;