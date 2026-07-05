import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span>© {year} {profile.name} — ALL RIGHTS RESERVED</span>
      <span>RECORDING ENDED — THANK YOU FOR WATCHING</span>
    </footer>
  )
}
