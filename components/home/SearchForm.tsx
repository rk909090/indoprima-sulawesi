'use client';

/**
 * Kolom pencarian dari desain asli. Di mockup tombol "Cari" belum punya fungsi;
 * di sini hanya dicegah agar menekan Enter tidak me-reload halaman.
 */
export default function SearchForm() {
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()} style={{ flex: '1 1 360px', display: 'flex', minWidth: '0' }}>
      <label htmlFor="cari" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Cari produk</label>
      <input id="cari" type="search" placeholder="Cari plafon PVC, wallpanel, spandek, HPL…" style={{ flex: '1 1 auto', minWidth: '0', font: 'inherit', fontSize: '16px', padding: '13px 16px', border: '2px solid #13294B', borderRight: 'none', borderRadius: '10px 0 0 10px', color: '#1B2430' }} />
      <button type="button" style={{ font: 'inherit', fontWeight: '700', fontSize: '16px', padding: '0 22px', background: '#13294B', color: '#FFFFFF', border: '2px solid #13294B', borderRadius: '0 10px 10px 0', cursor: 'pointer', minHeight: '48px' }}>Cari</button>
    </form>
  );
}
