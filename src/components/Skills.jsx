import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { skillGroups, tools } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const SEGMENTS = 10

function VuRow({ label, level, index }) {
  const [filled, setFilled] = useState(0)
  const target = Math.round((level / 100) * SEGMENTS)

  return (
    <motion.div
      className="vu-row"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      transition={{ delay: index * 0.08 }}
      onViewportEnter={() => setFilled(target)}
    >
      <div className="vu-label">
        <span>{label}</span>
        <span>{level}%</span>
      </div>
      <div className="vu-track">
        {Array.from({ length: SEGMENTS }).map((_, i) => (
          <span
            key={i}
            className={`vu-seg ${i < filled ? 'on' : ''}`}
            style={{ transition: `background 0.3s ease ${i * 0.03}s` }}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = forwardRef(function Skills(_, ref) {
  return (
    <section id="skills" ref={ref} className="section">
      <motion.div
        className="section-head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        <span className="eyebrow">CH.03 — SKILLS</span>
        <span className="eyebrow">LEVEL SIGNAL</span>
      </motion.div>

      <div className="skills-grid">
        <div>
          {skillGroups.map((s, i) => (
            <VuRow key={s.label} label={s.label} level={s.level} index={i} />
          ))}
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
          <p className="tools-title">STUDIO TOOLS</p>
          <div className="tools-grid">
            {tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Skills
