import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PrivateRoute from '../../../helpers/PrivateRoute';
import Login from '../../../pages/Login/Login';
import Movies from '../../../pages/Movies/Movies';
import MoviesDetail from '../../../pages/Movies/MoviesDetail';
import MoviesForm from '../../../pages/Movies/MoviesForm';
import MoviesTable from '../../../pages/Movies/MoviesTable';
import Register from '../../../pages/Register/Register';
import LayoutMenu from '../LayoutMenu/LayoutMenu';

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
                <Register />
            </Route>

            <LayoutMenu>
                <PrivateRoute path='/movies' component={Movies} />
                <PrivateRoute path='/movies-add' component={MoviesForm} />
                <PrivateRoute path='/movies-table' component={MoviesTable} />
                <PrivateRoute exact path='/movies-detail/:id' component={MoviesDetail} />
            </LayoutMenu>
            {/* <Route path='/movies'>
                <Movies />
            </Route>
            <Route path='/movies-add'>
                <MoviesForm />
            </Route>
            <Route path='/movies-table'>
                <MoviesTable />
            </Route> */}
        </Switch>
    );
}

export default Routes;