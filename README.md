# Indoprima Bulukumba — Website

Website **Indoprima (PT Indoprima Aluminium) Bulukumba**, spesialis interior & atap.
Dibangun dengan **Next.js 16 (App Router) + React 19 + TypeScript**, dikonversi dari mockup desain
"Mockup Website Indoprima Bulukumba".

## Halaman

| Rute          | Isi                                                                                     |
| ------------- | --------------------------------------------------------------------------------------- |
| `/`           | Beranda: slider promo, katalog bertab (Plafon PVC, Wall Panel, HPL, Vinyl, Ornamen, Hardware, Atap), inspirasi, lokasi toko |
| `/plafon-pvc` | Plafon PVC: keunggulan, kalkulator kebutuhan batang & lis, katalog motif Mozart, ornamen lampu, FAQ |

Tampilan HP memakai halaman yang sama (layout responsif).

## Menjalankan

```bash
npm install
npm run dev      # mode pengembangan → http://localhost:3000
npm run build    # build produksi
npm start        # jalankan hasil build
```

Butuh Node.js ≥ 20.9.

## Struktur

```
app/                  halaman (layout, beranda, plafon-pvc)
components/home/      slider, menu & katalog bertab, form cari
components/plafon/    kalkulator plafon, katalog motif
lib/                  data produk & helper link WhatsApp
public/img/           foto produk & toko
```

## Analytics & SEO

- **Google Tag Manager** `GTM-TZ4338WJ` (berisi GA4 `G-ZV9JXV9NSM`) dimuat di [app/layout.tsx](app/layout.tsx).
- **Event GA4** dikirim lewat [lib/track.ts](lib/track.ts) dan [components/ClickTracker.tsx](components/ClickTracker.tsx):

  | Event | Kapan | Parameter |
  | --- | --- | --- |
  | `whatsapp_click` | klik link wa.me mana pun (key event) | `cta_location`, `product_name`, `product_category` |
  | `get_directions` | klik "Petunjuk Arah" Google Maps (key event) | `cta_location` |
  | `select_category` | pilih tab katalog, menu kategori header, atau filter motif | `product_category`, `cta_location` |
  | `use_calculator` | pertama kali mengubah input kalkulator plafon | `cta_location`, `product_category` |

  Nilai `cta_location`/`product_*` diambil dari atribut `data-cta`, `data-product`, `data-category` pada link.
- **SEO**: metadata, canonical, Open Graph/Twitter per halaman; `robots.txt`, `sitemap.xml` ([app/robots.ts](app/robots.ts), [app/sitemap.ts](app/sitemap.ts)); favicon [app/icon.svg](app/icon.svg).
- **Structured data** (schema.org JSON-LD, [lib/schema.ts](lib/schema.ts)): `HardwareStore`/LocalBusiness (alamat, koordinat, jam buka, telepon, area layanan) + `WebSite` di semua halaman; `WebPage`, `BreadcrumbList`, `FAQPage` di `/plafon-pvc`. Data bisnis terpusat di [lib/site.ts](lib/site.ts).
- **llms.txt** ([public/llms.txt](public/llms.txt)): ringkasan bisnis untuk mesin jawaban AI.

## Catatan konten

Beberapa teks di mockup masih placeholder dan perlu diisi:
- FAQ halaman Plafon PVC sudah berisi jawaban dasar (versi awal, akan disempurnakan). Jawaban yang diawali `[`
  dianggap placeholder dan otomatis tidak dimasukkan ke schema `FAQPage`.
- Spesifikasi produk atap: `[tebal]`, `[warna]`, `[ukuran]`.
- Tombol **Cari** di header belum punya fungsi (sama seperti di mockup).
