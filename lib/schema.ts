import { BUSINESS, SITE_URL } from './site';

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** LocalBusiness + WebSite — dipasang di semua halaman. */
export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HardwareStore', 'HomeAndConstructionBusiness'],
      '@id': BUSINESS_ID,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      alternateName: [...BUSINESS.alternateName],
      slogan: BUSINESS.slogan,
      description: BUSINESS.description,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}${BUSINESS.image}`,
      logo: `${SITE_URL}/icon.svg`,
      telephone: BUSINESS.phones[0],
      contactPoint: BUSINESS.phones.map((telephone) => ({
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone,
        availableLanguage: ['id'],
        areaServed: 'ID',
      })),
      address: { '@type': 'PostalAddress', ...BUSINESS.address },
      geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
      hasMap: BUSINESS.mapsUrl,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [...BUSINESS.openingDays],
          opens: BUSINESS.opens,
          closes: BUSINESS.closes,
        },
      ],
      areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
      knowsAbout: [...BUSINESS.categories],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Produk interior & atap',
        itemListElement: BUSINESS.categories.map((name) => ({ '@type': 'OfferCatalog', name })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: BUSINESS.name,
      alternateName: 'Indoprima',
      inLanguage: 'id-ID',
      publisher: { '@id': BUSINESS_ID },
    },
  ],
};
