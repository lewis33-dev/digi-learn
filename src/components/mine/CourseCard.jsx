import { StarIcon } from 'lucide-react'
import { ArrowRightCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CourseCard = () => {
  return (
    <div className='w-[250px] h-[300px] shadow-sm rounded-xl hover:shadow-md'>
        <div className='w-full h-[180px] bg-slate-800 rounded-t-xl'>

        </div>
        <div className='p-1.5'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-sm text-gray-700 inline-flex items-end'><StarIcon className='text-amber-500'/> <span>45</span></p>
                <Link href='/courses/1'> <ArrowRightCircle/></Link>
            </div>
            <h2 className='font-semibold'>My Course</h2>
            <p className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae atque quo molestias, distinctio sed ipsa excepturi ad laborum voluptatibus expedita accusantium accusamus suscipit omnis, nulla explicabo modi nisi officiis cum?</p>
        </div>

    </div>
  )
}

export default CourseCard