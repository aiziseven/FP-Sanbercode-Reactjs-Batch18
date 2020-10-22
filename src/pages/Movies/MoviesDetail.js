import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { AppContext } from '../../context/AppContext';

const MoviesDetail = (props) => {

    const { movieDetailState } = useContext(AppContext);

    const [movieDetail, setMovieDetail] = movieDetailState;
    const id = props.match.params.id;

    useEffect(() => {
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
            .then(res => {
                setMovieDetail(res.data);
            })
    }, []);

    return (
        <ItemDetail
            itemTitle='Movie Details'
            title={movieDetail.title}
            description={movieDetail.description}
            year={movieDetail.year}
            duration={movieDetail.duration}
            genre={movieDetail.genre}
            rating={movieDetail.rating}
            image_url={movieDetail.image_url}
        />
    );
}

export default MoviesDetail;