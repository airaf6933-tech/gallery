import React from 'react'

const card = ({data}) => {
  return (
    <div className='main  bg-amber-900 w-60 rounded-3xl justify-center hover:scale-105 hover:shadow-xl hover:shadow-amber-950/50 text-center p-3 flex-wrap gap-4' >
        <img src={data.download_url} alt=""  className='w-60 h-70  rounded-2xl  cursor-pointer  ' />
    <h1 className='bg-amber-100 text-3xl text-amber-900 rounded-2xl m-2 '>{data.author}</h1>
    </div>
  )
}

export default card