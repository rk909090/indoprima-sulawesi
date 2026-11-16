type Gtag = (...args: unknown[]) => void;

/**
 * Kirim event GA4 lewat gtag (Google tag di container GTM-TZ4338WJ).
 * Kalau gtag belum didefinisikan (skrip GTM belum jalan), antrekan ke dataLayer
 * dengan bentuk yang sama seperti gtag(): objek `arguments`.
 */
export function track(name: string, params: Record<string, string | number | undefined> = {}) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: Gtag };
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== 'function') {
    w.gtag = function gtag() {
      w.dataLayer!.push(arguments);
    };
  }
  const clean: Record<string, string | number> = {};
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') clean[k] = v;
  w.gtag('event', name, clean);
}
