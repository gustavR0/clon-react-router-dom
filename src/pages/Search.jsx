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
