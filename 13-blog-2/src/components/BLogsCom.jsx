import React from 'react'
import { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'
import PostCom from './PostCom'
import Loading from './Loading'
const BLogsCom = () => {
  const {loading,posts,themeMod}=useContext(BlogContext)
  return (
    <div className={`w-10/12  max-w-[800px] mx-auto  capitalize font-semibold py-[70px]  ${
      themeMod === "light"
        ? "bg-[#bfbfbf] text-[#404040]"
        : "bg-[#595959] text-[#bfbfbf]"
    }  rounded-lg px-10`}>{
      loading?(<Loading/>):(posts.map((post)=>(<PostCom {...post} key={post.id}/>)))
      }</div>
  )
}

export default BLogsCom