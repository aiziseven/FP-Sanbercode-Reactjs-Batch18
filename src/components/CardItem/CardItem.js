import React from 'react';
import { Card, Tooltip } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CardItem = (props) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <Link to={`/movies-detail/${props.id}`}>
                    <img
                        alt={props.title}
                        src={props.image_url}
                        width='240'
                        style={{
                            float: 'center',
                            objectFit: 'cover'
                        }}
                    />
                </Link>
            }
            actions={[
                <Tooltip title='View detail'>
                    <Link to={`/movies-detail/${props.id}`} >
                        <EyeOutlined key="detail">
                        </EyeOutlined>
                    </Link>
                </Tooltip>,
                <Tooltip title='Edit data'>
                    <EditOutlined key="edit" />
                </Tooltip>,
            ]}
        >
            <Meta
                title={props.title}
                description={props.description}
            />
        </Card>
    );
}

export default CardItem;