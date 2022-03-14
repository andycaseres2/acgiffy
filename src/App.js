import React from 'react'
import './App.css'
import ListOfGifs from './Components/ListOfGifs'
import { Route, Link } from 'wouter'
import { GifDetails } from './Components/GifDetails'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Route path='/' component={Home} />
        <Route path='/gif/:keyword' component={ListOfGifs} />
        <Route path='/gif/:id' component={GifDetails} />
      </section>
    </div>
  )
}

export default App
