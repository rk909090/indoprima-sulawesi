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

## Catatan konten

Beberapa teks di mockup masih placeholder dan perlu diisi:
- FAQ halaman Plafon PVC: jawaban harga, perbandingan dengan gypsum, dan tukang pasang (`[Jawaban: …]`).
- Spesifikasi produk atap: `[tebal]`, `[warna]`, `[ukuran]`.
- Tombol **Cari** di header belum punya fungsi (sama seperti di mockup).
