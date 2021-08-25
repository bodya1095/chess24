// Core
import React from 'react';

// Router
import { Link } from 'react-router-dom';

// Types

export const ArticleListItem = ({ text, id }: {text:string, id: string}) => {
    const cuttedText = text.split('.')[ 0 ];

    return (
        <li>
            <Link to = { `/${id}` }>
                {cuttedText}
            </Link>
        </li>
    );
};
