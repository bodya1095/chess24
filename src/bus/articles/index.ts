// Core
import { useSelector } from '../../hooks';

// Api
import { fetchArticles } from './api';

// Toglers
import { useTogglersRedux } from '../client';

export const useArticlesQuery = () => {
    const data = useSelector(({ articles }) => articles);
    const { togglersRedux: { isArticlesFetching }} = useTogglersRedux();

    const fetchMoreArticles = () => void fetchArticles(true);

    return {
        data,
        loading: isArticlesFetching,
        fetchMoreArticles,
    };
};

export const useArticlesActions = () => {
    const data = useSelector(({ articles }) => articles);
    const findOneArticle = (id: string) => data.find((article) => article.id === id);

    return {
        findOneArticle,
        data,
    };
};
