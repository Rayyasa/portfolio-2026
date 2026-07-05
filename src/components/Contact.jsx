import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const Contact = forwardRef(function Contact(_, ref) {
  return (
    <section id="contact" ref={ref} className="section">
      <motion.div
        className="contact-panel"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        <span className="eyebrow">CH.04 — SIGN OFF</span>
        <h2 className="contact-title">LETS
          <br />
          BROADCASTING
          <br />
          TOGETHER.
        </h2>

        <a href={`mailto:${profile.email}`} className="contact-email" data-cursor="KIRIM">
          {profile.email}
        </a>

        <div className="contact-socials">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-cursor="BUKA">
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

export default Contact
