import React from 'react';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const CardItem = (props) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <img
                    alt={props.title}
                    src={props.image_url}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
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