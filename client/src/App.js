import React from 'react'
import { useEffect } from 'react'
import './index'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import SlabRegistration from './components/forms/SlabRegistration'
import Posts from './components/post/Posts'

const App = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getPosts)
  // }, [dispatch])

  return (
    <>
      <div className='bg-white md:hero md:bg-rose-100'>
        <div className='md:hero-content md:bg-white md:my-10 md:rounded-3xl'>
          <SlabRegistration />
          <Posts />
        </div>
      </div>
    </>
  )
}
export default App
