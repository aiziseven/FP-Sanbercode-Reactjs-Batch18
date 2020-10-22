import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = props => {
    const [login, setLogin] = useState(0);
    const [movie, setMovie] = useState([
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
    ]);
    const [loading, setLoading] = useState(true);

    const currentUser = JSON.parse(localStorage.getItem('user'));
    const initiateUser = currentUser ? currentUser : null;
    const [user, setUser] = useState(initiateUser);
    const [warn, setWarn] = useState('none');
    const [msg, setMsg] = useState('');
    const [typeAlert, setTypeAlert] = useState('error');
    const [titleAlert, setTitleAlert] = useState('error');
    const [submitted, SetSubmitted] = useState(false);
    const [movieDetail, setMovieDetail] = useState([
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
    ]);

    return (
        <AppContext.Provider value={{
            loginState: [login, setLogin],
            movieState: [movie, setMovie],
            loadingState: [loading, setLoading],
            userState: [user, setUser],
            warnState: [warn, setWarn],
            msgState: [msg, setMsg],
            typeAlertState: [typeAlert, setTypeAlert],
            titleAlertState: [titleAlert, setTitleAlert],
            submittedState: [submitted, SetSubmitted],
            movieDetailState: [movieDetail, setMovieDetail],
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
