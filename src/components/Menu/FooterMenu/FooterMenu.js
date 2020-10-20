import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
const yearNow = new Date().getFullYear();

const FooterMenu = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>aizi_seven &copy;{yearNow} Designed by Ant UED</Footer>
    );
}

export default FooterMenu;