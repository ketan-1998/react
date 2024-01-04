import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import FilterButton from './components/FilterButton'
import Cards from './components/Cards'
import Loader from './components/Loader'
import { filterData, apiUrl } from './data'

const App = () => {
  const [courses, setCourses] = useState(null)
  const [showLoader, setShowLoader] = useState(true)
  const [category,setCategory]=useState('All')
  async function fetchData() {
    setShowLoader(true)
    try {
      let res = await fetch(apiUrl)
      let data = await res.json()
      setCourses(data.data)
    } catch (error) {
      console.log('error in api call')
    }
    setShowLoader(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='bg-slate-700 min-h-screen'>
      <NavBar />
      <FilterButton filterData={filterData} category={category} setCategory={setCategory} />
      <div>
        {
          showLoader ? (<Loader />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  )
}

export default App