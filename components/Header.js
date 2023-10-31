'use client'
import React from 'react'
import Image from 'next/image'

import {
  MenuIcon, 
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import {signIn} from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { db } from '@/firebase'
import { collection, query } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { selectItems } from '@/app/Globalredux/Feautures/basketSlice'
import { useSelector } from 'react-redux'

import {useEffect} from 'react'
import { useSession } from 'next-auth/react'

const Header = () => {
    const router = useRouter()
   const {data: session}= useSession();
   const items = useSelector(selectItems)
  return (
    <header>
        

        {/* top nav begins */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            {/* top nav left */}
            <div className='mt-2  flex-grow sm:flex-grow-0'>
                <Image
                onClick={()=>router.push('/')}
                src="https://links.papareact.com/f90"
                width={150}
                height={40}
                objectFit='contain'
                className='cursor-pointer '   
                />
            </div>

            <div className='hidden sm:flex items-center h-10 bg-yellow-400 hover:bg-yellow-500 rounded-md flex-grow cursor-pointer'>
                <input type="text " className='h-full p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' />
                <SearchIcon className='h-12 p-4'/>
            </div>

            {/* topnav right */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
             
               {/* <div  className=' link'>
                    <p >mijan igoni</p>
                    <p  className='font-extrabold boldText' >Account & list</p>
                   
                  
                </div> */}
                {session ? 
                 <div onClick={signOut}  className='link'>
                 <p>{session.user.name}</p>
                <p  className='font-extrabold boldText' >Account & list</p>
              </div>:

               <div onClick={signIn}  className='link'>
                    <p>Signin</p>
                   {/* <p  className='font-extrabold boldText' >Account & list</p> */}
              </div>
                }
             
             

                <div className=' link'>
                    <p>Returns</p> 
                    <p className='font-extrabold'>& Orders</p>
                </div>
  
                <div onClick={()=>router.push('/checkout')} className='relative link flex items-center'>
                     <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full 
                     text-black font-bold'>{items.length}</span>
                    <ShoppingCartIcon className='h-10'/>
                    <p className=' hidden md:inline font-extrabold mt-2'>Basket</p>
                </div>

            </div>

        </div>

        {/* bottom nav */}
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white'>
            <p className='link flex items-center '>
                <MenuIcon className='h-6 mr-1'/>
                All
            </p>

            <p className='link'>Prime video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food and Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>

        </div>

    </header>
  )
}

export default Header