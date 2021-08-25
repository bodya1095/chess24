import React from 'react';
import { useArticlesQuery } from '../../bus/articles';
import { ArticleListItem } from '../../elements/articleListItem';

export const ArticlesList = () => {
    const { data } = useArticlesQuery();

    return (
        <ul>
            {data.map((article) => {
                return (
                    <ArticleListItem
                        id = { article.id }
                        key = { article.id }
                        text = { article.text }
                    />
                );
            })}
        </ul>
    );
};
