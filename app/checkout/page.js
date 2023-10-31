'use client'
import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../Globalredux/Feautures/basketSlice'
import CheckoutProduct from './CheckoutProduct'
import ReduxProvider from '../Globalredux/ReduxProvider'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'


const stripePromise = loadStripe(process.env.stripe_public_key)

const page = () => {
   
    const {data: session}= useSession()
    const total = useSelector(selectTotal)
    const items = useSelector(selectItems)
   
    const createCheckoutSession= async ()=> {

        const stripe = await stripePromise
        //call the backend to create a checkout session
        try {
            const res= await axios.post('/api/checkout_sessions', 
            {
              items:items,
              email:session.user.email
            })
        
            //redirect the customer to  stripe checkout
            const result= await stripe.redirectToCheckout({
                sessionId:res.data.id
            })
           

            if (result.error){
                alert(result.error.message)
            }


            
        } catch (error) {
            console.log(error)
        }

    

    

        
      
    }
  return (
   
    <div className='bg-gray-100'>
        <Header/>

        <main className='lg:flex max-w-screen-2xl mx-auto'>
            {/* left */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                src="https://links.papareact.com/ikj"
                width={1020}
                height={250}
                objectfit="contain"
                alt='productImage'
                />

                <div className='flex flex-col p-5 space-y-10 bg-white'>
                   
                    <h1 className='text-3xl border-b pb-4'> 
                    {items.length === 0 ?
                     "Your basket is empty"
                    : 
                    "Shopping Basket"
                    }
                    </h1>

                    {items.length !== 0 && items.map((item, i)=>
                        <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        description={item.description}
                        category= {item.category}
                        image={item.image}
                        price={item.price}
                        hasPrime= {item.hasPrime}
                        />
                    )} 
                   
                </div>

            </div>

            {/* right */}
            <div className='flex flex-col bg-white p-10 shadow-md'>
                {items.length> 0 && (
                    <>
                        <h2 className='whitespace-nowrap'>Subttotal ({items.length} items) :{" "}
                            <span className='font-bold'>
                                <Currency quantity={total} currency='GBP'/>
                            </span>
                        </h2>

                        <button
                        role="link" 
                        onClick={createCheckoutSession}
                        disabled={!session}
                        className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                            {!session ? "Sign in to checkout" : "Proceed to checkout"}
                        </button>

                        {/* <button className='button mt-2'>
                            Proceed to checkout
                        </button> */}
                        {/* 03:24:13.717 */}
                    </>
                )}
            </div>


        </main>
    </div>
    
   
  )
}

export default page