import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'
import Marquee from './Marquee'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i },
  }),
}

const Hero = forwardRef(function Hero(_, ref) {
  return (
    <>
      <section id="hero" ref={ref} className="hero">
        <motion.div className="hero-slate" variants={reveal} custom={0} initial="hidden" animate="show">
          <span>REC ●</span>
          <span className="divider">/</span>
          <span>{profile.location}</span>
          <span className="divider">/</span>
          <span>{profile.status}</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={reveal} custom={1} initial="hidden" animate="show">
          {profile.name.split(' ')[0]}
          <br />
          <span className="outline">{profile.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.p className="hero-role" variants={reveal} custom={2} initial="hidden" animate="show">
          {profile.tagline}
        </motion.p>

        <motion.div className="hero-foot" variants={reveal} custom={3} initial="hidden" animate="show">
          <p className="hero-desc">
            {profile.role} based in {profile.location.split(',')[0]} — building interfaces
and the systems that work silently behind them.
          </p>
          <div className="scroll-cue">
            <span className="bar" />
            SCROLL
          </div>
        </motion.div>
      </section>

      <Marquee text={`${profile.status} — ${profile.role.toUpperCase()} — ${profile.location} —`} />
    </>
  )
})

export default Hero
