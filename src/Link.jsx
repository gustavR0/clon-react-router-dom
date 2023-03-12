import { EVENTS } from './consts'

export function navigate (href) {
  // Evita que al cambiar de url no se recarge la pagina por completo
  window.history.pushState({}, '', href)
  // Crear un evneto personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    // Permite que puedamos usara ctrl + click o comand + click para que se pueda abrir en una nueva pestaña, etc.
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
