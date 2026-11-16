export const WA_NUMBER = '6282226897783';

/** Link WhatsApp dengan teks bebas. */
export const waText = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/** Link WhatsApp "Halo Indoprima, saya mau tanya harga …". */
export const waHarga = (n: string) => waText('Halo Indoprima, saya mau tanya harga ' + n);
