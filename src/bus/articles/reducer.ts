import { Reducer } from 'redux';

// Types
import * as types from './types';

const initialState: types.ModifiedArticles = [];

export const articlesReducer: Reducer<types.ModifiedArticles, types.ArticlesActionTypes> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case types.SET_ARTICLES:
            return action.payload;

        case types.FETCH_MORE_ARTICLES:
            return [ ...state, ...action.payload ];

        default:
            return state;
    }
};
