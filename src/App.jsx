import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Ambient from './components/Ambient'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { nav } from './data/content'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState('hero')
  const [flash, setFlash] = useState(false)
  const [isTouch] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: none), (pointer: coarse)').matches
  )

  const sectionRefs = useRef({})
  nav.forEach((item) => {
    if (!sectionRefs.current[item.id]) sectionRefs.current[item.id] = { current: null }
  })

  // Scroll-spy sederhana: menandai channel aktif berdasarkan section yang terlihat
  useEffect(() => {
    if (loading) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })
    return () => observer.disconnect()
  }, [loading])

  // "Channel flip" — kilatan statis singkat sebelum berpindah section,
  // meniru transisi ganti channel TV analog.
  const handleNavigate = useCallback((id) => {
    setFlash(true)
    setTimeout(() => {
      sectionRefs.current[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
    setTimeout(() => setFlash(false), 320)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <motion.div
          className="site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Ambient />
          {!isTouch && <Cursor />}

          <AnimatePresence>
            {flash && (
              <motion.div
                className="flip-flash"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}
          </AnimatePresence>

          <Nav active={active} onNavigate={handleNavigate} />

          <main>
            <Hero ref={sectionRefs.current.hero} />
            <About ref={sectionRefs.current.about} />
            <Work ref={sectionRefs.current.work} />
            <Skills ref={sectionRefs.current.skills} />
            <Contact ref={sectionRefs.current.contact} />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  )
}
