import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {

  // function getPhotos(){
  //   fetchPhotos()
  // }

  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button onClick={async ()=>{
        const data=await fetchPhotos('dogs')
        console.log(data.results);
        
      }}>get Photos</button>

      <button className='ml-30' onClick={async ()=>{
        const data=await fetchVideos('nature')
        console.log(data.videos);
        
      }}>get Videos</button>

    </div>
  )
}

export default App