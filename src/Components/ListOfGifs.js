import React, { useState, useEffect } from 'react'
import { Gif } from './Gif.js'
import getGifs from '../services/getGifs'
import './ListOfGifs.css'

const ListOfGifs = ({ params }) => {
  const [giff, setGiff] = useState([])
  const { keyword } = params
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => setGiff(gifs))
    setLoading(false)
  }, [keyword])

  if (loading) return <i>Cargando</i>
  return (
    <div className='ListOfGifs'>
      {giff.map(({ id, title, url }) => (
        <Gif key={id} url={url} title={title} id={id} />
      ))}
    </div>
  )
}
export default ListOfGifs
