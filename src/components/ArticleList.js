import React from 'react';
import blogData from "../data/blog";
import Article from "../components/Article";

function ArticleList() {
    return(
        <main>
            {blogData.posts.map((articleData) =>
            <Article key={articleData.id} data={articleData}/>
        )}
        </main>
    )
}

export default ArticleList;