import { entries } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import requests from '../utils/requests'

export default function Nav() {
  const router = useRouter();


  return (
    <nav>
      <div className='justify-evenly flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-scroll scrollbar-hide'>
        {
          entries(requests).map(([key, { title, url }]) => {
            return (
              <h2
                key={key}
                onClick={() => router.push(`/?genre=${key}`)}
                className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'
              >
                {title}
              </h2>
            );
          })
        }
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#0620A] h-10 w-1/12'>

      </div>
    </nav>
  )
}
