import React from 'react'
import './GifDetails.css'

export const GifDetails = ({ params }) => {
  console.log(params)
  return (
    <div className='GifDetails' key={params.id}>
      <h1>{params.id}</h1>
      <h3>{params.title}</h3>
      <img src={params.url} alt={params.title} />
    </div>
  )
}
