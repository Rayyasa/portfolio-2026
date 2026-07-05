import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Work = forwardRef(function Work(_, ref) {
  return (
    <section id="work" ref={ref} className="section">
      <motion.div
        className="section-head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        <span className="eyebrow">CH.02 — WORK</span>
        <span className="eyebrow">{String(projects.length).padStart(2, '0')} PROJECTS AVAILABLE</span>
      </motion.div>

      <div className="tape-list">
        {projects.map((p, i) => (
          <motion.a
            key={p.no}
            href={p.href}
            onClick={(e) => { if (p.href === '#') e.preventDefault() }}
            className="tape-card"
            data-cursor="PLAY"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={i}
            transition={{ delay: i * 0.06 }}
          >
            <span className="tape-no">{p.no}</span>
            <div className="tape-thumb" aria-hidden="true" />
            <div className="tape-body">
              <div className="tape-meta">
                <span>{p.year}</span>
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <h3>{p.title}</h3>
              <p className="tape-desc">{p.desc}</p>
            </div>
            <span className="tape-play">PLAY ▶</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
})

export default Work
