import React from 'react'
import { Link } from 'wouter'
import './home.css'
import { useState } from 'react'
import { useLocation } from 'wouter'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation(`/gif/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <div className='home'>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={keyword} />
        <button>Buscar</button>
      </form>
      <h2>Giff Populares</h2>
      <Link to='/gif/morty'>Gif de morty</Link>
      <Link to='/gif/rocky'>Gif de rocky</Link>
      <Link to='/gif/matrix'>Gif de matrix</Link>
    </div>
  )
}

export default Home
