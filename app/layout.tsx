import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import ClickTracker from '@/components/ClickTracker';
import JsonLd from '@/components/JsonLd';
import { siteSchema } from '@/lib/schema';
import { BUSINESS, SITE_URL } from '@/lib/site';
import './globals.css';

const GTM_ID = 'GTM-TZ4338WJ';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

const TITLE = 'Indoprima Bulukumba — Spesialis Interior & Atap';
const DESCRIPTION =
  'Spesialis interior & atap di Bulukumba: plafon PVC, wall panel, HPL & vinyl TACO, spandek custom dan baja ringan. Konsultasi & hitung bahan gratis via WhatsApp.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: BUSINESS.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: BUSINESS.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: BUSINESS.image, alt: 'Tampak depan toko Indoprima Aluminium Bulukumba' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [BUSINESS.image],
  },
  // Verifikasi kepemilikan situs: Google Search Console & Bing Webmaster Tools.
  verification: {
    google: 'Pvz-NLe5IbNYnf0VTR0ECtKCVZGoNK69Ws64eWO0u-4',
    other: { 'msvalidate.01': '562657F865C47C6F67C9A5FFBB31D2B4' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#13294B',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <JsonLd data={siteSchema} />
        {children}
        <ClickTracker />
        {/* Google Tag Manager. Event 'gtm.js' wajib ada: tag GA4 (G-ZV9JXV9NSM) di container ini dipicu oleh event tersebut. */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`}
        </Script>
        <Script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} strategy="afterInteractive" />
      </body>
    </html>
  );
}
