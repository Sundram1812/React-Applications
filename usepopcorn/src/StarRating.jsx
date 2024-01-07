import React from 'react'
import { useState } from 'react'
import {FaStar,FaRegStar} from "react-icons/fa"
import PropType from "prop-types"

StarRating.prototype={
    maxRating: PropType.number,
    color: PropType.string,
    size: PropType.number
}

function StarRating({maxRating=5, color='orange', size=30, message=[] , onRating}) {
    const[rating,setRating]=useState(0);
    const[hoverRating,setHoverRating]=useState(0);

    function handleOnclick(ratingCount){
        setRating(ratingCount);
        onRating(ratingCount);
    }

    const starStyle={
        fontSize: `${size}px`,
        color,
    }

    return (
        <div className='flex items-center sm:w-[70%] gap-5'>
            <div className='flex flex-wrap '>
                {
                    Array.from({length: maxRating}, ((_,i)=>{
                        return <span 
                                onClick={()=>handleOnclick(i+1)}
                                onMouseEnter={()=>setHoverRating(i+1)}
                                onMouseLeave={()=>setHoverRating(0)}
                                key={i} 
                                className=" cursor-pointer px-[1px]"
                            >

                            {
                                hoverRating===0 ?
                                rating > i  ? <FaStar style={starStyle} /> : <FaRegStar style={starStyle}/> :
                                hoverRating > i  ? <FaStar style={starStyle} /> : <FaRegStar style={starStyle}/>
                            }

                        </span>
                        
                    }))
                }
            </div>

            <span className="text-yellow-600 font-bold">
            {       
                message.length > 0 ? 
                message[hoverRating-1] || message[rating-1] : hoverRating || rating || ""
            }
            </span>
        </div>
    )
}

export default StarRating