import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Meniru "film countdown leader" — hitungan mundur di awal reel bioskop lawas.
// Berjalan sekali saat pertama kali situs dibuka.
export default function Loader({ onDone }) {
  const [count, setCount] = useState(5)

  useEffect(() => {
    if (count === 0) {
      const t = setTimeout(onDone, 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setCount((c) => c - 1), 380)
    return () => clearTimeout(t)
  }, [count, onDone])

  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="loader-ring">
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            className={count === 0 ? 'loader-number label' : 'loader-number'}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.25 }}
          >
            {count === 0 ? 'ON AIR' : count}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="loader-caption">LOADING BROADCAST — PLEASE WAIT</p>
    </motion.div>
  )
}
