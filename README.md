# ON AIR — Portofolio Retro Broadcast

Portofolio satu halaman dengan konsep **"Analog Broadcast"**: monokrom hitam-putih,
terinspirasi layar CRT, film 35mm, dan siaran televisi analog era 70–80an.
Dibangun dengan **React + Vite + Framer Motion**, tanpa framework CSS eksternal
supaya semua tekstur (grain, scanline, halftone, filmstrip) bisa dikontrol penuh.

## Menjalankan di komputer kamu

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Untuk build versi produksi:

```bash
npm run build
npm run preview   # opsional, untuk cek hasil build
```

Hasil build ada di folder `dist/` — folder ini yang di-upload saat deploy
(Vercel, Netlify, GitHub Pages, dsb).

## Yang perlu kamu ganti

Semua isi konten (nama, bio, proyek, skill, kontak) ada di satu file:

```
src/data/content.js
```

Edit teksnya sesuai data kamu. Tidak perlu menyentuh file komponen lain.

## Struktur proyek

```
src/
  App.jsx             → merangkai semua section + logic scroll-spy & transisi
  index.css           → semua design token & style (cari komentar SECTION)
  data/content.js      → SEMUA teks & data — edit di sini
  components/
    Loader.jsx        → animasi hitung mundur film di awal buka situs
    Ambient.jsx        → lapisan grain, scanline, vignette
    Cursor.jsx         → kursor kustom "REC"
    Nav.jsx            → bar navigasi gaya channel siaran TV
    Hero.jsx           → judul besar + status "on air"
    Marquee.jsx        → teks berjalan
    About.jsx          → profil dengan frame filmstrip
    Work.jsx           → daftar proyek gaya kaset tape
    Skills.jsx         → VU meter keahlian
    Contact.jsx        → panel "sign off"
    Footer.jsx
```

## Konsep desain (ringkas)

- **Warna** — `--ink` (#0a0a0a, latar layar mati), `--paper` (#ece7da, teks
  kertas film tua), `--static` (#6f6c62, abu redup), `--signal` (#ffffff,
  highlight). Semua ada di `:root` pada `index.css`, mudah diubah.
- **Tipografi** — `Bebas Neue` untuk judul besar bergaya poster bioskop,
  `Instrument Serif` italic untuk tagline, `Space Mono` untuk semua label/data.
- **Signature moment** — animasi hitung mundur "film leader" saat halaman
  dibuka, dan kilatan statis (channel-flip) setiap berpindah section lewat nav,
  meniru sensasi ganti channel TV analog.

## Mengganti gambar/foto asli

Saat ini foto profil & thumbnail proyek sengaja dibuat dari pola CSS (dot
halftone) supaya tetap konsisten dengan tema tanpa perlu aset gambar. Kalau
kamu ingin memakai foto asli:

1. Taruh file gambar di folder `src/assets/`.
2. Di `About.jsx`, ganti `<div className="filmstrip-inner" />` dengan
   `<img src={fotoKamu} alt="Foto profil" />` lalu tambahkan
   `filter: grayscale(1) contrast(1.1);` pada style-nya supaya tetap hitam-putih.
3. Lakukan hal serupa pada `.tape-thumb` di `Work.jsx` untuk thumbnail proyek.

## Aksesibilitas

- Kontras teks sudah diuji untuk latar gelap.
- Fokus keyboard terlihat jelas (outline putih saat tab).
- Animasi otomatis dikurangi jika pengguna mengaktifkan
  "Reduce Motion" di sistem operasinya.
