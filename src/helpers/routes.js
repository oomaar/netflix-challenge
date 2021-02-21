import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedinpath, children, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={() => {
                if (!user) {
                    return children;
                }

                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedinpath,
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}

export function ProtectedRoute({ user, children, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={({location}) => {
                if (user) {
                    return children;
                }

                if (!user) {
                    <Redirect 
                        to={{
                            pathname: 'signin',
                            state: {from: location}
                        }}
                    />
                }

                return null;
            }}
        />
    );
} // Bracket Hell !