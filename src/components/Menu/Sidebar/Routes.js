import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Login from '../../../pages/Login/Login';
import Movies from '../../../pages/Movies/Movies';
import MoviesForm from '../../../pages/Movies/MoviesForm';
import MoviesTable from '../../../pages/Movies/MoviesTable';
import Register from '../../../pages/Register/Register';

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route path='/register'>
                <Register />
            </Route>
            <Route path='/movies'>
                <Movies />
            </Route>
            <Route path='/movies-add'>
                <MoviesForm />
            </Route>
            <Route path='/movies-table'>
                <MoviesTable />
            </Route>
        </Switch>
    );
}

export default Routes;