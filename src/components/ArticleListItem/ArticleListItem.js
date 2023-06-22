import React from 'react'

function ArticleListItem({ src, alt, number, title, children }) {
    return (
        <li className='flex lg:w-1/3'>
            <img src={src} alt={alt} className='h-[116px]' />
            <article className='pl-4'>
                <h2 className='text-grayish-blue text-3xl font-semibold'>{number}</h2>
                <h3 className='text-very-dark-blue text-base font-extrabold py-2 hover:text-soft-red cursor-pointer'>{title}</h3>
                <p className='text-sm'>{children}</p>
            </article>
        </li>
    )
}

export default ArticleListItem