import React, { useState, useEffect } from 'react';
import web3 from '../../assets/images/image-web-3-desktop.jpg';
import web3mobile from '../../assets/images/image-web-3-mobile.jpg'

function MainArticle({ className }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <article className={`font-inter lg:grid lg:grid-cols-2 lg:grid-rows-[fr,auto] lg:gap-8 ${className}`}>
            <img className="col-span-2" src={isMobile ? web3mobile : web3} alt='Web 3 illustration' />
            <h1 className='text-very-dark-blue font-extrabold text-5xl col-start-1 col-end-2 row-start-2 row-end-3 py-6 lg:py-0 lg:pr-6'>The Bright Future of Web 3.0?</h1>
            <div className='col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col text-[15px]'>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button className='uppercase bg-soft-red text-off-white mt-8 py-3 px-8 tracking-[4px] text-sm hover:bg-very-dark-blue font-semibold self-start'>Read More</button>
            </div>
        </article>
    );
}

export default MainArticle;
