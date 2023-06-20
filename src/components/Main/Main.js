import React from 'react'
import MainArticle from '../MainArticle/MainArticle'
import ArticleList from '../ArticleList/ArticleList'
import NewArticles from '../NewArticles/NewArticles'

function Main() {
    return (
        <div className='pt-12 grid grid-cols-2 grid-rows-2 gap-4'>
            <MainArticle />
            <NewArticles />
            <ArticleList />
        </div>
    )
}

export default Main