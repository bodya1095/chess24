export type Article = string;

export type Articles = Array<Article>;

export type ModifiedArticles = Array<{
    text: string
    id: string
}>

// ----------------------------- Fetch -----------------------------
export const SET_ARTICLES = 'SET_ARTICLES';
export type SetArticlesActionType = {
    type: typeof SET_ARTICLES;
    payload: ModifiedArticles;
};
export type SetArticlesContract = (payload: ModifiedArticles) => SetArticlesActionType

// ----------------------------- Fetch More -----------------------------
export const FETCH_MORE_ARTICLES = 'FETCH_MORE_ARTICLES';
export type FetchMoreArticlesActionType = {
    type: typeof FETCH_MORE_ARTICLES;
    payload: ModifiedArticles;
};
export type FetchMoreArticlesContract = (payload: ModifiedArticles) => FetchMoreArticlesActionType

export type ArticlesActionTypes =
    | SetArticlesActionType
    | FetchMoreArticlesActionType

