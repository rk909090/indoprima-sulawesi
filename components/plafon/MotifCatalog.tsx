'use client';

import { useState } from 'react';
import { motifs, motifTabs } from '@/lib/plafon-data';
import { waHarga } from '@/lib/wa';
import { track } from '@/lib/track';

const tabBase = { font: 'inherit', fontWeight: '700', fontSize: '15px', padding: '10px 16px', minHeight: '44px', borderRadius: '999px', cursor: 'pointer' } as const;
const tabOn = { background: '#13294B', color: '#FFFFFF', border: '2px solid #13294B' } as const;
const tabOff = { background: '#FFFFFF', color: '#13294B', border: '2px solid #B9C4D3' } as const;

export default function MotifCatalog() {
  const [mtab, setMtab] = useState<(typeof motifTabs)[number]>('Semua');
  const products = motifs.filter((x) => mtab === 'Semua' || x.cat === mtab);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {motifTabs.map((t) => (
          <button key={t} type="button" onClick={() => { setMtab(t); track('select_category', { product_category: 'Plafon PVC Mozart - ' + (t === 'Semua' ? 'Semua motif' : t), cta_location: 'filter_motif' }); }} style={{ ...tabBase, ...(t === mtab ? tabOn : tabOff) }}>
            {t === 'Semua' ? 'Semua motif' : t}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {products.map((x) => {
          const name = 'MOZ ' + x.code;
          return (
            <div key={x.code} style={{ border: '1px solid #E3E8EF', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
              <img src={x.img} alt={'Plafon PVC Mozart motif ' + name} loading="lazy" style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block', background: '#E8EEF5' }} />
              <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: '1' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#9A6200' }}>{x.tag}</span>
                <span style={{ fontWeight: '800', fontSize: '18px', color: '#13294B' }}>{name}</span>
                <span style={{ fontSize: '14px', color: '#4A5566' }}>{'Mozart · tebal 8 mm · ' + x.cat}</span>
              </div>
              <a href={waHarga('Plafon PVC Mozart ' + name)} data-cta="katalog_motif" data-product={name} data-category="Plafon PVC Mozart" style={{ margin: '0 16px 16px', textAlign: 'center', border: '2px solid #0E7A3F', color: '#0E7A3F', textDecoration: 'none', fontWeight: '700', fontSize: '15px', padding: '10px', borderRadius: '10px' }}>Tanya Harga</a>
            </div>
          );
        })}
      </div>
    </>
  );
}
