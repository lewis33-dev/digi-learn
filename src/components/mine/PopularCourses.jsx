import React from 'react'
import CourseCard from './CourseCard'

const PopularCourses = () => {
  return (
    <section className='flex items-center gap-2.5 flex-wrap py-3'>
        <CourseCard/>
        <CourseCard/>
    </section>
  )
}

export default PopularCourses