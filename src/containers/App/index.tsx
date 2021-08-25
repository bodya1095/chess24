// Core
import React, { FC, useEffect, useCallback } from 'react';

// Elements
import { Header } from '../../elements/header/header';

import { useTogglersRedux } from '../../bus/client';
import { Routes } from './Routes';

// API
import { fetchArticles } from '../../bus/articles/api';

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        fetchArticles();
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);


    return (

        <div>
            <Header />
            <Routes />
        </div>

    );
};
