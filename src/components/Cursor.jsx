import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Kursor kustom bergaya indikator "REC" pada kamera lawas.
// Otomatis nonaktif di perangkat sentuh (lihat App.jsx: isTouch).
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 })
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 })
  const [label, setLabel] = useState('')

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target.closest('[data-cursor]')
      setLabel(target ? target.getAttribute('data-cursor') : '')
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: springX, y: springY }} />
      <motion.div className="cursor-label" style={{ x: springX, y: springY }}>
        {label || 'REC'}
      </motion.div>
    </>
  )
}
