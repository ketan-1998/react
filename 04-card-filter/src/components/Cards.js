import React, { useState } from 'react'
import Card from './Card'
const Cards = ({ courses, category }) => {
    const [likedCourses, setLikedCourses] = useState([])
    const getAllCourses = () => {
        if (category === 'All') {
            let allCourses = []
            Object.values(courses).forEach((singleType) => {
                singleType.forEach((course) => {
                    allCourses.push(course)
                })
            })
            return allCourses
        }
        else {
            return courses[category]
        }


    }
    return (
        <div className='flex flex-wrap justify-center  gap-4 mx-auto w-[900px] pb-10'>
            {
                getAllCourses().map((course) => {
                    return <Card key={course.id} {...course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    )
}

export default Cards