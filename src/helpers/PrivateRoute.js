import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Component } from 'react';

class PrivateRoute extends Component {
    render() {
        const { component, ...rest } = this.props;
        return (
            <Route {...rest} render={(props) => (
                localStorage.getItem('isLogin') && localStorage.getItem('user') ?
                    React.createElement(component, props)
                    :
                    <Redirect to={{
                        pathname: '/',
                    }} />
            )} />
        );
    }
}

export default PrivateRoute;