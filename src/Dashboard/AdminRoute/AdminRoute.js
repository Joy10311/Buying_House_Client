import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/UseAuth/UseAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { admin, user } = useAuth();
    if (!admin) {
        return ('')
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email && admin ? children : <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                >

                </Redirect>}
            >

            </Route>
        </div>
    );
};

export default AdminRoute;