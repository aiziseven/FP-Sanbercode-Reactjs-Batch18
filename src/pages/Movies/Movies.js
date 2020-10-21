import { Col, Row } from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
import CardItem from '../../components/CardItem/CardItem';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [
                {
                    id: 0,
                    title: "",
                    description: "",
                    year: 0,
                    duration: 0,
                    genre: "",
                    rating: 8,
                    review: null,
                    image_url: ""
                }
            ]
        };
    }

    componentDidMount() {
        axios.get('https://backendexample.sanbersy.com/api/data-movie')
            .then(response => {
                this.setState({
                    movie: response.data
                })
            })
    }

    render() {
        return (
            <Row>
                {this.state.movie.map((m, index) => {
                    return (
                        <Col key={index} span={4} style={{ marginBottom: '20px ' }}>
                            <CardItem
                                title={m.title}
                                description={m.description}
                                image_url={m.image_url}
                            />
                        </Col>
                    )
                })}
            </Row>
        );
    }
}

export default Movies;