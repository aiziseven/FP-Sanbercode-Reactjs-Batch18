import React from 'react';
import { Button, Card, Col, Descriptions, Image, PageHeader, Row, Tooltip, Typography } from 'antd';
import { ArrowLeftOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Title } = Typography;

const ItemDetail = (props) => {
    return (
        <>
            <Title level={2}>Detail Movie</Title>
            <Row>
                <Col span={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image alt={props.title} src={props.image_url} />}
                    >
                        <Meta description={`Image of ${props.title}`} />
                    </Card>
                </Col>
                <Col span={20}>
                    <Descriptions title={props.title} layout='vertical'>
                        <Descriptions.Item label='Title'>{props.title}</Descriptions.Item>
                        <Descriptions.Item label='Year'>{props.year}</Descriptions.Item>
                        <Descriptions.Item label='Rating'>{props.rating} of 10</Descriptions.Item>
                        <Descriptions.Item label='Genre'>{props.genre}</Descriptions.Item>
                        <Descriptions.Item label='Duration'>{props.duration} min</Descriptions.Item>
                    </Descriptions>
                    <Card>
                        <p><b>Description:</b></p>
                        <p>{props.description}</p>
                        <p><b>Review:</b></p>
                        <p>{props.review}</p>
                        <p>
                            <Tooltip title='Back to Movies'>
                                <Link to='/movies'>
                                    <Button shape='circle' type='default' icon={<ArrowLeftOutlined />} />
                                </Link>
                            </Tooltip>
                            &nbsp;
                            &nbsp;
                            <Tooltip title={`Edit Data ${props.title}`}>
                                <Button shape='circle' type='default' icon={<EditOutlined />}></Button>
                            </Tooltip>
                            &nbsp;
                            &nbsp;
                            <Tooltip title={`Delete Data ${props.title}`}>
                                <Button shape='circle' type='danger' icon={<DeleteOutlined />}></Button>
                            </Tooltip>
                        </p>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default ItemDetail;