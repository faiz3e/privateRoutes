import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <div>
        <Route {...rest} render={(props) => (
            false === true
                ?
                <Component {...props} />
                :
                <Redirect to='/' />
        )} />
    </div>
)

export default PrivateRoutes