import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/UseAuth/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { isLoading, user } = useAuth();
    if (isLoading) {
        return <div class="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">

            </div>
        </div>
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