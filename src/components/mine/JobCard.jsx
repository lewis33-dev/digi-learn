import React from 'react'

const JobCard = () => {
  return (
    <div className='flex items-center gap-2'>
        <div className='rounded-full h-12 w-12 bg-slate-900'></div>
        <div>
            <h2 className='font-semibold'>Job Position</h2>
            <p className='font-semibold text-gray-600'>Onsite, Kenya</p>
        </div>
    </div>
  )
}

export default JobCard