import React from "react";

function NewArticle({ title, children }) {
    return (
      <article>
        <h3 className='cursor-pointer font-bold hover:text-soft-orange'>{title}</h3>
        <p className='text-xs leading-loose text-grayish-blue pt-2'>{children}</p>
      </article>
    );
  }
  

  export default NewArticle