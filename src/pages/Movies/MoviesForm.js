import { Loading3QuartersOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Button, Select, Slider, Row, Col, Image, Typography, Alert } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardItem from '../../components/CardItem/CardItem';
import Notification from '../../components/Notification/Notification';
import { AppContext } from '../../context/AppContext';

const { Title } = Typography;
const { Option } = Select;

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 9 },
};

const tailLayout = {
    wrapperCol: { offset: 2, span: 16 },
};

const MoviesForm = () => {
    const { movieState, loadingState, userState, submittedState } = useContext(AppContext);

    const [movie, setMovie] = movieState;
    const [user, setUser] = userState;
    const [submitted, setSubmitted] = submittedState;
    const [form] = Form.useForm();

    // useEffect(() => {
    //     axios.get('https://backendexample.sanbersy.com/api/data-movie')
    //         .then(res => {
    //             setMovie(res.data);
    //             setLoading(false);
    //         })
    // },[]);

    const onFinish = values => {
        console.log('Success:', values);
        setSubmitted(true);
        axios.post('https://backendexample.sanbersy.com/api/data-movie',
            {
                title: values.title,
                description: values.description,
                year: values.year,
                duration: values.duration,
                genre: values.genre,
                rating: values.rating,
                review: values.review,
                image_url: values.image_url
            },
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        ).then((response) => {
            form.resetFields();
            Notification('success', 'Success!', 'Data has been added!');
            setSubmitted(false);
            form.resetFields();
        }).catch((err) => {
            console.log(err);
            Notification('error', 'Error!', 'Failed to submit data');
            setSubmitted(false);
        })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        Notification('error', 'Error!', 'Failed to submit data');
    };

    return (
        <Row>
            <Col span={16}>
                <Form
                    form={form}
                    {...layout}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input title!' }]}
                        hasFeedback
                    >
                        <Input disabled={submitted == true ? true : false} />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input description!' }]}
                        hasFeedback
                    >
                        <Input.TextArea rows={4} disabled={submitted == true ? true : false} />
                    </Form.Item>

                    <Form.Item
                        label="Year"
                        name="year"
                        rules={[{ required: true, message: 'Please input year!' }]}
                        hasFeedback
                    >
                        <InputNumber
                            min={1980}
                            style={{ width: '100%' }}
                            disabled={submitted == true ? true : false}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Duration"
                        name="duration"
                        rules={[
                            { required: true, message: 'Please input duration!' },
                        ]}
                        hasFeedback
                    >
                        <InputNumber
                            min={1}
                            style={{ width: '100%' }}
                            disabled={submitted == true ? true : false}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Genre"
                        name="genre"
                        rules={[{ required: true, message: 'Please input genre!' }]}
                        hasFeedback
                    >
                        <Select disabled={submitted == true ? true : false}>
                            <Option value='Action'>Action</Option>
                            <Option value='Horror'>Horror</Option>
                            <Option value='Comedy'>Comedy</Option>
                            <Option value='Drama'>Drama</Option>
                            <Option value='Fantasy'>Fantasy</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[
                            { required: true, message: 'Please input rating!' },
                        ]}
                        hasFeedback
                    >
                        <InputNumber
                            min={1}
                            max={10}
                            style={{ width: '100%' }}
                            disabled={submitted == true ? true : false}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Review"
                        name="review"
                        rules={[{ required: true, message: 'Please input review!' }]}
                        hasFeedback
                    >
                        <Input.TextArea rows={4} disabled={submitted == true ? true : false} />
                    </Form.Item>

                    <Form.Item
                        label="Image URL"
                        name="image_url"
                        rules={[{ required: true, message: 'Please input image url!' }]}
                        hasFeedback
                    >
                        <Input.TextArea rows={4} disabled={submitted == true ? true : false} />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            {submitted == true ? <Loading3QuartersOutlined spin /> : 'Submit'}
                        </Button>
                        &nbsp;
                        &nbsp;
                        <Button type="danger" >
                            <Link to='/movies'>Cancel</Link>
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

            <Col span={8}>
                {/* <Image
                    width={400}
                    src=''
                    fallback="data:image/png;base64,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"
                /> */}
                <CardItem />
                <Title level={2}>Preview</Title>
            </Col>
        </Row>
    );
}

export default MoviesForm;