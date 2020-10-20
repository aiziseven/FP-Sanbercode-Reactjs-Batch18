import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Movies from '../../../pages/Movies/Movies';
import MoviesAdd from '../../../pages/Movies/MoviesAdd';
import MoviesTable from '../../../pages/Movies/MoviesTable';

const Routes = () => {

    return (
        <Switch>
            <Route path='/movies'>
                <Movies />
            </Route>
            <Route path='/movies-add'>
                <MoviesAdd />
            </Route>
            <Route path='/movies-table'>
                <MoviesTable />
            </Route>
        </Switch>
    );
}

export default Routes;