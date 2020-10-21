import React from 'react';
import 'antd/dist/antd.css';
import './Sidebar.css';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    PoweroffOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
    state = {
        collapsed: false,
        selected: 0
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    handleOut = () => {
        localStorage.clear();
    }

    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" style={{ height: '100%', borderRight: 0 }}>
                    <div className='logo' />
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                        </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Movies">
                        <Menu.Item key="3"><Link to='/movies'>Show All Movies</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/movies-add'>Add New Movie</Link></Menu.Item>
                        <Menu.Item key="5"><Link to='/movies-table'>Manage Movies</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Games">
                        <Menu.Item key="6"><Link to='/games'>Show All Games</Link></Menu.Item>
                        <Menu.Item key="8"><Link to='/games/new'>Create New Game</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />} />
                    <Menu.Item key="10" icon={<PoweroffOutlined />} onClick={this.handleOut}>
                        Logout
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default Sidebar;