import './App.css'
import { Router } from './Router'
import Page404 from './pages/404'
import Search from './pages/Search'
import { Route } from './Route'
import { lazy, Suspense } from 'react'

// Evita que se cargue javascript que no se usa de en este caso el componente About
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))

const routes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: Search
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
