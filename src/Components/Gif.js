import React from 'react'
import './Gif.css'
import { Link } from 'wouter'

export const Gif = ({ id, title, url }) => {
  return (
    <div className='Gif'>
      <Link className='Gif-link' to={`/gif/${id}`} key={id}>
        <h3>{title}</h3>
        <img src={url} alt={title} />
      </Link>
    </div>
  )
}
