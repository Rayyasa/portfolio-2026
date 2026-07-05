import { useEffect, useState } from 'react'
import { nav } from '../data/content'

// Bar navigasi meniru info-bar siaran TV: nomor channel + jam "on air".
export default function Nav({ active, onNavigate }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="rec-dot" aria-hidden="true" />
        REC
      </div>

      <ul className="nav-links">
        {nav.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={active === item.id ? 'active' : ''}
              onClick={() => onNavigate(item.id)}
              data-cursor="PILIH"
            >
              <span className="ch">CH.{item.ch}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-clock">ON AIR · {time}</div>
    </nav>
  )
}
