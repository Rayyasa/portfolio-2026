import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { bio, specs, profile } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const About = forwardRef(function About(_, ref) {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="about" ref={ref} className="section">
      <motion.div
        className="section-head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        <span className="eyebrow">CH.01 — PROFIL</span>
        <span className="eyebrow">REEL NO. 004</span>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="filmstrip"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {photoOk && (
            <img
              src={profile.photo}
              alt={profile.name}
              className="filmstrip-photo"
              onError={() => setPhotoOk(false)}
            />
          )}
          <div className="filmstrip-inner" />
          <div className="filmstrip-tag">
            <span>{profile.name}</span>
            <span>35MM</span>
          </div>
        </motion.div>

        <div>
          <motion.p
            className="bio-text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            {bio}
          </motion.p>

          <motion.dl
            className="specs-list"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            {specs.map((s) => (
              <div key={s.key}>
                <dt>{s.key}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
})

export default About