import React from 'react'
import Tours from './components/Tours'
import Data from './data'
import { useState } from 'react'
const App = () => {
  const [allTours, setAllTour] = useState(Data)
  function removeTour(id) {
    let newTours = allTours.filter((tour) => tour.id !== id)
    setAllTour(newTours)
  }
  function refTour(){
    setAllTour(Data)
  }
  return (
    <div className='bg-slate-900 w-screen min-h-screen text-slate-200 pt-10 pb-10 space-y-5 select-none'>
      <h2 className='w-10/12 mx-auto bg-slate-400 text-slate-800 rounded-sm  text-center capitalize text-[35px] font-mono '>tour plans</h2>
      <Tours allTours={allTours} removeTour={removeTour} refTour={refTour}/>
    </div>
  )
}

export default App