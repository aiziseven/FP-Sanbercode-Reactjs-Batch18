import { Col, Row, Typography } from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
import CardItem from '../../components/CardItem/CardItem';

const { Title } = Typography;

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: [
                {
                    id: 0,
                    genre: '',
                    image_url: '',
                    singlePlayer: '',
                    multiplayer: '',
                    name: '',
                    platform: '',
                    release: '',
                }
            ]
        };
    }

    componentDidMount() {
        axios.get('https://backendexample.sanbersy.com/api/data-game')
            .then(response => {
                this.setState({
                    game: response.data
                })
            })
    }

    render() {
        return (
            <Row>
                <Col span={24}>
                    <Title level={2}>Games List</Title>
                </Col>
                <Col span={24}>
                    &nbsp;
                </Col>
                {this.state.game.map((m, index) => {
                    return (
                        <Col key={index} span={6} style={{ marginBottom: '20px ' }}>
                            <CardItem
                                dataType='games'
                                id={m.id}
                                name={m.name}
                                singlePlayer={m.singlePlayer}
                                multiplayer={m.multiplayer}
                                image_url={m.image_url}
                            />
                        </Col>
                    )
                })}
            </Row>
        );
    }
}

export default Games;