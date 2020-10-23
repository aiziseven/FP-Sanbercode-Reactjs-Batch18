import React from 'react';
import { Card, Tooltip, Typography } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Paragraph } = Typography;

const CardItem = (props) => {
    return (
        <Link to={`/movies-detail/${props.id}`}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={

                    <img
                        alt={props.title}
                        src={props.image_url}
                        width='240'
                        style={{
                            float: 'center',
                            objectFit: 'cover'
                        }}
                    />
                }
            >
                <Meta
                    title={props.title}
                    description={<Paragraph ellipsis={{ rows: 3 }}>{props.description}</Paragraph>}
                />
            </Card>
        </Link>
    );
}

export default CardItem;