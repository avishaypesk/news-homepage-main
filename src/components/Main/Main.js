import React from 'react'
import MainArticle from '../MainArticle/MainArticle'
import ArticleList from '../ArticleList/ArticleList'
import NewArticles from '../NewArticles/NewArticles'

function Main() {
    return (
        <div className='flex flex-col space-y-12 lg:space-y-0 pt-12 lg:grid lg:grid-cols-[auto] lg:grid-rows-2 lg:gap-8'>
            <MainArticle className="col-span-2 row-span-2"/>
            <NewArticles className="col-start-3 row-span-2"/>
            <ArticleList className="col-span-3"/>
        </div>
    )
}

export default Main
