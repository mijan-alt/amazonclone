'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToBasket } from '@/app/Globalredux/Feautures/basketSlice'
import { selectItems } from '@/app/Globalredux/Feautures/basketSlice'

const MAX_RATING = 5;
const MIN_RATING = 1;


const Product = ({id,title, description, category, image, price}) => {
    const items = useSelector(selectItems)
    const [isClient, setIsClient] = useState(false)
    const dispatch = useDispatch()
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    const rating = useState(
        Math.floor(Math.random()* (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    const [hasPrime] = useState(Math.random() < 0.5)

    const addItemToBasket =()=>{
      const product = {
        id, 
        title, 
        description, 
        category, 
        image, 
        price,
      } 

      dispatch(addToBasket(product))
    }
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 '>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

        <Image src={image} height={200} width={200} objectFit='contain'/>
        <h4>{title}</h4>

        <div className='flex'>
            {Array(rating).fill().map((_, i)=>{
                return <StarIcon className='h-5 text-yellow-500'/>
            })}
            
        </div>

        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        
        <div className='mb-5'>
            <Currency quantity={price} currency='GBP'/>
        </div>
        
        <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Amazon_Prime_logo_%282022%29.svg/150px-Amazon_Prime_logo_%282022%29.svg.png" alt="" />
            <p className='text-xs text-gray-500'>Free next-day delivery</p>
        </div> 

        <button onClick={()=>addItemToBasket()} className='mt-auto button'>Add to Basket</button>
            
        
    
       
       

    </div>
  )
}

export default Product