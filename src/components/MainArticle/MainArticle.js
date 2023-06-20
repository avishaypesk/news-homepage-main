import React from 'react';
import web3 from '../../assets/images/image-web-3-desktop.jpg';

function MainArticle({ className }) {
    return (
        <article className='font-inter grid grid-cols-2 grid-rows-2 gap-8 max-w-3xl'>
            <img className="col-span-2" src={web3} alt='Web 3 illustration' />
            <h1 className='text-very-dark-blue font-extrabold text-5xl col-start-1 col-end-2 row-start-2 row-end-3'>The Bright Future of Web 3.0?</h1>
            <p className='col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col'>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                <button className='uppercase bg-soft-red text-off-white py-3 px-8 tracking-widest text-sm hover:bg-very-dark-blue font-semibold'>Read More</button>
            </p>
        </article>
    )
}


export default MainArticle