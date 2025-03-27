// Indonesian translations for the Mandiri Pocket Book app

export const translations = {
  // General
  "Welcome to Bank Mandiri Sales Pocket Book": "Selamat Datang di Buku Saku Livin Merchant dan EDC Bank Mandiri",
  "Your comprehensive guide to help customers with Livin Merchant and EDC registration. This pocket book simplifies the process for easier sales negotiations.": "Panduan lengkap Anda untuk membantu nasabah dengan pendaftaran Livin Merchant dan EDC. Buku saku ini menyederhanakan proses pendaftaran agar lebih mudah.",
  "Bank Mandiri Sales Pocket Book": "Buku Saku Livin Merchant dan EDC",
  "Pocket Book": "Buku Saku",

  // Navigation
  "Home": "Beranda",
  "Livin Merchant": "Livin Merchant",
  "EDC Registration": "Pendaftaran EDC",
  "FAQ": "FAQ",
  "Download": "Unduh",

  // Livin Merchant Card
  "All-in-one Point-of-Sales (POS) solution": "Solusi Point-of-Sales (POS) all-in-one",
  "Guide your customers through Livin Merchant registration and setup with our simplified step-by-step process.": "Pandu pelanggan Anda melalui pendaftaran dan pengaturan Livin Merchant dengan proses langkah demi langkah kami yang disederhanakan.",
  "View Guide": "Lihat Panduan",

  // EDC Registration Card
  "Electronic Data Capture setup for businesses": "Pengaturan Electronic Data Capture untuk bisnis",
  "Help businesses set up Bank Mandiri EDC terminals with a streamlined registration process that's easy to follow.": "Bantu bisnis mengatur terminal EDC Bank Mandiri dengan proses pendaftaran yang efisien dan mudah diikuti.",

  // How to use
  "How to use this Pocket Book": "Cara Menggunakan Buku Saku Ini",
  "Navigate using the sidebar to find the specific guide you need": "Navigasi menggunakan sidebar untuk menemukan panduan spesifik yang Anda butuhkan",
  "Follow the step-by-step instructions with your customer": "Ikuti instruksi langkah demi langkah bersama pelanggan Anda",
  "Use the FAQ section for common questions and troubleshooting": "Gunakan bagian FAQ untuk pertanyaan umum dan pemecahan masalah",
  "Access quick reference guides for on-the-spot assistance": "Akses panduan referensi cepat untuk bantuan langsung di tempat",

  // Help Section
  "Need assistance?": "Butuh bantuan?",
  "Contact Mandiri Call 14000": "Hubungi Mandiri Call 14000",
  "Get Help": "Dapatkan Bantuan",

  // Additional content might be added here for other sections
};

export function t(key: string): string {
  return translations[key as keyof typeof translations] || key;
}
