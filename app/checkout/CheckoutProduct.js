import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { addToBasket } from '../Globalredux/Feautures/basketSlice'
import { removeFromBasket } from '../Globalredux/Feautures/basketSlice'
import { useDispatch } from 'react-redux'
function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime}) {
    const dispatch = useDispatch();
    const addItemToBasket=()=> {
        const product ={
            id, 
            title,
            price, 
            rating,
            description,
            image
        }

    }

    const removeItemFromBasket= ()=> {
        //remove item from redux
        dispatch(removeFromBasket({id}))
    }

  return (
    <div className='grid grid-cols-5'>
        <Image
            src={image}
            height={200}
            width={200}
            objectFit='contain'
            alt="checkout product"
        />

        {/* middle section */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            
            <div className='flex'> 
                {Array(rating).fill().map((_, i)=>(
                     <StarIcon key={i} className='h-5 text-yellow-500'/>
                ))}
            </div>

            <p className='text-xs mt-2 mb-2 line-clamp-3'>
                {description}
            </p>

            <Currency quanity={price} currency='GBP'/>

            <div className='flex items-center space-x-2'> 
                <img 
                className='w-12'
                 loading='lazy'
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Amazon_Prime_logo_%282022%29.svg/150px-Amazon_Prime_logo_%282022%29.svg.png"
                 alt="" />

                 <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
        </div>
         
        {/* right add/removebutton */}

        <div className='flex flex-col space-y-2 justify-self-end'>
            <button onClick={addItemToBasket} className='button'>Add to Basket</button>
            <button onClick={removeItemFromBasket} className='button'>Remove From Basket</button>

        </div>
    </div>
  )
}

export default CheckoutProduct