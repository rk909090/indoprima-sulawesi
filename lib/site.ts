/**
 * Data bisnis (NAP) satu sumber untuk metadata, schema.org dan llms.txt.
 * Semua nilai diambil dari konten situs (mockup asli) — jangan isi dengan tebakan.
 */
export const SITE_URL = 'https://indoprimasulawesi.com';

export const BUSINESS = {
  name: 'Indoprima Bulukumba',
  legalName: 'PT Indoprima Aluminium',
  // Termasuk nama listing Google Maps/Business Profile saat ini, agar entitasnya cocok.
  alternateName: ['Indo Prima (Toko Bahan Bangunan dan Interior)', 'Indoprima', 'Toko Indoprima Aluminium Bulukumba', 'Toko Indoprima (TACO)'],
  slogan: 'Spesialis Interior & Atap',
  description:
    'Toko bahan bangunan spesialis interior & atap di Bulukumba, Sulawesi Selatan: plafon PVC Mozart, wall panel WPC, HPL & vinyl lantai TACO, ornamen fitting lampu, hardware furniture TACO, spandek custom dan baja ringan. Gratis konsultasi & hitung kebutuhan bahan via WhatsApp.',
  phones: ['+62-822-2689-7783', '+62-851-6653-9038'],
  whatsapp: 'https://wa.me/6282226897783',
  address: {
    streetAddress: 'Jl. Mairo Ela-Ela, Kec. Ujung Bulu',
    addressLocality: 'Bulukumba',
    addressRegion: 'Sulawesi Selatan',
    postalCode: '92518',
    addressCountry: 'ID',
  },
  // Koordinat dari tautan Google Maps toko di situs (!3d / !4d).
  geo: { latitude: -5.5487803, longitude: 120.2078513 },
  mapsUrl:
    'https://www.google.com/maps/place/Indo+Prima+(Toko+Bahan+Bangunan+dan+Interior)/@-5.5487803,120.2078513,561m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2dbbff84f67a9d03:0x6b80ca90106c0e2e!8m2!3d-5.5487803!4d120.2078513!16s%2Fg%2F11v0j873kl',
  // Senin–Sabtu 08.00–17.00 WITA, Minggu tutup.
  openingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  opens: '08:00',
  closes: '17:00',
  areaServed: ['Bulukumba', 'Bantaeng', 'Sinjai', 'Jeneponto', 'Bone', 'Makassar', 'Luwu Timur'],
  image: '/img/a4ad09247e89b3e45af0ca709da2a732.jpg',
  categories: [
    'Plafon PVC',
    'Wall Panel WPC',
    'HPL TACO',
    'Vinyl Lantai TACO SPC',
    'Ornamen Fitting Lampu',
    'Hardware Furniture TACO',
    'Spandek Custom',
    'Baja Ringan',
  ],
} as const;
