export type Motif = { code: string; cat: MotifCat; tag: string; img: string };
export type MotifCat = 'Polos' | 'Kayu' | 'Marmer' | '3D & Dekoratif';

export const motifTabs: ('Semua' | MotifCat)[] = ['Semua', 'Kayu', 'Polos', 'Marmer', '3D & Dekoratif'];

export const motifs: Motif[] = [
  { code: '8093R', cat: 'Polos', tag: 'Terlaris', img: '/img/bc7e6da3af950c55df547650cf4582dd.jpg' },
  { code: '8101', cat: 'Polos', tag: 'Putih doff', img: '/img/fe05b88289a1ada059cb317639284b8f.jpg' },
  { code: '8020', cat: 'Polos', tag: 'Putih', img: '/img/10e88d4758e5eaea7d1a418535f026c9.jpg' },
  { code: '8091N', cat: 'Polos', tag: 'Hitam', img: '/img/a12a08ca9add56eaeb8fda62434c3ea2.jpg' },
  { code: '8001', cat: 'Kayu', tag: 'Motif kayu', img: '/img/fc75e8009c308fd641e8202cf04a250b.jpg' },
  { code: '8007', cat: 'Kayu', tag: 'Motif kayu', img: '/img/d879671b4a9f2fe428f76f2726c9cd54.jpg' },
  { code: '8054', cat: 'Kayu', tag: 'Kayu + list emas', img: '/img/7220678192d78b4e403eafdd1a4b984f.jpg' },
  { code: '8076', cat: 'Kayu', tag: 'Kayu terang', img: '/img/642cc9c0e8ec8714aead9dffc0af1859.jpg' },
  { code: '8017', cat: 'Marmer', tag: 'Marmer putih', img: '/img/c3c294515c340ec23f3ac5486668c765.jpg' },
  { code: '8049', cat: 'Marmer', tag: 'Marmer gelap', img: '/img/cbaa74cfaf2e581a56a416d5d9ba8fd0.jpg' },
  { code: '8082', cat: 'Marmer', tag: 'Marmer hijau', img: '/img/8fc6ab289f63f8ab16708b57fe7a1fb9.jpg' },
  { code: '8112', cat: 'Marmer', tag: 'Marmer putih', img: '/img/e0e2f94dd7a34a72b7f9c0e5e43fb2ac.jpg' },
  { code: '8095', cat: '3D & Dekoratif', tag: '3D gelombang', img: '/img/76436603346726ce29d44be636d58c3a.jpg' },
  { code: '8113', cat: '3D & Dekoratif', tag: '3D daun', img: '/img/e253095e7eb6cdd82b4beec17a99a3d1.jpg' },
  { code: '8103', cat: '3D & Dekoratif', tag: 'Geometri emas', img: '/img/eefbab633b194d786a6a715d40ff75b5.jpg' },
  { code: '8023', cat: '3D & Dekoratif', tag: 'Garis dekoratif', img: '/img/7c1097334234eca73124569b39b6f49e.jpg' },
];
