import React, { useContext, useState } from 'react';
import { Button, Row, Col, Form, Input, Typography, Alert } from 'antd';
import { AppContext } from '../../context/AppContext';

const { Title } = Typography;

const Login = () => {
    const { loginState } = useContext(AppContext);

    const [login, setLogin] = loginState;
    const [warn, setWarn] = useState('none');
    const [msg, setMsg] = useState('');

    const onFinish = (values) => {
        console.log('success', values);
        setLogin(1);
    }

    const onFinishFailed = (error) => {
        console.log('failed', error);
        setWarn('block');
        setMsg('Woy Error');
    }

    return (
        <Row style={{ marginTop: '100px' }}>
            <Col span={8}></Col>
            <Col span={8}>
                <Title level={2} style={{ textAlign: 'center' }}>Apps</Title>
                <Form
                    // {...layout}
                    name='login'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label='Username'
                        name='username'
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item >
                        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <Alert
                    style={{ display: warn }}
                    message="Error"
                    description={msg}
                    type="error"
                    showIcon
                />
            </Col>
            <Col span={8}></Col>
        </Row>
    );
}

export default Login;