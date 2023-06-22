import React from 'react'
import NewArticle from '../NewArticle/NewArticle'

function NewArticles({ className }) {
  return (
    <div className={`bg-very-dark-blue text-off-white font-inter sm:w-80 ${className}`}>
      <div className='p-8 h-full'>
        <h1 className='text-soft-orange font-semibold text-4xl mb-6'>New</h1>

        < NewArticle title="Hydrogen VS Electric Cars" > Will the hydrogen-fueled cars ever catch up to EVs ?</NewArticle >

        <div className='h-px bg-dark-grayish-blue my-8'></div>

        <NewArticle title="The Downsides of AI Artistry">What are the possible adverse effects of on-demand AI image generation?</NewArticle>

        <div className='h-px bg-dark-grayish-blue my-8'></div>

        <NewArticle title="Is VC Funding Drying Up?">Private funding by VS firms is down 50% YOY. We take a look at what that means.</NewArticle>

      </div>
    </div>
  )
}

export default NewArticles