import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { AppContext } from '../../context/AppContext';

const GamesDetail = (props) => {

    const { gameDetailState } = useContext(AppContext);

    const [gameDetail, setGameDetail] = gameDetailState;
    const id = props.match.params.id;

    useEffect(() => {
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
            .then(res => {
                setGameDetail(res.data);
            })
    }, []);

    return (
        <ItemDetail
            detailType='game'
            itemTitle='Game Details'
            name={gameDetail.name}
            platform={gameDetail.platform}
            genre={gameDetail.genre}
            singlePlayer={gameDetail.singlePlayer}
            multiplayer={gameDetail.multiplayer}
            release={gameDetail.release}
            image_url={gameDetail.image_url}
        />
    );
}

export default GamesDetail;