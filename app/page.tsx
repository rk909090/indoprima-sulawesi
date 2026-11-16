import Link from 'next/link';
import { CatalogProvider } from '@/components/home/CatalogContext';
import NavLinks from '@/components/home/NavLinks';
import HeroSlider from '@/components/home/HeroSlider';
import Catalog from '@/components/home/Catalog';
import SearchForm from '@/components/home/SearchForm';

export default function Home() {
  return (
    <CatalogProvider>
<div style={{ containerType: "inline-size", fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif", color: "#1B2430", background: "#F4F7FB", minHeight: "100%", position: "relative" }}>

{/* Top bar */}
<div style={{ background: "#0B1A33", color: "#DCE4EF", fontSize: "14px" }}>
<div style={{ maxWidth: "1240px", margin: "0 auto", padding: "9px 24px", display: "flex", flexWrap: "wrap", gap: "6px 24px", justifyContent: "space-between" }}>
<span>Gratis konsultasi &amp; hitung kebutuhan bahan via WhatsApp</span>
<span>Jl. Mairo Ela-Ela, Ujung Bulu, Bulukumba · Senin–Sabtu 08.00–17.00 WITA</span>
</div>
</div>

{/* Header: logo, search, WA */}
<header style={{ background: "#FFFFFF" }}>
<div style={{ maxWidth: "1240px", margin: "0 auto", padding: "16px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 28px" }}>
<Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
<div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#13294B", color: "#F5A623", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "19px" }}>IP</div>
<div style={{ display: "flex", flexDirection: "column" }}>
<span style={{ fontWeight: "800", fontSize: "20px", color: "#13294B", letterSpacing: "0.02em" }}>INDOPRIMA</span>
<span style={{ fontSize: "13px", color: "#4A5566" }}>Spesialis Interior &amp; Atap</span>
</div>
</Link>
<SearchForm />
<a href="https://wa.me/6282226897783?text=Halo%20Indoprima%2C%20saya%20mau%20konsultasi" data-cta="header" style={{ background: "#0E7A3F", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "15px", padding: "13px 20px", borderRadius: "10px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.4A8.4 8.4 0 1 1 21 11.5z" /></svg>
Konsultasi Admin</a>
</div>
{/* Category nav */}
<nav aria-label="Kategori" style={{ background: "#13294B" }}>
<NavLinks />
</nav>
</header>

{/* Hero slider */}
<section aria-label="Promo utama" style={{ maxWidth: "1240px", margin: "0 auto", padding: "24px 24px 0" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
<HeroSlider />
{/* side banners */}
<div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "20px" }}>
<Link href="/plafon-pvc" style={{ flex: "1 1 200px", borderRadius: "20px", background: "#F5A623", color: "#0B1A33", textDecoration: "none", padding: "26px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px" }}>
<span style={{ fontWeight: "700", fontSize: "14px", letterSpacing: "0.06em" }}>KALKULATOR GRATIS</span>
<span style={{ fontWeight: "800", fontSize: "24px", lineHeight: "1.2" }}>Hitung kebutuhan plafon PVC dalam 10 detik</span>
<span style={{ fontWeight: "700", fontSize: "16px" }}>Coba sekarang →</span>
</Link>
<a href="https://wa.me/6282226897783?text=Halo%20Indoprima%2C%20saya%20kontraktor%2C%20mau%20tanya%20harga%20partai" data-cta="banner_kontraktor" style={{ flex: "1 1 180px", borderRadius: "20px", background: "#FFFFFF", color: "#13294B", textDecoration: "none", padding: "26px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", border: "1px solid #E3E8EF" }}>
<span style={{ fontWeight: "700", fontSize: "14px", letterSpacing: "0.06em", color: "#9A6200" }}>KONTRAKTOR &amp; APLIKATOR</span>
<span style={{ fontWeight: "800", fontSize: "22px", lineHeight: "1.25" }}>Harga partai untuk proyek plafon &amp; atap</span>
<span style={{ fontWeight: "700", fontSize: "16px", color: "#0E7A3F" }}>Minta penawaran →</span>
</a>
</div>
</div>
</section>

{/* Service strip */}
<section style={{ maxWidth: "1240px", margin: "0 auto", padding: "20px 24px 0" }}>
<div style={{ background: "#FFFFFF", borderRadius: "16px", padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
<div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
<div style={{ width: "44px", height: "44px", flex: "0 0 44px", borderRadius: "12px", background: "#E8EEF5", color: "#13294B", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px" }}>1</div>
<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontWeight: "700", fontSize: "16px", color: "#13294B" }}>Konsultasi gratis</span><span style={{ fontSize: "14px", color: "#4A5566" }}>Tanya motif &amp; ukuran via WA</span></div>
</div>
<div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
<div style={{ width: "44px", height: "44px", flex: "0 0 44px", borderRadius: "12px", background: "#E8EEF5", color: "#13294B", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px" }}>2</div>
<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontWeight: "700", fontSize: "16px", color: "#13294B" }}>Dihitungkan</span><span style={{ fontSize: "14px", color: "#4A5566" }}>Kebutuhan bahan tepat, tidak sisa</span></div>
</div>
<div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
<div style={{ width: "44px", height: "44px", flex: "0 0 44px", borderRadius: "12px", background: "#E8EEF5", color: "#13294B", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px" }}>3</div>
<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontWeight: "700", fontSize: "16px", color: "#13294B" }}>Potong ukuran</span><span style={{ fontSize: "14px", color: "#4A5566" }}>Spandek custom sesuai atap</span></div>
</div>
<div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
<div style={{ width: "44px", height: "44px", flex: "0 0 44px", borderRadius: "12px", background: "#E8EEF5", color: "#13294B", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px" }}>4</div>
<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontWeight: "700", fontSize: "16px", color: "#13294B" }}>Antar ke proyek</span><span style={{ fontSize: "14px", color: "#4A5566" }}>Bulukumba s/d Makassar &amp; Luwu Timur</span></div>
</div>
</div>
</section>

{/* Katalog Produk (satu bagian bertab) */}
<Catalog />

{/* USP ringkas */}
<section aria-label="Keunggulan plafon PVC" style={{ maxWidth: "1240px", margin: "0 auto", padding: "40px 24px 0" }}>
<div style={{ background: "#13294B", color: "#FFFFFF", borderRadius: "18px", padding: "22px 24px", display: "flex", flexWrap: "wrap", gap: "14px 28px", alignItems: "center" }}>
<span style={{ fontWeight: "800", fontSize: "17px", color: "#F5A623", flex: "0 0 auto" }}>Keunggulan plafon PVC:</span>
<span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "15px" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c1 3 4 4.5 4 8.5a4 4 0 0 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 0-7.5z" /></svg>Tahan Rambat Api</span>
<span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "15px" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></svg>Tahan Air</span>
<span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "15px" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M9 7a3 3 0 0 1 6 0M8 9h8v6a4 4 0 0 1-8 0V9zM4 13h4M16 13h4M5 8l3 2M19 8l-3 2M5 19l3-2M19 19l-3-2M12 9v10" /></svg>Anti Rayap</span>
<span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "15px" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3zM9 12l2 2 4-4" /></svg>Awet &amp; Kuat</span>
<span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "15px" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3M5 4v4h4M19 20v-4h-4" /></svg>Bisa Didaur Ulang</span>
<span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "15px" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" /></svg>Motif Pilihan</span>
</div>
</section>

{/* Inspirasi */}
<section style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 24px 0", display: "flex", flexDirection: "column", gap: "20px" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
<h2 style={{ margin: "0", fontSize: "clamp(26px, 2.6cqi, 34px)", color: "#13294B" }}>Inspirasi plafon &amp; interior</h2>
<p style={{ margin: "0", fontSize: "17px", color: "#4A5566" }}>Kirim foto ruangan Anda — admin bantu pilihkan motif yang cocok.</p>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
<img src="/img/461c0d59358617ef23d0591e2d410244.jpg" alt="Plafon PVC putih dengan drop ceiling motif kayu" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "16px", display: "block" }} />
<img src="/img/391002d6419bcc89477c3b6126382aa9.jpg" alt="Plafon PVC putih bertingkat dengan bingkai motif kayu" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "16px", display: "block" }} />
<figure style={{ margin: "0", position: "relative", height: "200px", borderRadius: "16px", overflow: "hidden" }}>
<img src="/img/cdda1c3add6558186c589bea536497ca.jpg" alt="Proyek dinding TV dengan wallpanel motif kayu, partisi kisi dan kabinet gantung" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block" }} />
</figure>
<figure style={{ margin: "0", position: "relative", height: "200px", borderRadius: "16px", overflow: "hidden" }}>
<img src="/img/503552724cd6961831a144afec7965db.jpg" alt="Proyek kanopi atap spandek oleh Indoprima di beberapa rumah" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
</figure>
</div>
</section>

{/* Store + location */}
<section id="lokasi" style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 24px 64px" }}>
<div style={{ background: "#FFFFFF", borderRadius: "20px", overflow: "hidden", display: "flex", flexWrap: "wrap" }}>
<img src="/img/a4ad09247e89b3e45af0ca709da2a732.jpg" alt="Tampak depan toko Indoprima Aluminium Bulukumba" style={{ flex: "1 1 420px", minWidth: "0", height: "340px", objectFit: "cover", display: "block" }} />
<div style={{ flex: "1 1 360px", padding: "32px", display: "flex", flexDirection: "column", gap: "14px" }}>
<h2 style={{ margin: "0", fontSize: "clamp(24px, 2.4cqi, 32px)", color: "#13294B" }}>Kunjungi toko kami</h2>
<p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#4A5566" }}>Jl. Mairo Ela-Ela, Kec. Ujung Bulu, Kabupaten Bulukumba, Sulawesi Selatan 92518</p>
<p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#4A5566" }}>Senin – Sabtu: 08.00 – 17.00 WITA · Minggu: Tutup</p>
<p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#4A5566" }}>WhatsApp: <b>0822-2689-7783</b> / <b>0851-6653-9038</b></p>
<p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#4A5566" }}>Salah satu toko bahan bangunan utama di Bulukumba — melayani rumah tangga, aplikator, kontraktor hingga toko bangunan, dengan pengiriman ke Bulukumba, Bantaeng, Sinjai, Jeneponto, Bone, Makassar hingga Luwu Timur.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
<a href="https://www.google.com/maps/place/Toko+indoprima+(TACO)/@-5.548779,120.2072062,263m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2dbbff84f67a9d03:0x6b80ca90106c0e2e!8m2!3d-5.5487803!4d120.2078513!16s%2Fg%2F11v0j873kl" data-cta="lokasi" style={{ border: "2px solid #13294B", color: "#13294B", textDecoration: "none", fontWeight: "700", fontSize: "16px", padding: "12px 18px", borderRadius: "10px" }}>Petunjuk Arah</a>
<a href="https://wa.me/6282226897783?text=Halo%20Indoprima" data-cta="lokasi" style={{ background: "#0E7A3F", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "16px", padding: "12px 18px", borderRadius: "10px" }}>Chat Admin</a>
</div>
</div>
</div>
</section>

{/* Footer */}
<footer style={{ background: "#0B1A33", color: "#DCE4EF" }}>
<div style={{ maxWidth: "1240px", margin: "0 auto", padding: "48px 24px 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px", fontSize: "15px", lineHeight: "1.7" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
<span style={{ fontWeight: "800", fontSize: "18px", color: "#FFFFFF" }}>INDOPRIMA</span>
<span>PT Indoprima Aluminium — spesialis interior &amp; atap di Bulukumba.</span>
</div>
<div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontWeight: "700", color: "#FFFFFF", marginBottom: "6px" }}>Interior</span><Link href="/plafon-pvc" style={{ color: "#DCE4EF" }}>Plafon PVC</Link><a href="#katalog" style={{ color: "#DCE4EF" }}>Wallpanel</a><a href="#katalog" style={{ color: "#DCE4EF" }}>HPL Taco</a><a href="#katalog" style={{ color: "#DCE4EF" }}>Vinyl Taco</a><a href="#katalog" style={{ color: "#DCE4EF" }}>Ornamen Lampu</a><a href="#katalog" style={{ color: "#DCE4EF" }}>Hardware TACO</a></div>
<div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontWeight: "700", color: "#FFFFFF", marginBottom: "6px" }}>Atap &amp; Lainnya</span><a href="#katalog" style={{ color: "#DCE4EF" }}>Spandek Custom</a><a href="#katalog" style={{ color: "#DCE4EF" }}>Baja Ringan</a><a href="#katalog" style={{ color: "#DCE4EF" }}>Aluminium &amp; Kaca</a><a href="#katalog" style={{ color: "#DCE4EF" }}>Bahan Bangunan</a></div>
<div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontWeight: "700", color: "#FFFFFF", marginBottom: "6px" }}>Hubungi</span><span>WhatsApp: 0822-2689-7783 / 0851-6653-9038</span><span>Jl. Mairo Ela-Ela, Kec. Ujung Bulu, Kabupaten Bulukumba, Sulawesi Selatan 92518</span><span>Senin–Sabtu 08.00–17.00 WITA</span></div>
</div>
<div style={{ maxWidth: "1240px", margin: "0 auto", padding: "16px 24px 28px", borderTop: "1px solid #23406E", fontSize: "14px" }}>© 2026 PT Indoprima Aluminium · Bulukumba</div>
</footer>

<a href="https://wa.me/6282226897783?text=Halo%20Indoprima" aria-label="Chat WhatsApp admin" data-cta="floating" style={{ position: "fixed", right: "24px", bottom: "24px", width: "60px", height: "60px", borderRadius: "999px", background: "#0E7A3F", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(11,26,51,0.3)" }}>
<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.4A8.4 8.4 0 1 1 21 11.5z" /></svg>
</a>
</div>
    </CatalogProvider>
  );
}
