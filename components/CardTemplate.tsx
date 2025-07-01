import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { assets } from '@/assets/assets'
import articals from '@/assets/articals.png'
import Image from 'next/image'

const CardTemplate = ({}) => {
  return (
    <div className=' shadow-lg border-gray-600 rounded-lg bg-gray-700 text-white flex flex-col gap-4 w-[350px]  mx-32 my-8 pb-0'>
        <div className='flex gap-2 ml-32 font-semibold pt-6'>
            <p className='bg-gray-500 p-2 px-4 text-[12px] rounded-md'>React JS</p>
            <p className='bg-gray-500  p-2 px-4 text-[12px] rounded-md '>Web Development</p>
        </div>
        <div className='flex items-center pt-4 mx-4'>
            <div className='flex'> 
                <FaChevronLeft/>
                <FaChevronRight/>
            </div>
            <p>Dev X</p>
        </div>
        <div>
            <h2 className='text-xl font-bold  mx-4'>Agency Website <br/> Development for Dev X</h2>
            <Image src={articals} alt='logo' className='w-full mb-2'/>
        </div>
        
    </div>
  )
}

export default CardTemplate