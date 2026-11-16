'use client';

import { useRef, useState } from 'react';
import { waText } from '@/lib/wa';
import { track } from '@/lib/track';

const inputStyle = { font: 'inherit', fontWeight: '500', fontSize: '18px', padding: '12px 14px', border: '1.5px solid #B9C4D3', borderRadius: '10px', color: '#1B2430' } as const;
const labelStyle = { display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: '600', fontSize: '15px', color: '#13294B' } as const;
const lenBase = { padding: '10px 18px', borderRadius: '999px', font: 'inherit', fontWeight: '700', fontSize: '15px', cursor: 'pointer', minHeight: '44px' } as const;
const lenOn = { background: '#13294B', color: '#FFFFFF', border: '2px solid #13294B' } as const;
const lenOff = { background: '#FFFFFF', color: '#13294B', border: '2px solid #B9C4D3' } as const;

export default function Calculator() {
  const [pRaw, setP] = useState<string>('4');
  const [lRaw, setL] = useState<string>('3');
  const [len, setLen] = useState(4);
  // Event `use_calculator` dikirim sekali per kunjungan halaman, saat pengguna pertama kali mengubah input.
  const used = useRef(false);
  const markUsed = () => {
    if (used.current) return;
    used.current = true;
    track('use_calculator', { cta_location: 'kalkulator', product_category: 'Plafon PVC Mozart' });
  };

  const p = Math.max(0, parseFloat(pRaw) || 0);
  const l = Math.max(0, parseFloat(lRaw) || 0);
  const luas = Math.round(p * l * 10) / 10;
  const batang = luas > 0 ? Math.ceil((p * l) / (0.2 * len) * 1.1) : 0;
  const lis = (p + l) > 0 ? Math.ceil((2 * (p + l)) / 4 * 1.05) : 0;
  const msg = 'Halo Indoprima, saya mau pesan plafon PVC. Ruangan ' + p + ' x ' + l + ' m (' + luas + ' m2). Estimasi ' + batang + ' batang papan ' + len + ' m dan ' + lis + ' batang lis. Mohon info motif & harga.';

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px', display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      <div style={{ flex: '1 1 420px', background: '#FFFFFF', borderRadius: '18px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ color: '#9A6200', fontWeight: '700', fontSize: '14px', letterSpacing: '0.06em' }}>KALKULATOR PLAFON</span>
          <h2 style={{ margin: '0', fontSize: '26px', color: '#13294B' }}>Berapa batang yang Anda butuhkan?</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px' }}>
          <label style={labelStyle}>Panjang ruangan (m)
            <input type="number" min="0" step="0.1" value={pRaw} onChange={(e) => { setP(e.target.value); markUsed(); }} style={inputStyle} /></label>
          <label style={labelStyle}>Lebar ruangan (m)
            <input type="number" min="0" step="0.1" value={lRaw} onChange={(e) => { setL(e.target.value); markUsed(); }} style={inputStyle} /></label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontWeight: '600', fontSize: '15px', color: '#13294B' }}>Panjang papan PVC (lebar 20 cm)</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[3, 4, 6].map((v) => (
              <button key={v} type="button" onClick={() => { setLen(v); markUsed(); }} style={{ ...lenBase, ...(v === len ? lenOn : lenOff) }}>{v + ' m'}</button>
            ))}
          </div>
        </div>
        <p style={{ margin: '0', fontSize: '14px', color: '#4A5566' }}>Estimasi sudah termasuk cadangan potong 10%. Ukuran papan &amp; lis sesuaikan dengan produk IPB.</p>
      </div>

      <div style={{ flex: '1 1 340px', background: '#13294B', color: '#FFFFFF', borderRadius: '18px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px', boxSizing: 'border-box' }}>
        <span style={{ fontSize: '15px', color: '#DCE4EF' }}>Hasil estimasi untuk ruangan {luas} m²</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px' }}>
          <div style={{ background: '#1E3A64', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}><span style={{ fontSize: '40px', fontWeight: '800', color: '#F5A623' }}>{batang}</span><span style={{ fontSize: '15px', color: '#DCE4EF' }}>batang plafon</span></div>
          <div style={{ background: '#1E3A64', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}><span style={{ fontSize: '40px', fontWeight: '800', color: '#F5A623' }}>{lis}</span><span style={{ fontSize: '15px', color: '#DCE4EF' }}>batang lis (4 m)</span></div>
        </div>
        <a href={waText(msg)} data-cta="kalkulator" data-category="Plafon PVC Mozart" style={{ background: '#0E7A3F', color: '#FFFFFF', textDecoration: 'none', fontWeight: '700', fontSize: '17px', padding: '16px 20px', borderRadius: '12px', textAlign: 'center' }}>Kirim Hitungan ke Admin &amp; Minta Harga</a>
        <span style={{ fontSize: '14px', color: '#DCE4EF' }}>Admin akan konfirmasi motif, stok dan ongkos kirim.</span>
      </div>
    </div>
  );
}
