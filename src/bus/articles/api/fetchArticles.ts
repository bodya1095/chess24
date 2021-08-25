// Core
import { v4 } from 'uuid';

// Store
import { store } from '../../../@init';

// Actions
import { togglerCreatorAction } from '../../client';
import { setArticlesAction, fetchMoreArticlesAction } from '../actions';

// Types
import { FetchArticles } from './types';
import { Articles } from '../types';

export const fetchArticles: FetchArticles = async (isFetchMore = false)  => {
    store.dispatch(togglerCreatorAction({ type: 'isArticlesFetching', value: true }));
    try {
        const response = await fetch('https://baconipsum.com/api/?type=meat-andfiller', {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('Todos fetch failed');
        }

        const data: Articles = await response.json();

        const modifiedData = data.map((text) => ({
            text,
            id: v4(),
        }));

        if (isFetchMore) {
            store.dispatch(fetchMoreArticlesAction(modifiedData));
        } else {
            store.dispatch(setArticlesAction(modifiedData));
        }
    } catch (error) {
        console.log(error);
    } finally {
        store.dispatch(togglerCreatorAction({ type: 'isArticlesFetching', value: false }));
    }
};
