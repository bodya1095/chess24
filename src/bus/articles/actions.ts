// Instruments
import * as types from './types';

export const setArticlesAction: types.SetArticlesContract = (payload) => ({
    type: types.SET_ARTICLES,
    payload,
});

export const fetchMoreArticlesAction: types.FetchMoreArticlesContract = (payload) => ({
    type: types.FETCH_MORE_ARTICLES,
    payload,
});

