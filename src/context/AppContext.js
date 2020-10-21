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

    return (
        <AppContext.Provider value={{
            loginState: [login, setLogin],
            movieState: [movie, setMovie],
            loadingState: [loading, setLoading]
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
