import { waHarga } from './wa';

export type Slide = { img: string; pos: string; alt: string; tag: string; title: string; text: string; cta: string; href: string };
export type Item = { name: string; sub: string; img: string; badge?: string; contain?: boolean };
export type Category = { title: string; note: string; more?: string; items: Item[] };
export type CatKey = 'plafon' | 'wpc' | 'hpl' | 'vinyl' | 'ornamen' | 'hardware' | 'atap';

const B = {
  toko: '/img/a4ad09247e89b3e45af0ca709da2a732.jpg',
  p1: '/img/461c0d59358617ef23d0591e2d410244.jpg',
  p2: '/img/391002d6419bcc89477c3b6126382aa9.jpg',
  panel: '/img/0757f171ff050be6b9c98395476d075d.jpg',
  spandek: '/img/c00666749cdc7bbee1fa17f5287a3997.jpg',
};

export const slides: Slide[] = [
  { img: B.toko, pos: '70% 40%', alt: 'Toko Indoprima Aluminium Bulukumba', tag: 'Toko kami di Bulukumba', title: 'Spesialis Interior & Atap — plafon PVC sampai spandek, lengkap di sini.', text: 'Kirim ukuran ruangan atau atap Anda. Admin bantu hitungkan bahan dan kirim penawaran lewat WhatsApp.', cta: 'Konsultasi Gratis', href: waHarga('dan konsultasi kebutuhan bahan') },
  { img: B.p1, pos: 'center 45%', alt: 'Plafon PVC putih dengan drop ceiling motif kayu', tag: 'Plafon PVC', title: 'Plafon PVC motif kayu & putih — anti rayap, tanpa cat.', text: 'Puluhan motif siap kirim, lengkap dengan lis dan aksesoris pemasangan.', cta: 'Lihat Motif Plafon', href: '/plafon-pvc' },
  { img: B.spandek, pos: 'center', alt: 'Lembaran spandek', tag: 'Atap', title: 'Spandek dipotong sesuai ukuran atap Anda.', text: 'Kirim panjang atap, kami siapkan lembaran yang pas. Lengkap dengan rangka baja ringan.', cta: 'Pesan Spandek', href: waHarga('spandek custom') },
];

export const navCats: [CatKey, string][] = [
  ['plafon', 'Plafon PVC'], ['wpc', 'Wall Panel'], ['hpl', 'HPL TACO'], ['vinyl', 'Vinyl TACO'], ['ornamen', 'Ornamen Lampu'], ['hardware', 'Hardware TACO'], ['atap', 'Atap & Baja Ringan'],
];

const hwAll = [
  { code: 'BBS 009 PO', cat: 'Ball Bearing', desc: 'Push Open Ball Bearing Slide Full Extension 45', tag: 'Push open', img: '/img/9e248084c8585636732fd0368c9ebeff.png' },
  { code: 'BBS 008 SC', cat: 'Ball Bearing', desc: 'Soft Closing Ball Bearing Slide Full Extension 45', tag: 'Soft closing', img: '/img/11efabb8685833c009ad9337ca7b162a.png' },
  { code: 'BBS 005 SC', cat: 'Ball Bearing', desc: 'Soft Closing Ball Bearing Slide Full Extension 36', tag: 'Soft closing', img: '/img/073d1cb56f2204ecb77c4f23cd904df4.png' },
  { code: 'BBS 006 FE', cat: 'Ball Bearing', desc: 'Ball Bearing Slide Full Extension 45', tag: 'Full extension', img: '/img/36bcfc9c6329f1ad5dc9340af60a9f44.png' },
  { code: 'BBS 007 FE', cat: 'Ball Bearing', desc: 'Ball Bearing Slide Full Extension 37', tag: 'Full extension', img: '/img/f3e573bbd381bb5003b7504955f70ee2.png' },
  { code: 'BBS 010 FE', cat: 'Ball Bearing', desc: 'Ball Bearing Slide Full Extension 35', tag: 'Full extension', img: '/img/d9504e7fb1b4e74eaf66567254093aa5.png' },
  { code: 'US 001 SC', cat: 'Undermount', desc: 'Soft Closing Undermount Slide Full Extension with Clip-On', tag: 'Soft closing', img: '/img/01b2aa680526c1167bd5d5caf315394f.png' },
  { code: 'US 002 PO', cat: 'Undermount', desc: 'Push Open Undermount Slide Full Extension with Clip-On', tag: 'Baru', img: '/img/999785be610192162ba26dafba896233.png' },
  { code: 'US 003 POSC', cat: 'Undermount', desc: 'Push Open Soft Closing Undermount Slide Full Extension with Clip-On', tag: 'Baru', img: '/img/787004251cb9a988f5c083262060cefc.png' },
  { code: 'RLT 001 FE', cat: 'Roller', desc: 'White Side Mount Drawer Slide', tag: 'Putih', img: '/img/3ef7e8ab62c9599c8436dee612d6d9b1.png' },
  { code: 'RLT 002 FE', cat: 'Roller', desc: 'Black Side Mount Drawer Slide', tag: 'Hitam', img: '/img/2e6bea5731b5d0347114b6a2631306de.png' },
];

const vinAll = [
  { code: 'TV 5527 SPC', name: 'Charcoal Terrazzo', cat: 'Batu', tex: 'Fine Texture', isNew: true, img: '/img/d653d1825149856b9ea75912fda38a98.jpg' },
  { code: 'TV 5526 SPC', name: 'Pebble Terrazzo', cat: 'Batu', tex: 'Fine Texture', isNew: true, img: '/img/32e131976a9717cfdc80649ab88dae3a.jpg' },
  { code: 'TV 5525 SPC', name: 'Arctic Terrazzo', cat: 'Batu', tex: 'Fine Texture', isNew: true, img: '/img/3da9cdee19cfe5850173f985dacdf625.jpg' },
  { code: 'TV 5524 SPC', name: 'Cocoa Oak', cat: 'Kayu', tex: 'Fine Texture', isNew: true, img: '/img/10acc1781e12e444dde3e5e1db01a197.jpg' },
  { code: 'TV 5523 SPC', name: 'Smoke Oak', cat: 'Kayu', tex: 'Fine Texture', isNew: true, img: '/img/772394809f8802432d7d82fffd034848.jpg' },
  { code: 'TV 5522 SPC', name: 'Barley Oak', cat: 'Kayu', tex: 'Fine Texture', isNew: true, img: '/img/ac6fe2b93a278fc4e6d45f5681d3e754.jpg' },
  { code: 'TV 5521 SPC', name: 'Santiago Oak', cat: 'Kayu', tex: 'Deep Texture', isNew: false, img: '/img/aef89c5b29376708823f2118f0d42326.jpg' },
  { code: 'TV 5520 SPC', name: 'Vienna Oak', cat: 'Kayu', tex: 'Deep Texture', isNew: false, img: '/img/b45c957012d779cb47d9c49aa0a2a94c.jpg' },
  { code: 'TV 5519 SPC', name: 'Brown Sterling', cat: 'Batu', tex: 'Fine Texture Stone', isNew: false, img: '/img/231a13dfe859511d493b9234f92a3daa.jpg' },
  { code: 'TV 5518 SPC', name: 'Grey Sterling', cat: 'Batu', tex: 'Fine Texture Stone', isNew: false, img: '/img/188cf40f56f354c17c2f4cf8987370e6.jpg' },
  { code: 'TV 5517 SPC', name: 'Grey Air', cat: 'Batu', tex: 'Fine Texture Stone', isNew: false, img: '/img/7cc0b8f3194d974d32798559228308e9.jpg' },
  { code: 'TV 5501 SPC', name: 'Tuscany Oak', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/7635630bd396b147175ff60b7a3bcf48.jpg' },
  { code: 'TV 5507 SPC', name: 'Finnish Oak', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/c55b0fa3ee4def57ba86e1a3b98cdc3a.jpg' },
  { code: 'TV 5502 SPC', name: 'Ottawa Oak', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/73df615e478db15a3ff2cf14077c147a.jpg' },
  { code: 'TV 5508 SPC', name: 'Madeira Walnut', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/83cc9d8afe964ef403beb5f2160efffb.jpg' },
  { code: 'TV 5503 SPC', name: 'Valencia Oak', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/d970862bc24a98e365b1be3333ec3abd.jpg' },
  { code: 'TV 5509 SPC', name: 'Wild Cherry', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/e1c8c761a965a0872f56b23299929e12.jpg' },
  { code: 'TV 5504 SPC', name: 'Golden Acacia', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/3c73c80b3f72fedaf71bfe499e647edf.jpg' },
  { code: 'TV 5505 SPC', name: 'Carson Oak', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/5ab8446d750793ea0067b0e93877d487.jpg' },
  { code: 'TV 5510 SPC', name: 'Canyon Oak', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/9028dcc13cb11eea5638eaadd7121d44.jpg' },
  { code: 'TV 5511 SPC', name: 'Ontario Hickory', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/8c4d6dda58d2276589133ce511f94660.jpg' },
  { code: 'TV 5512 SPC', name: 'Somerset Applewood', cat: 'Kayu', tex: 'Fine Texture', isNew: false, img: '/img/58e0abd60ae0d1b6339d3bbe674129df.jpg' },
  { code: 'TV 5516 SPC', name: 'Concrete', cat: 'Batu', tex: 'Stone', isNew: false, img: '/img/3e96454082d9c01b393132a34361db57.jpg' },
];

const atapItems = [
  { name: 'Spandek Custom (potong ukuran)', spec: '[tebal] · [warna] · panjang sesuai pesanan', tag: 'Terlaris', img: B.spandek },
  { name: 'Baja Ringan Kanal C [ukuran]', spec: '[tebal] · panjang 6 m · galvanis', tag: 'Rangka atap', img: '/img/6f89e8f18062646a20c15c186f57bdb3.jpg' },
  { name: 'Reng Baja Ringan [ukuran]', spec: '[tebal] · panjang 6 m · galvanis', tag: 'Rangka atap', img: '/img/fb100674a0f9ead361d5bd8016080333.jpg' },
  { name: 'Bubungan / Nok Spandek', spec: '[ukuran] · lapisan pasir hitam', tag: 'Aksesoris', img: '/img/0ef4e7b37babcd3c955439f80992301b.jpg' },
];

export const catalog: Record<CatKey, Category> = {
  plafon: { title: 'Plafon PVC Mozart', note: 'Tebal 8 mm, 100+ motif. Lihat halaman plafon untuk kalkulator & keunggulan.', more: '/plafon-pvc', items: [
    { name: 'MOZ 8093R', sub: 'Plafon PVC Mozart · Polos · Terlaris', img: '/img/bc7e6da3af950c55df547650cf4582dd.jpg' },
    { name: 'MOZ 8101', sub: 'Plafon PVC Mozart · Putih doff', img: '/img/fe05b88289a1ada059cb317639284b8f.jpg' },
    { name: 'MOZ 8020', sub: 'Plafon PVC Mozart · Putih', img: '/img/10e88d4758e5eaea7d1a418535f026c9.jpg' },
    { name: 'MOZ 8091N', sub: 'Plafon PVC Mozart · Hitam', img: '/img/a12a08ca9add56eaeb8fda62434c3ea2.jpg' },
    { name: 'MOZ 8001', sub: 'Plafon PVC Mozart · Motif kayu', img: '/img/fc75e8009c308fd641e8202cf04a250b.jpg' },
    { name: 'MOZ 8007', sub: 'Plafon PVC Mozart · Motif kayu', img: '/img/d879671b4a9f2fe428f76f2726c9cd54.jpg' },
    { name: 'MOZ 8054', sub: 'Plafon PVC Mozart · Kayu + list emas', img: '/img/7220678192d78b4e403eafdd1a4b984f.jpg' },
    { name: 'MOZ 8076', sub: 'Plafon PVC Mozart · Kayu terang', img: '/img/642cc9c0e8ec8714aead9dffc0af1859.jpg' },
    { name: 'MOZ 8017', sub: 'Plafon PVC Mozart · Marmer putih', img: '/img/c3c294515c340ec23f3ac5486668c765.jpg' },
    { name: 'MOZ 8049', sub: 'Plafon PVC Mozart · Marmer gelap', img: '/img/cbaa74cfaf2e581a56a416d5d9ba8fd0.jpg' },
    { name: 'MOZ 8082', sub: 'Plafon PVC Mozart · Marmer hijau', img: '/img/8fc6ab289f63f8ab16708b57fe7a1fb9.jpg' },
    { name: 'MOZ 8112', sub: 'Plafon PVC Mozart · Marmer putih', img: '/img/e0e2f94dd7a34a72b7f9c0e5e43fb2ac.jpg' },
    { name: 'MOZ 8095', sub: 'Plafon PVC Mozart · 3D gelombang', img: '/img/76436603346726ce29d44be636d58c3a.jpg' },
    { name: 'MOZ 8113', sub: 'Plafon PVC Mozart · 3D daun', img: '/img/e253095e7eb6cdd82b4beec17a99a3d1.jpg' },
    { name: 'MOZ 8103', sub: 'Plafon PVC Mozart · Geometri emas', img: '/img/eefbab633b194d786a6a715d40ff75b5.jpg' },
    { name: 'MOZ 8023', sub: 'Plafon PVC Mozart · Garis dekoratif', img: '/img/7c1097334234eca73124569b39b6f49e.jpg' },
  ] },
  wpc: { title: 'Wall Panel WPC Mozart', note: 'Panel dinding motif kayu & marmer untuk ruang tamu dan dinding TV.', items: [
    { name: 'WPC 001', sub: 'Mozart Wall Panel · Hijau sage', img: '/img/93cb332649db149cca5f2138b6565551.jpg' },
    { name: 'WPC 002', sub: 'Mozart Wall Panel · Kayu gelap', img: '/img/cfa4b0fd5b468dc7d5884f3bb5f5a04e.jpg' },
    { name: 'WPC 004', sub: 'Mozart Wall Panel · Putih marmer', img: '/img/519f7a2aef1a12b5cc73d2d414347f78.jpg' },
    { name: 'WPC 005', sub: 'Mozart Wall Panel · Abu-abu', img: '/img/e48b6fed27f807ccd9d9fa658723a14b.jpg' },
    { name: 'WPC 010', sub: 'Mozart Wall Panel · Kayu terang', img: '/img/93ee3b1dbb0ca7c94070a94693c4bfcd.jpg' },
    { name: 'WPC 015', sub: 'Mozart Wall Panel · Hitam', img: '/img/6d891b851562ad4a2edc89b413dce500.jpg' },
  ] },
  hpl: { title: 'HPL TACO', note: 'Lapisan HPL untuk kitchen set, lemari & meja.', items: [
    { name: 'TH 131 AA Treco Wood', sub: 'HPL TACO · motif kayu', img: '/img/be7cc1ac43d48ebeca497045d07fd895.jpg' },
    { name: 'TH 372 H New Rhumba', sub: 'HPL TACO · motif kayu', img: '/img/270aa09f1438fce067b998d7f4e8cc60.jpg' },
    { name: 'TH 109 AA Spice Cherry', sub: 'HPL TACO · motif kayu', img: '/img/301f3a180816faead3880bc1cbce561e.jpg' },
    { name: 'TH 361 H Sol Cherry', sub: 'HPL TACO · motif kayu', img: '/img/06a3bcd5866a2ef04950f2320c399af9.jpg' },
    { name: 'TH 846 J Crimson Maple', sub: 'HPL TACO · motif kayu', img: '/img/ab7ec3c1ce7862fdd49eb07fe2f9ce0f.jpg' },
    { name: 'TH 1200 FC Fine Cherry', sub: 'HPL TACO · motif kayu', img: '/img/26f98e64802b3b8ace3a3ed8af5af9fe.jpg' },
    { name: 'TH 266 B Red Cherry', sub: 'HPL TACO · motif kayu', img: '/img/918480ab459c55a0df19f4fc715c5d13.jpg' },
    { name: 'TH 202 B Golden Cherry', sub: 'HPL TACO · motif kayu', img: '/img/59f0abdf6f0afbd48b415dc3407cc2be.jpg' },
    { name: 'TH 151 B New Cherry Wood', sub: 'HPL TACO · motif kayu', img: '/img/4fea7b02285196fac99431cc288c8a26.jpg' },
    { name: 'TH 890 FC Amondo Cherry', sub: 'HPL TACO · motif kayu', img: '/img/ec883597fc63eb2e32b6c9b14d647e97.jpg' },
    { name: 'TH 362 H Mono Deluxe', sub: 'HPL TACO · motif kayu', img: '/img/4d15f956a3d88ffc47f08fcb36f88c01.jpg' },
  ] },
  vinyl: { title: 'Vinyl Lantai TACO SPC', note: 'Lantai motif kayu & batu, rapi tanpa semen.', items: vinAll.map((x) => ({ name: x.name, sub: x.code + ' · ' + x.tex, img: x.img, badge: x.isNew ? 'BARU' : '' })) },
  ornamen: { title: 'Ornamen Fitting Lampu', note: 'Diameter 30 cm — bentuk persegi, bintang & segi delapan.', items: [
    { name: 'Type 3025', sub: 'Ornamen lampu · persegi · emas – putih', img: '/img/b1b67b826184ac89c6e7322763520be5.png', contain: true },
    { name: 'Type 3214', sub: 'Ornamen lampu · persegi · hitam – putih', img: '/img/5aec59e23c7124efbafe5cf79ffb3f00.png', contain: true },
    { name: 'Type 3225', sub: 'Ornamen lampu · persegi · hitam', img: '/img/4a1b1dbe65df77af25d86c09f58c217a.png', contain: true },
    { name: 'Type 3219', sub: 'Ornamen lampu · persegi · coklat emas – putih', img: '/img/117ca08bdd178c5052be89cdc98bc444.png', contain: true },
    { name: 'Type 3223', sub: 'Ornamen lampu · bintang · putih – silver', img: '/img/0ff3613b8476ac9322da13fdf4f67b6c.png', contain: true },
    { name: 'Type 3127', sub: 'Ornamen lampu · bintang · emas', img: '/img/681b1ad5e11392c02c4fa1eebad30576.png', contain: true },
    { name: 'Type 3131', sub: 'Ornamen lampu · bintang · putih – krem', img: '/img/29623ef2270e6be8e9845a738ff9fa96.png', contain: true },
    { name: 'Type 3125', sub: 'Ornamen lampu · segi delapan · putih – emas', img: '/img/5c4ed681c83a0915c3f49f07fbc552da.png', contain: true },
    { name: 'Type 3117', sub: 'Ornamen lampu · segi delapan · putih – emas', img: '/img/462a96224a5518060342f13d592bdd74.png', contain: true },
  ] },
  hardware: { title: 'Hardware Furniture TACO', note: 'Rel laci soft closing, push open & undermount untuk kitchen set.', items: hwAll.map((x) => ({ name: 'TACO ' + x.code, sub: x.desc, img: x.img, contain: true, badge: x.tag === 'Baru' ? 'BARU' : '' })) },
  atap: { title: 'Atap & Baja Ringan', note: 'Spandek potong sesuai ukuran, rangka baja ringan & aksesoris.', items: atapItems.map((x) => ({ name: x.name, sub: x.spec, img: x.img })) },
};
