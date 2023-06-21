import React from 'react'
import MainArticle from '../MainArticle/MainArticle'
import ArticleList from '../ArticleList/ArticleList'
import NewArticles from '../NewArticles/NewArticles'

function Main() {
    return (
        <div className='pt-12 grid grid-cols-3 grid-rows-2 gap-4'>
            <MainArticle className="col-span-2 row-span-2"/>
            <NewArticles className="col-start-3 row-span-2"/>
            <ArticleList className="col-span-3"/>
        </div>
    )
}

export default Main
