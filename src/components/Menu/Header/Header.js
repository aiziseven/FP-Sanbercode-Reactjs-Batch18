import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderMenu = () => {
    return (
        <Header style={{ padding: 0 }}>
            <Menu style={{ float: 'right' }} theme="dark" mode="horizontal">
                <Menu.Item key="1">About</Menu.Item>
                <Menu.Item key="2">Contact</Menu.Item>
            </Menu>
        </Header>
    );
}

export default HeaderMenu;