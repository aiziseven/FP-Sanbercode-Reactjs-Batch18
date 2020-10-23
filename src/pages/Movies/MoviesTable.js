import { Table, Tag, Space, Image, Button, Tooltip, Input, Row } from 'antd';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PopOver from '../../components/PopOver/PopOver';
import Form from 'antd/lib/form/Form';

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
            <>
                <Button type='primary'>
                    <Link to={`/movies-edit/${row.id}`}> Edit</Link>
                </Button>
        &nbsp;
        &nbsp;
                <Button type='danger'>
                    <PopOver
                        text='Delete'
                        title={`Delete ${row.title} data?`}
                        successText='Data has been deleted!'
                        value={`${row.id}`}
                    />
                </Button>
            </>
    },
];

function MoviesTable() {
    const { movieState, loadingState } = useContext(AppContext);
    const [movie, setMovie] = movieState;
    const [loading, setLoading] = loadingState;

    const onFinish = (values) => {
        console.log(values);
    }

    const onFinishFailed = (err) => {
        console.log(err);
    }

    useEffect(() => {
        axios.get('https://backendexample.sanbersy.com/api/data-movie')
            .then(res => {
                setMovie(res.data);
                setLoading(false);
            })
    }, []);

    return (
        <>
            {/* <Row>
                <Form>
                    <Form.Item
                        label="Title"
                        name="title"
                    >
                        <Input name='title' />
                    </Form.Item>
                </Form>
            </Row> */}

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
                    ]
                }}
            />
        </>
    );
}

export default MoviesTable;