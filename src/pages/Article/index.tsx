// Core
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// Redux
import { useArticlesActions } from '../../bus/articles';

export const Article = () => {
    const { push } = useHistory();
    const { id } = useParams<{id:string}>();
    const { findOneArticle } = useArticlesActions();
    const findedArticle = findOneArticle(id);

    return (
        <div>
            <p>{findedArticle ? findedArticle.text : 'no text'}</p>
            <button onClick = { () => void push('/') }>back</button>
        </div>
    );
};
