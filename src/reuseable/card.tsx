import React from 'react'
import { Card } from '../variable/types/other';
const MyCard = (props:Card) => {
    const {cardContent,cardImg,sx,...rest}=props;
  return (
    <div className={`flex items-center gap-4 mb-2 ${rest}`}>
       <div>
        {
            cardImg &&(
                <figure>
                    <img src={cardImg} alt="" className={sx?? 'w-[4rem]'}/>
                </figure>
            )
        }
       </div>
       <div>{cardContent}</div>
    </div>
  )
}

export default MyCard;