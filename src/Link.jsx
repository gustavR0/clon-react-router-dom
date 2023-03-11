import { EVENTS } from './consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // Crear un evneto personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = () => {

  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
