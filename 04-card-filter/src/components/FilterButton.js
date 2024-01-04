import React from 'react'

const FilterButton = ({ filterData, category, setCategory }) => {
    return (
        <div className='flex gap-4 justify-center flex-wrap m-5'>
            {
                filterData.map((btn) => {
                    return <button className={`px-5 py-1 text-slate-400 rounded ${category===btn.title?('bg-slate-500 text-slate-900'):('bg-slate-900 text-slate-500')}`} onClick={() => { setCategory(btn.title) }} key={btn.id}>{btn.title}</button>
                })
            }
        </div>
    )
}

export default FilterButton