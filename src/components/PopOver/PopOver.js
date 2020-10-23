import React, { useContext, useEffect } from 'react';
import { Popconfirm, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import Notification from '../Notification/Notification';
import { AppContext } from '../../context/AppContext';

const PopOver = (props) => {
    const { userState, movieState, loadingState } = useContext(AppContext);

    const [user, setUser] = userState;
    const [movie, setMovie] = movieState;
    const [loading, setLoading] = loadingState;

    const reloadTable = () => {
        axios.get('https://backendexample.sanbersy.com/api/data-movie')
            .then(res => {
                setMovie(res.data);
                setLoading(false);
            })
    }

    function confirm(e) {
        axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${props.value}`,
            { headers: { 'Authorization': `Bearer ${user.token}` } })
            .then(res => {
                console.log(e);
                Notification('success', 'Success!', props.successText);
                reloadTable();
            }).catch((err) => {
                Notification('error', 'Error!', `Something Wrong! ${err}`);
            });
    }

    useEffect(() => {
        setLoading(true);
    },[])

    return (
        <Popconfirm
            title={props.title}
            onConfirm={confirm}
            okText="Yes"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
        >
            <a href="#">{props.text}</a>
        </Popconfirm>
    );
}

export default PopOver;