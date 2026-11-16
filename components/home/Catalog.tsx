'use client';

import Link from 'next/link';
import { catalog, navCats } from '@/lib/home-data';
import { waHarga, waText } from '@/lib/wa';
import { track } from '@/lib/track';
import { useCatalog } from './CatalogContext';

const LIMIT = 8;
const pill = { font: 'inherit', fontWeight: '700', fontSize: '15px', padding: '10px 16px', minHeight: '44px', borderRadius: '999px', cursor: 'pointer', whiteSpace: 'nowrap', flex: '0 0 auto' } as const;
const pillOn = { background: '#13294B', color: '#FFFFFF', border: '2px solid #13294B' } as const;
const pillOff = { background: '#FFFFFF', color: '#13294B', border: '2px solid #B9C4D3' } as const;
const outlineBtn = { font: 'inherit', fontWeight: '700', fontSize: '15px', padding: '12px 20px', minHeight: '44px', borderRadius: '10px', cursor: 'pointer', background: '#FFFFFF', color: '#13294B', border: '2px solid #13294B' } as const;

export default function Catalog() {
  const { cat: rawCat, all: showAll, setCat, setAll } = useCatalog();
  const cat = catalog[rawCat] ? rawCat : 'plafon';
  const cur = catalog[cat];
  const list = showAll ? cur.items : cur.items.slice(0, LIMIT);
  const hidden = cur.items.length - LIMIT;

  return (
    <section id="katalog" style={{ maxWidth: '1240px', margin: '0 auto', padding: '48px 24px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ color: '#9A6200', fontWeight: '700', fontSize: '14px', letterSpacing: '0.06em' }}>KATALOG PRODUK</span>
        <h2 style={{ margin: '0', fontSize: 'clamp(26px, 2.6cqi, 34px)', color: '#13294B' }}>Spesialis interior &amp; atap</h2>
      </div>
      <div role="tablist" aria-label="Kategori produk" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {navCats.map(([k, l]) => (
          <button key={k} type="button" role="tab" aria-selected={k === cat} onClick={() => { setCat(k); track('select_category', { product_category: catalog[k].title, cta_location: 'tab_katalog' }); }} style={{ ...pill, ...(k === cat ? pillOn : pillOff) }}>
            {l + ' (' + catalog[k].items.length + ')'}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <p style={{ margin: '0', fontSize: '16px', color: '#4A5566' }}><b style={{ color: '#13294B' }}>{cur.title}</b> — {cur.note}</p>
        {cur.more && (
          <Link href={cur.more} style={{ fontWeight: '700', fontSize: '15px', color: '#0E7A3F' }}>Kalkulator &amp; detail plafon →</Link>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))', gap: '14px' }}>
        {list.map((p) => (
          <div key={p.name} style={{ background: '#FFFFFF', border: '1px solid #E3E8EF', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <img
              src={p.img}
              alt={p.name}
              loading="lazy"
              style={{ width: '100%', aspectRatio: '1 / 1', display: 'block', background: '#FFFFFF', ...(p.contain ? { objectFit: 'contain', padding: '12px', boxSizing: 'border-box' } : { objectFit: 'cover' }) }}
            />
            {p.badge && (
              <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#F5A623', color: '#0B1A33', fontWeight: '800', fontSize: '12px', padding: '4px 10px', borderRadius: '999px' }}>{p.badge}</span>
            )}
            <div style={{ padding: '10px 12px 12px', display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', borderTop: '1px solid #EEF2F7' }}>
              <span style={{ fontWeight: '800', fontSize: '15px', color: '#13294B', lineHeight: '1.3' }}>{p.name}</span>
              <span style={{ fontSize: '13px', color: '#4A5566', lineHeight: '1.4' }}>{p.sub}</span>
              <a href={waHarga(p.name + ' (' + cur.title + ')')} data-cta="katalog" data-product={p.name} data-category={cur.title} style={{ marginTop: '6px', fontWeight: '700', fontSize: '14px', color: '#0E7A3F' }}>Tanya harga →</a>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {!showAll && hidden > 0 && (
          <button type="button" onClick={() => setAll(true)} style={outlineBtn}>{'Tampilkan semua ' + cur.items.length + ' produk'}</button>
        )}
        {showAll && hidden > 0 && (
          <button type="button" onClick={() => setAll(false)} style={outlineBtn}>Tampilkan lebih sedikit</button>
        )}
        <a href={waText('Halo Indoprima, mohon kirim katalog lengkap ' + cur.title)} data-cta="katalog_lengkap" data-category={cur.title} style={{ background: '#0E7A3F', color: '#FFFFFF', textDecoration: 'none', fontWeight: '700', fontSize: '15px', padding: '13px 20px', borderRadius: '10px' }}>Minta katalog lengkap via WA</a>
      </div>
    </section>
  );
}
