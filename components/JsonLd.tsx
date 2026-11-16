/** Menyisipkan structured data schema.org (JSON-LD) ke HTML yang dirender server. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" agar isi JSON tidak bisa menutup tag <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
