import React from 'react'
import MainArticle from '../MainArticle/MainArticle'
import ArticleList from '../ArticleList/ArticleList'
import NewArticles from '../NewArticles/NewArticles'

function Main() {
    return (
        <div className='pt-12'>
            <MainArticle />
            <NewArticles />
            <ArticleList />
        </div>
    )
}

export default Main