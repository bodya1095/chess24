// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { ArticlesList } from '../../components/recordsList';

// Redux
import { useArticlesQuery } from '../../bus/articles/';

const Main: FC = () => {
    const { fetchMoreArticles } = useArticlesQuery();

    return (
        <main>
            <ArticlesList />
            <button onClick = { () => void fetchMoreArticles() }>Load more</button>
        </main>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
