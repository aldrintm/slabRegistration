import React from 'react'
import { useSelector } from 'react-redux'
import Post from './post/Post'

{
  /* All Postings */
}
const Posts = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  return (
    <>
      <div className='container mx-auto bg-rose-400 p-4'>
        <h1 className='text-center text-2xl text-white font-bold p-4'>
          Lists of all posts below
          <Post />
          <Post />
        </h1>
      </div>
    </>
  )
}

export default Posts
