
import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts'
import { navigate } from './Link'

const NAVIGATION_STATE = 'pushsatate'

function HomePages () {
  return (
    <div className='App'>
      <h1>Home</h1>
      <button onClick={() => navigate('/about')}>Go To About</button>
    </div>
  )
}

function AboutPage () {
  return (
    <div className='App'>
      <h1>About</h1>
      <button onClick={() => navigate('/')}>Go To Home</button>
    </div>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_STATE, onLocationChange)

    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_STATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main className='App'>
      {currentPath === '/' && (<HomePages />)}
      {currentPath === '/about' && (<AboutPage />)}
    </main>
  )
}

export default App
