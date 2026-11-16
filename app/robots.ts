import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Semua crawler (mesin pencari & mesin jawaban AI) diizinkan merayapi seluruh situs.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
