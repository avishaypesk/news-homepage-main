import React from "react";

function NewArticle({ title, children }) {
    return (
      <article>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-xs leading-loose text-grayish-blue pt-2'>{children}</p>
      </article>
    );
  }
  

  export default NewArticle