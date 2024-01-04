import React from 'react'
import './Loader.css'
const Loader = () => {
    return (
        <div className=' flex flex-col items-center justify-center h-[300px]' >
            <div className="spinner"></div>
            <p className='text-slate-400 text-2xl capitalize font-mono'>loading..</p>
        </div>
    )
}

export default Loader