// Core
import React, { FC, Suspense } from 'react';

// Router
import { Route, Switch } from 'react-router-dom';


import { Main } from '../../../pages';

import { Article } from '../../../pages/Article';


export const Routes: FC = () => {
    return (
        <Suspense fallback = { <div/> }>
            <Switch>
                <Route
                    exact
                    path = '/'>
                    <Main />
                </Route>
                <Route
                    exact
                    component =  { Article }
                    path = '/:id'
                />
            </Switch>
        </Suspense>
    );
};
