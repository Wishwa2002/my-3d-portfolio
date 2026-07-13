import React from 'react'
import {expCards} from "../constants/index.js"

const TitleHeader = ({title,sub}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className='hero-badge'>
            <p>{sub}</p>
        </div>
        <div className='font-semibold md:text-3xl text-center'>
            {title}

        </div>
        <div className='mt-32 relative'>
            <div className='relative z-50 xl:space-y-32 space y-10'>
                {expCards.map((card) =>(
                    <div key={card.title} className='exp-card-wrapper'></div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default TitleHeader