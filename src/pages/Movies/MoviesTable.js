import { Table, Tag, Space, Image, Button, Tooltip } from 'antd';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year'
    },
    {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration'
    },
    {
        title: 'Genre',
        dataIndex: 'genre',
        key: 'genre'
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating'
    },
    {
        title: 'Image',
        dataIndex: 'image_url',
        key: 'image_url',
        render: (text, row) =>
            <Tooltip title='click to show full image'>
                <Image
                    width={50}
                    height={50}
                    src={text}
                />
            </Tooltip>
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, row) =>
            // console.log('id ', row.id)
            <>
                <Button type='primary'>
                    <Link to='/movies'> Edit</Link>
                </Button>
        &nbsp;
        &nbsp;
                <Button type='danger'>
                    Delete
            </Button>
            </>
    },
];

function MoviesTable() {
    const { movieState, loadingState } = useContext(AppContext);
    const [movie, setMovie] = movieState;
    const [loading, setLoading] = loadingState;

    useEffect(() => {
        axios.get('https://backendexample.sanbersy.com/api/data-movie')
            .then(res => {
                setMovie(res.data);
                setLoading(false);
            })
    }, []);

    return (
        <>
            <Button type='primary'>
                <Link to='/movies-add'>
                    Add New Movie
                </Link>
            </Button>
            <br />
            <br />
            <Table
                columns={columns}
                dataSource={movie}
                loading={loading}
                pagination={{ pageSize: 10 }}
                rowKey={record => record.id}
                expandable={{
                    expandedRowRender: record => [
                        <p style={{ margin: 0 }}><b>Description:</b> {record.description}</p>,
                        <br />,
                        <p style={{ margin: 0 }}><b>Review:</b> {record.review}</p>,
                        <br />,
                        <p style={{ margin: 0 }}><b>Image:</b></p>,
                        <br />,
                        <p style={{ margin: 0 }}>
                            <Image
                                src={record.image_url}
                            />
                        </p>,
                    ]
                }}
            />
        </>
    );
}

export default MoviesTable;