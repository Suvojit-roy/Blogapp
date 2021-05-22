import React from 'react'

export const Card = (image,title,description,source,link) => {
    return (
        <div>
            <a className="Blogstitle" target="_blank" rel="nonreferrer noreferrer" href={link}>
                        <img src={image} alt="Blog"/>
                        <div>
                            <h3>
                                {/* <span>{source}</span> */}
                            </h3>
                            {/* <h1>{title}</h1> */}
                            <p>{description}</p>
                        </div>
                    </a>
        </div>
    )
}

export default Card;
