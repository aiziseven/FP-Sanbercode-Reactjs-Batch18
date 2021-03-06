import React, { useContext, useState } from 'react';
import 'antd/dist/antd.css';
import './Sidebar.css';
import { Layout, Menu, Tooltip, Typography } from 'antd';
import {
    KeyOutlined,
    PlayCircleOutlined,
    RocketOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import logo from '../../../logo.png';

const { Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

const Sidebar = () => {
    const { loginState } = useContext(AppContext);

    const [login, setLogin] = loginState;
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
        >
            <Menu theme="dark" mode="inline" style={{ height: '100%', borderRight: 0 }}>
                <div className='logo'>
                    <Tooltip title='Movies and Games'>
                        {
                            collapsed === true ?
                                <Title level={2} style={{ color: 'white' }} align='center'><PlayCircleOutlined /></Title>
                                :
                                <Title level={2} style={{ color: 'white' }} align='center'><PlayCircleOutlined /> M&G</Title>
                        }
                    </Tooltip>
                </div>

                {
                    login === 1 || localStorage.getItem('isLogin') && localStorage.getItem('user') ?
                        <Menu.Item key="1" icon={<KeyOutlined />}>
                            <Link to='/change-password'>Change Password</Link>
                        </Menu.Item>
                        : null
                }

                <SubMenu key="sub1" icon={<PlayCircleOutlined />} title="Movies">
                    <Menu.Item key="3"><Link to='/movies'>Show All Movies</Link></Menu.Item>
                    {
                        login === 1 || localStorage.getItem('isLogin') && localStorage.getItem('user') ?
                            <Menu.Item key="4"><Link to='/movies-table'>Manage Movies</Link></Menu.Item>
                            :
                            null
                    }

                </SubMenu>
                <SubMenu key="sub2" icon={<RocketOutlined />} title="Games">
                    <Menu.Item key="5"><Link to='/games'>Show All Games</Link></Menu.Item>
                    {
                        login === 1 || localStorage.getItem('isLogin') && localStorage.getItem('user') ?
                            <Menu.Item key="6"><Link to='/games-table'>Manage Games</Link></Menu.Item>
                            :
                            null
                    }
                </SubMenu>
            </Menu>
        </Sider >
    );
}

export default Sidebar;