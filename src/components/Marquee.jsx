// Teks berjalan tak berujung — gaya lampu marquee bioskop / running text siaran.
export default function Marquee({ text }) {
  const items = new Array(6).fill(text)
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
