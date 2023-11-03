import React from "react";
import blogData from "../data/blog";

function article() {
    return(
        <article>
            <h3>{blogData.title}</h3>
            <small>{blogData.date}</small>
            <p>{blogData.preview}</p>
        </article>
    )
}

export default article;