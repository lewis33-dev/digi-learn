import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Bell } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex items-center justify-between py-1 px-4 shadow-md'>
        <div>
            <Link href='/'>
                <p className='font-semibold text-lg'>Digital</p>
                <p className='font-semibold pl-1'>Learning .</p>
            </Link>
        </div>
        <nav className='flex items-center gap-2'>
            <Link href='/classes'><Button variant='link'>Classes</Button></Link>
            <Link href='/jobs'><Button variant='link'>Jobs</Button></Link>
            <div className='relative cursor-pointer'>
                <span className='bg-amber-500 animate-ping absolute h-2 w-2 rounded-full'> .</span>
                <Bell/>
            </div>
            <div className='bg-amber-500 w-10 h-10 rounded-full border-2 shadow-md'></div>
        </nav>
    </header>
  )
}

export default Header