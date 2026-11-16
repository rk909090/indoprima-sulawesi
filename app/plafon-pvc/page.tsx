import type { Metadata } from 'next';
import Link from 'next/link';
import Calculator from '@/components/plafon/Calculator';
import MotifCatalog from '@/components/plafon/MotifCatalog';
import { waHarga } from '@/lib/wa';

export const metadata: Metadata = {
  title: 'Plafon PVC Bulukumba — Indoprima',
};

const ornamen = [
  { type: '3025', shape: 'persegi', color: 'emas – putih', sub: 'Persegi · Emas – putih', img: '/img/b1b67b826184ac89c6e7322763520be5.png' },
  { type: '3214', shape: 'persegi', color: 'hitam – putih', sub: 'Persegi · Hitam – putih', img: '/img/5aec59e23c7124efbafe5cf79ffb3f00.png' },
  { type: '3225', shape: 'persegi', color: 'hitam', sub: 'Persegi · Hitam', img: '/img/4a1b1dbe65df77af25d86c09f58c217a.png' },
  { type: '3219', shape: 'persegi', color: 'coklat emas – putih', sub: 'Persegi · Coklat emas – putih', img: '/img/117ca08bdd178c5052be89cdc98bc444.png' },
  { type: '3223', shape: 'bintang', color: 'putih – silver', sub: 'Bintang · Putih – silver', img: '/img/0ff3613b8476ac9322da13fdf4f67b6c.png' },
  { type: '3127', shape: 'bintang', color: 'emas', sub: 'Bintang · Emas', img: '/img/681b1ad5e11392c02c4fa1eebad30576.png' },
  { type: '3131', shape: 'bintang', color: 'putih – krem', sub: 'Bintang · Putih – krem', img: '/img/29623ef2270e6be8e9845a738ff9fa96.png' },
  { type: '3125', shape: 'segi delapan', color: 'putih – emas', sub: 'Segi delapan · Putih – emas', img: '/img/5c4ed681c83a0915c3f49f07fbc552da.png' },
  { type: '3117', shape: 'segi delapan', color: 'putih – emas', sub: 'Segi delapan · Putih – emas', img: '/img/462a96224a5518060342f13d592bdd74.png' },
];

const usp = [
  { t: 'Tahan Rambat Api', d: 'Tidak mudah menyebarkan api — lebih aman untuk rumah dan ruko.', icon: 'M12 3c1 3 4 4.5 4 8.5a4 4 0 0 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 0-7.5z' },
  { t: 'Tahan Air', d: 'Tidak lapuk, mengembang atau berjamur saat terkena bocoran dan udara lembap.', icon: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z' },
  { t: 'Anti Rayap', d: 'Bahan PVC tidak dimakan rayap — beda dengan plafon kayu dan triplek.', icon: 'M9 7a3 3 0 0 1 6 0M8 9h8v6a4 4 0 0 1-8 0V9zM4 13h4M16 13h4M5 8l3 2M19 8l-3 2M5 19l3-2M19 19l-3-2M12 9v10' },
  { t: 'Awet & Kuat', d: 'Tidak mudah melengkung, retak atau pudar. Hampir tanpa perawatan dan tanpa cat ulang.', icon: 'M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3zM9 12l2 2 4-4' },
  { t: 'Dapat Didaur Ulang', d: 'Material yang bisa didaur ulang — pilihan lebih ramah lingkungan.', icon: 'M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3M5 4v4h4M19 20v-4h-4' },
  { t: 'Motif Pilihan', d: 'Motif kayu, polos dan marmer yang dipilih untuk tampilan interior modern.', icon: 'M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z' },
];

const faq = [
  { q: 'Berapa harga plafon PVC per meter di Bulukumba?', a: '[Jawaban: kisaran harga per batang / per m² dan faktor yang mempengaruhi — motif, ketebalan, merek.]' },
  { q: 'Plafon PVC vs gypsum, mana lebih awet?', a: '[Jawaban perbandingan: ketahanan air, rayap, perawatan, biaya pasang.]' },
  { q: 'Apakah Indoprima bisa antar ke lokasi?', a: 'Bisa. Kami mengirim ke Bulukumba, Bantaeng, Sinjai, Jeneponto, Bone, Makassar hingga Luwu Timur. Ongkos kirim dan jadwal pengiriman silakan dikonsultasikan dengan admin kami lewat WhatsApp.' },
  { q: 'Apakah tersedia tukang pasang?', a: '[Jawaban: rekomendasi aplikator mitra, jika ada.]' },
];

export default function PlafonPage() {
  return (
<div style={{ containerType: "inline-size", fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif", color: "#1B2430", background: "#FFFFFF", minHeight: "100%" }}>

{/* Nav */}
<header style={{ background: "#FFFFFF", borderBottom: "1px solid #E3E8EF" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
<Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
<div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#13294B", color: "#F5A623", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px" }}>IP</div>
<div style={{ display: "flex", flexDirection: "column" }}>
<span style={{ fontWeight: "800", fontSize: "18px", color: "#13294B" }}>INDOPRIMA</span>
<span style={{ fontSize: "13px", color: "#4A5566" }}>Aluminium &amp; Bahan Bangunan</span>
</div>
</Link>
<a href="https://wa.me/6282226897783?text=Halo%20Indoprima%2C%20saya%20mau%20tanya%20plafon%20PVC" style={{ background: "#0E7A3F", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "15px", padding: "12px 20px", borderRadius: "10px" }}>Chat Admin</a>
</div>
</header>

{/* Header kategori */}
<section style={{ position: "relative", background: "#0B1A33", color: "#FFFFFF", overflow: "hidden" }}>
<img src="/img/391002d6419bcc89477c3b6126382aa9.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
<div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, rgba(11,26,51,0.94) 0%, rgba(11,26,51,0.85) 45%, rgba(11,26,51,0.4) 100%)" }}></div>
<div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 72px", display: "flex", flexDirection: "column", gap: "14px" }}>
<nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#DCE4EF" }}><Link href="/" style={{ color: "#DCE4EF" }}>Beranda</Link> / Produk / Plafon PVC</nav>
<h1 style={{ margin: "0", fontSize: "clamp(32px, 3.8cqi, 48px)", lineHeight: "1.15", fontWeight: "800" }}>Plafon PVC di Bulukumba</h1>
<p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#DCE4EF", maxWidth: "720px" }}>Anti rayap, tahan air, tanpa dicat. Pilih motif, hitung kebutuhan batang &amp; lis, lalu kirim ke admin untuk harga terbaru.</p>
</div>
</section>

{/* USP Plafon PVC */}
<section aria-labelledby="usp-plafon" style={{ background: "#13294B", color: "#FFFFFF" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px", display: "flex", flexDirection: "column", gap: "24px" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
<span style={{ color: "#F5A623", fontWeight: "700", fontSize: "14px", letterSpacing: "0.08em" }}>KEUNGGULAN PLAFON PVC</span>
<h2 id="usp-plafon" style={{ margin: "0", fontSize: "clamp(26px, 2.8cqi, 36px)", lineHeight: "1.2" }}>Satu kali pasang, aman &amp; awet bertahun-tahun</h2>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
{usp.map((u) => (
<div key={u.t} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "22px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
<div style={{ width: "56px", height: "56px", flex: "0 0 56px", borderRadius: "999px", background: "#13294B", color: "#F5A623", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={u.icon} /></svg></div>
<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}><span style={{ fontWeight: "800", fontSize: "18px", color: "#13294B" }}>{u.t}</span><span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4A5566" }}>{u.d}</span></div>
</div>
))}
</div>
</div>
</section>

{/* Kalkulator */}
<section style={{ background: "#F4F7FB" }}>
<Calculator />
</section>

{/* Katalog Mozart */}
<section style={{ background: "#FFFFFF" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px", display: "flex", flexDirection: "column", gap: "24px" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", background: "#F4F7FB", borderRadius: "18px", padding: "20px" }}>
<img src="/img/e35e543042f2cc1dd35648481a635f58.jpg" alt="Sampul e-brosur Plafon PVC Mozart" style={{ width: "120px", height: "170px", objectFit: "cover", borderRadius: "10px", flex: "0 0 120px", boxShadow: "0 6px 18px rgba(11,26,51,0.18)" }} />
<div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "8px" }}>
<span style={{ color: "#9A6200", fontWeight: "700", fontSize: "14px", letterSpacing: "0.06em" }}>MEREK YANG KAMI JUAL</span>
<h2 style={{ margin: "0", fontSize: "clamp(26px, 2.8cqi, 34px)", color: "#13294B" }}>Plafon PVC Mozart — tebal 8 mm, 100+ motif</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#4A5566" }}>Pilihan motif kayu, polos, marmer hingga 3D. Di bawah ini motif populer — minta e-katalog lengkap lewat WhatsApp.</p>
<a href="https://wa.me/6282226897783?text=Halo%20Indoprima%2C%20mohon%20kirim%20e-katalog%20Plafon%20PVC%20Mozart" style={{ alignSelf: "flex-start", background: "#0E7A3F", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "16px", padding: "12px 20px", borderRadius: "10px" }}>Minta E-Katalog Lengkap</a>
</div>
</div>
<MotifCatalog />
</div>
</section>

{/* Ornamen Lampu */}
<section id="ornamen" style={{ background: "#FFFFFF" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "8px 24px 56px", display: "flex", flexDirection: "column", gap: "20px" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
<span style={{ color: "#9A6200", fontWeight: "700", fontSize: "14px", letterSpacing: "0.06em" }}>ORNAMEN FITTING LAMPU · DIAMETER 30 CM</span>
<h2 style={{ margin: "0", fontSize: "clamp(26px, 2.6cqi, 34px)", color: "#13294B" }}>Sentuhan mewah di tengah plafon Anda</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#4A5566" }}>Ornamen dudukan lampu gantung dengan pilihan bentuk persegi, bintang dan segi delapan — serasi dengan plafon PVC putih maupun motif kayu.</p>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "14px" }}>
{ornamen.map((o) => (
<div key={o.type} style={{ background: "#FFFFFF", border: "1px solid #E3E8EF", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
<div style={{ aspectRatio: "1 / 1", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", padding: "14px", boxSizing: "border-box" }}><img src={o.img} alt={`Ornamen fitting lampu plafon type ${o.type}, bentuk ${o.shape}, warna ${o.color}`} loading="lazy" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} /></div>
<div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "2px", borderTop: "1px solid #EEF2F7" }}><span style={{ fontWeight: "800", fontSize: "16px", color: "#13294B" }}>Type {o.type}</span><span style={{ fontSize: "14px", color: "#4A5566" }}>{o.sub}</span></div>
<a href={waHarga('ornamen fitting lampu type ' + o.type)} style={{ margin: "0 14px 14px", textAlign: "center", border: "2px solid #0E7A3F", color: "#0E7A3F", textDecoration: "none", fontWeight: "700", fontSize: "14px", padding: "9px", borderRadius: "10px" }}>Tanya Harga</a>
</div>
))}
</div>
</div>
</section>

{/* FAQ (SEO) */}
<section style={{ background: "#F4F7FB" }}>
<div style={{ maxWidth: "900px", margin: "0 auto", padding: "56px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
<h2 style={{ margin: "0 0 8px", fontSize: "clamp(26px, 2.8cqi, 36px)", color: "#13294B" }}>Pertanyaan seputar plafon PVC</h2>
{faq.map((f) => (
<details key={f.q} style={{ background: "#FFFFFF", borderRadius: "12px", padding: "18px 20px" }}><summary style={{ fontWeight: "700", fontSize: "17px", color: "#13294B", cursor: "pointer" }}>{f.q}</summary><p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.6", color: "#4A5566" }}>{f.a}</p></details>
))}
</div>
</section>

<footer style={{ background: "#0B1A33", color: "#DCE4EF" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", fontSize: "15px" }}>
<span style={{ fontWeight: "700", color: "#FFFFFF" }}>PT Indoprima Aluminium · Bulukumba</span>
<Link href="/" style={{ color: "#DCE4EF" }}>← Kembali ke Beranda</Link>
</div>
</footer>
</div>
  );
}
