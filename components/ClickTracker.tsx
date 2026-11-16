'use client';

import { useEffect } from 'react';
import { track } from '@/lib/track';

/**
 * Satu listener klik untuk seluruh situs:
 * - link ke wa.me          → event `whatsapp_click` (lead utama)
 * - link ke Google Maps    → event `get_directions`
 * Parameter diambil dari atribut data-cta / data-product / data-category pada link.
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.href;
      const params = {
        cta_location: a.dataset.cta,
        product_name: a.dataset.product,
        product_category: a.dataset.category,
      };
      if (href.startsWith('https://wa.me/')) track('whatsapp_click', params);
      else if (href.startsWith('https://www.google.com/maps/')) track('get_directions', params);
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);
  return null;
}
