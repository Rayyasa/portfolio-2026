// Lapisan tekstur ambient: grain film, scanline CRT, dan vignette.
// Murni dekoratif — pointer-events dimatikan agar tidak mengganggu interaksi.
export default function Ambient() {
  return (
    <>
      <div className="noise-layer" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
    </>
  )
}
