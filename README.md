# Clon React Router Dom

This library is not production project, just trying to understand the basic functionality of [react router dom](https://reactrouter.com/en/main), based on content creator midudev via [twitch](https://www.twitch.tv/midudev) 

## Description

This library only contains the basic use of react router dom such as Router, Route and Link, the objective is to understand how this library works in a simple way, it is not recommended to use it in production projects

## Installation

Installation uses the [npm](http://npmjs.org/) package manager. Just type the following command after installing npm.

    npm install clon-router-dom

    yarn add clon-router-dom

## Usage
Basic example with object array whitout Route

```javascript
import { Router } from 'clon-router-dom'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

function App () {
  return (
    <main>
      // defaultComponent contain page when url not match
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}

export default App
```

Route

```javascript
import { Router, Route } from 'clon-router-dom'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404'

function App () {
  return (
    <main>
      <Router defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
```

Link

```javascript
import { Link } from 'clon-router-dom'

export default function HomePage () {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/about'>Go To About</Link>
    </div>
  )
}
```

Query params 

```javascript
import { Router, Route } from 'clon-router-dom'
import HomePage from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404'
// Optional
const routes = [
  {
    path: '/search/:query',
    Component: Search
  }
]

function App () {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/:lang/about' Component={AboutPage} />
      </Router>
    </main>
  )
}
```

Search component 

```javascript
import { useEffect } from 'react'

export default function Search ({ routeParams }) {
  useEffect(() => {
    // any petition fetch
    document.title = `${routeParams.query}`
  }, [])

  return (
    <h1> Has Buscado {routeParams.query} </h1>
  )
}
```

About component

```javascript
import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Texto en español :D',
    button: 'Ir al Inicio'
  },
  en: {
    title: 'About us',
    description: 'Text in English :D',
    button: 'Go To Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.es
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <div>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </div>
  )
}
```