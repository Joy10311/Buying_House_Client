import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/UseAuth/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { isLoading, user } = useAuth();
    if (isLoading) {
        return <p>isLoading.....;</p>
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                >

                </Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;