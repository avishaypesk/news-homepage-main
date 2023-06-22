import React from 'react'
import retro from '../../assets/images/image-retro-pcs.jpg'
import laptops from '../../assets/images/image-top-laptops.jpg'
import growth from '../../assets/images/image-gaming-growth.jpg'
import ArticleListItem from '../ArticleListItem/ArticleListItem'

function ArticleList({ className }) {
  return (
      <ul className={`flex flex-col align-top lg:flex-row font-inter space-y-8 lg:space-y-0 lg:space-x-8 lg:pt-8 ${className}`}>

          <ArticleListItem src={retro} alt='retro pcs' number='01' title='Reviving Retro PCs'>
              What happens when old PCs are given modern upgrades?
          </ArticleListItem>

          <ArticleListItem src={laptops} alt='laptops' number='02' title='Top 10 Laptops of 2022'>
              Our best picks for various needs and budgets.
          </ArticleListItem>

          <ArticleListItem src={growth} alt='gaming growth' number='03' title='The Growth of Gaming'>
              How the pandemic has sparked fresh opportunities.
          </ArticleListItem>

      </ul>
  )
}

export default ArticleList