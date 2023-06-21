import React from 'react'
import retro from '../../assets/images/image-retro-pcs.jpg'
import laptops from '../../assets/images/image-top-laptops.jpg'
import growth from '../../assets/images/image-gaming-growth.jpg'

function ArticleList( {className} ) {
  return (
    <ul className={`flex max-h-32 font-inter ${className}`}>

      <li className='flex'>
        <img src={retro} alt='retro pcs' />
        <article className='pl-6'>
          <h2 className='text-grayish-blue text-3xl font-semibold'>01</h2>
          <h3 className='text-very-dark-blue text-lg font-extrabold py-2'>Reviving Retro PCs</h3>
          <p className='text-sm'>What happens when old PCs are given mordern upgrades?</p>
        </article>
      </li>

      <li className='flex'>
        <img src={laptops} alt='retro pcs' />
        <article className='pl-6'>
          <h2 className='text-grayish-blue text-3xl font-semibold'>02</h2>
          <h3 className='text-very-dark-blue text-lg font-extrabold py-2'>Top 10 Laptops of 2022</h3>
          <p className='text-sm'>Our best picks for various needs and budgets.</p>
        </article>
      </li>

      <li className='flex'>
        <img src={growth} alt='retro pcs' />
        <article className='pl-6'>
          <h2 className='text-grayish-blue text-3xl font-semibold'>03</h2>
          <h3 className='text-very-dark-blue text-lg font-extrabold py-2'>The Growth of Gaming</h3>
          <p className='text-sm'>How the pandemic has sparked fresh opportunities.</p>
        </article>
      </li>
    </ul>
  )
}

export default ArticleList