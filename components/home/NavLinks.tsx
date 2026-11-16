'use client';

import { navCats } from '@/lib/home-data';
import { useCatalog } from './CatalogContext';

export default function NavLinks() {
  const { setCat } = useCatalog();
  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', gap: '0 4px' }}>
      {navCats.map(([k, l]) => (
        <a key={k} href="#katalog" onClick={() => setCat(k)} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '600', fontSize: '15px', padding: '14px 12px' }}>{l}</a>
      ))}
    </div>
  );
}
