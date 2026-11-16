'use client';

import { useState } from 'react';
import Link from 'next/link';
import { slides } from '@/lib/home-data';

const ctaStyle = { alignSelf: 'flex-start', background: '#0E7A3F', color: '#FFFFFF', textDecoration: 'none', fontWeight: '700', fontSize: '17px', padding: '15px 24px', borderRadius: '12px' } as const;
const arrowStyle = { width: '44px', height: '44px', borderRadius: '999px', border: 'none', background: 'rgba(255,255,255,0.92)', color: '#13294B', fontSize: '20px', fontWeight: '700', cursor: 'pointer' } as const;

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const go = (k: number) => setI((k + slides.length) % slides.length);
  const slide = slides[i];
  const internal = slide.href.startsWith('/');

  return (
    <div style={{ flex: '3 1 560px', position: 'relative', borderRadius: '20px', overflow: 'hidden', minHeight: '420px', background: '#0B1A33', color: '#FFFFFF' }}>
      <img src={slide.img} alt={slide.alt} style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: slide.pos }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(90deg, rgba(11,26,51,0.93) 0%, rgba(11,26,51,0.8) 42%, rgba(11,26,51,0.15) 100%)' }}></div>
      <div style={{ position: 'relative', padding: '48px 44px 72px', display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '540px' }}>
        <span style={{ alignSelf: 'flex-start', background: '#F5A623', color: '#0B1A33', fontWeight: '700', fontSize: '14px', padding: '6px 14px', borderRadius: '999px' }}>{slide.tag}</span>
        <h1 style={{ margin: '0', fontSize: 'clamp(30px, 3.6cqi, 48px)', lineHeight: '1.12', fontWeight: '800' }}>{slide.title}</h1>
        <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.55', color: '#DCE4EF' }}>{slide.text}</p>
        {internal
          ? <Link href={slide.href} style={ctaStyle}>{slide.cta}</Link>
          : <a href={slide.href} style={ctaStyle}>{slide.cta}</a>}
      </div>
      <div style={{ position: 'absolute', left: '44px', bottom: '24px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        {slides.map((_, k) => (
          <button
            key={k}
            type="button"
            aria-label={'Tampilkan slide ' + (k + 1)}
            onClick={() => go(k)}
            style={{ height: '10px', border: 'none', padding: '0', borderRadius: '999px', cursor: 'pointer', ...(k === i ? { width: '32px', background: '#F5A623' } : { width: '10px', background: 'rgba(255,255,255,0.75)' }) }}
          />
        ))}
      </div>
      <div style={{ position: 'absolute', right: '20px', bottom: '16px', display: 'flex', gap: '8px' }}>
        <button type="button" aria-label="Slide sebelumnya" onClick={() => go(i - 1)} style={arrowStyle}>‹</button>
        <button type="button" aria-label="Slide berikutnya" onClick={() => go(i + 1)} style={arrowStyle}>›</button>
      </div>
    </div>
  );
}
