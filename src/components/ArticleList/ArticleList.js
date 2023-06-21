import React from 'react'
import retro from '../../assets/images/image-retro-pcs.jpg'
import laptops from '../../assets/images/image-top-laptops.jpg'
import growth from '../../assets/images/image-gaming-growth.jpg'

function ArticleList( {className} ) {
  return (
    <ul className={`flex h-fit font-inter pt-8 space-x-8 ${className}`}>

      <li className='flex w-1/3'>
        <img src={retro} alt='retro pcs' className='h-[116px]' />
        <article className='pl-4'>
          <h2 className='text-grayish-blue text-3xl font-semibold'>01</h2>
          <h3 className='text-very-dark-blue text-base font-extrabold py-2 hover:text-soft-red cursor-pointer'>Reviving Retro PCs</h3>
          <p className='text-sm'>What happens when old PCs are given mordern upgrades?</p>
        </article>
      </li>

      <li className='flex w-1/3'>
        <img src={laptops} alt='retro pcs' className='h-[116px]'/>
        <article className='pl-4'>
          <h2 className='text-grayish-blue text-3xl font-semibold'>02</h2>
          <h3 className='text-very-dark-blue text-base font-extrabold py-2 hover:text-soft-red cursor-pointer'>Top 10 Laptops of 2022</h3>
          <p className='text-sm'>Our best picks for various needs and budgets.</p>
        </article>
      </li>

      <li className='flex w-1/3'>
        <img src={growth} alt='retro pcs' className='h-[116px]'/>
        <article className='pl-4'>
          <h2 className='text-grayish-blue text-3xl font-semibold'>03</h2>
          <h3 className='text-very-dark-blue text-base font-extrabold py-2 hover:text-soft-red cursor-pointer'>The Growth of Gaming</h3>
          <p className='text-sm'>How the pandemic has sparked fresh opportunities.</p>
        </article>
      </li>
    </ul>
  )
}

export default ArticleList