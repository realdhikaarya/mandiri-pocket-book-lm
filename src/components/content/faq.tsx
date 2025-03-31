"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function FAQContent() {
  const [activeTab, setActiveTab] = useState("general");
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pb-4 relative"
      >
        <h1 className="text-3xl font-bold text-primary mb-3">Pertanyaan yang Sering Diajukan</h1>
        <p className="text-gray-600 max-w-4xl">
          Temukan jawaban untuk pertanyaan umum tentang Livin Merchant dan pendaftaran EDC.
          FAQ ini akan membantu Anda menjawab pertanyaan pelanggan selama negosiasi penjualan.
        </p>
      </motion.div>


      {/*
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          placeholder="Cari jawaban..."
        />
      </div>
      */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs 
          defaultValue="general" 
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            {["general", "registration", "operations", "payment"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                asChild
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab === "general" && "Umum"}
                  {tab === "registration" && "Pendaftaran"}
                  {tab === "operations" && "Operasional"}
                  {tab === "payment" && "Pembayaran"}
                </motion.div>
              </TabsTrigger>
            ))}
          </TabsList>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
        <TabsContent value="general" className="space-y-6">
          <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Pertanyaan Umum</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="general-1">
                  <AccordionTrigger>Apa itu Livin Merchant oleh Mandiri?</AccordionTrigger>
                  <AccordionContent>
                    Livin Merchant oleh Mandiri adalah solusi Point-of-Sales (POS) yang komprehensif yang memungkinkan bisnis mengelola inventaris, penjualan, pembayaran, dan aliran kas melalui satu aplikasi mobile. Fitur-fiturnya mencakup pencatatan penjualan, manajemen stok, penerimaan pembayaran QRIS, dan riwayat transaksi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="general-2">
                  <AccordionTrigger>Apa itu terminal EDC dan bagaimana perbedaannya dengan Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    Terminal Electronic Data Capture (EDC) adalah perangkat fisik yang digunakan untuk memproses pembayaran kartu (kartu kredit/debit). Berbeda dengan Livin Merchant yang merupakan aplikasi mobile dengan berbagai fitur, terminal EDC adalah perangkat keras khusus untuk pemrosesan transaksi kartu. Bisnis dapat menggunakan keduanya secara komplemen: EDC untuk pembayaran kartu dan Livin Merchant untuk pelacakan inventaris, penjualan, dan pembayaran QRIS.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="general-3">
                  <AccordionTrigger>Apakah saya perlu membayar untuk menggunakan Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    Tidak, Livin Merchant sepenuhnya gratis digunakan. Tidak ada biaya berlangganan, biaya instalasi, atau biaya tersembunyi. Namun, biaya transaksi standar mungkin berlaku untuk pemrosesan pembayaran, seperti halnya sistem pembayaran lainnya.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="general-4">
                  <AccordionTrigger>Apakah ada biaya yang terkait dengan terminal EDC Bank Mandiri?</AccordionTrigger>
                  <AccordionContent>
                    Ya, terdapat biaya yang terkait dengan terminal EDC yang biasanya meliputi:
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Merchant Discount Rate (MDR): Berkisar 0,5% hingga 2,5% tergantung jenis kartu</li>
                      <li>Biaya sewa: Biaya bulanan yang mungkin dihapuskan berdasarkan volume transaksi</li>
                      <li>Biaya instalasi: Biaya pemasangan satu kali</li>
                      <li>Penggantian kertas cetak: Biaya kertas struk</li>
                    </ul>
                    Perwakilan Mandiri Anda akan memberikan struktur biaya yang tepat selama pengajuan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="general-5">
                  <AccordionTrigger>Bisnis apa saja yang dapat menggunakan Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    Livin Merchant dirancang untuk semua jenis bisnis, mulai dari penjual individu kecil hingga perusahaan besar dengan beberapa outlet. Sangat cocok untuk toko ritel, restoran, kafe, penyedia layanan, dan bisnis online. Setiap bisnis yang perlu mengelola penjualan, inventaris, dan menerima pembayaran dapat mengambil manfaat dari Livin Merchant.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="registration" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Pertanyaan Pendaftaran</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="reg-1">
                  <AccordionTrigger>Bagaimana cara mendaftar Livin Merchant sebagai individu?</AccordionTrigger>
                  <AccordionContent>
                    Untuk mendaftar Livin Merchant sebagai individu:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Unduh aplikasi Livin Merchant dari Google Play atau App Store</li>
                      <li>Buka aplikasi dan ketuk "Daftar" atau "Buat Akun"</li>
                      <li>Masukkan nomor ponsel Anda dan verifikasi dengan OTP</li>
                      <li>Buat kata sandi yang aman</li>
                      <li>Isi detail pribadi dan informasi bisnis Anda</li>
                      <li>Berikan nomor rekening Mandiri Anda</li>
                      <li>Kirim permohonan Anda</li>
                    </ol>
                    Seluruh proses memakan waktu kurang dari 15 menit, dan Anda dapat langsung menggunakan aplikasi setelah pendaftaran.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reg-2">
                  <AccordionTrigger>Bagaimana cara mendaftar Livin Merchant sebagai entitas bisnis?</AccordionTrigger>
                  <AccordionContent>
                    Untuk pendaftaran entitas bisnis:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Hubungi Bank Mandiri di 14000 atau kunjungi cabang</li>
                      <li>Minta berbicara dengan perwakilan Merchant Acquiring</li>
                      <li>Siapkan semua dokumen bisnis yang diperlukan (izin, NPWP, dll.)</li>
                      <li>Lengkapi formulir permohonan yang diberikan perwakilan</li>
                      <li>Serahkan semua dokumentasi</li>
                      <li>Tunggu verifikasi (biasanya 3-5 hari kerja)</li>
                      <li>Setelah disetujui, Anda akan menerima kredensial login</li>
                    </ol>
                    Pendaftaran entitas bisnis memerlukan verifikasi dokumen bisnis dan dapat memakan beberapa hari untuk diselesaikan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reg-3">
                  <AccordionTrigger>Bagaimana cara mengajukan terminal EDC Bank Mandiri?</AccordionTrigger>
                  <AccordionContent>
                    Untuk mengajukan terminal EDC Bank Mandiri:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Hubungi Bank Mandiri melalui call center (14000) atau kunjungi cabang</li>
                      <li>Minta berbicara dengan bagian Merchant Acquiring</li>
                      <li>Lengkapi Formulir Permohonan Merchant EDC</li>
                      <li>Berikan semua dokumentasi bisnis yang diperlukan</li>
                      <li>Tanda tangani perjanjian merchant</li>
                      <li>Kirim permohonan Anda</li>
                      <li>Tunggu peninjauan permohonan (5-7 hari kerja)</li>
                      <li>Jika disetujui, teknisi akan mengunjungi lokasi Anda untuk instalasi</li>
                    </ol>
                    Seluruh proses biasanya memakan waktu 1-2 minggu dari pengajuan hingga instalasi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reg-4">
                  <AccordionTrigger>Apakah saya memerlukan rekening Mandiri untuk menggunakan Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    Ya, Anda memerlukan rekening Bank Mandiri aktif untuk menggunakan Livin Merchant. Rekening ini digunakan untuk menyelesaikan transaksi Anda. Jika Anda tidak memiliki rekening Mandiri, Anda dapat dengan mudah membukanya melalui aplikasi Livin' by Mandiri atau dengan mengunjungi cabang Bank Mandiri sebelum mendaftar Livin Merchant.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reg-5">
                  <AccordionTrigger>Dokumen apa saja yang diperlukan untuk pendaftaran terminal EDC?</AccordionTrigger>
                  <AccordionContent>
                    <p>Dokumen yang diperlukan untuk pendaftaran terminal EDC meliputi:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                      <li>Sertifikat Pendaftaran Bisnis (NIB/SIUP)</li>
                      <li>NPWP - bisnis dan pribadi</li>
                      <li>KTP pemilik bisnis</li>
                      <li>Akta pendirian (untuk PT)</li>
                      <li>Bukti alamat bisnis (rekening utilitas)</li>
                      <li>Detail rekening bisnis Bank Mandiri</li>
                      <li>Rekening bank terbaru (3 bulan terakhir)</li>
                      <li>Foto lokasi bisnis (interior/eksterior)</li>
                      <li>Perjanjian sewa (jika menyewa lokasi bisnis)</li>
                    </ul>
                    Dokumen tambahan mungkin diminta berdasarkan jenis bisnis Anda.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="operations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Pertanyaan Operasional</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="op-1">
                  <AccordionTrigger>Bagaimana cara menambahkan produk ke katalog di Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    Untuk menambahkan produk ke katalog Livin Merchant:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Masuk ke akun Livin Merchant Anda</li>
                      <li>Ketuk bagian "Katalog" atau "Produk"</li>
                      <li>Klik "Tambah Produk Baru"</li>
                      <li>Masukkan detail produk (nama, harga, deskripsi)</li>
                      <li>Unggah gambar produk (opsional)</li>
                      <li>Atur pelacakan persediaan jika diperlukan</li>
                      <li>Tambahkan variasi jika perlu (ukuran, warna, dll.)</li>
                      <li>Simpan produk</li>
                    </ol>
                    Anda juga dapat mengimpor produk secara massal jika memiliki banyak item untuk ditambahkan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="op-2">
                  <AccordionTrigger>Bagaimana cara mengelola beberapa outlet di Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    Mengelola beberapa outlet di Livin Merchant sangat mudah:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Buka bagian "Pengaturan" atau "Akun"</li>
                      <li>Pilih "Outlet" atau "Lokasi"</li>
                      <li>Ketuk "Tambah Outlet Baru"</li>
                      <li>Masukkan detail outlet (nama, alamat, info kontak)</li>
                      <li>Tetapkan anggota staf ke outlet jika diperlukan</li>
                      <li>Anda juga dapat menyalin produk dari outlet yang ada</li>
                      <li>Kelola inventaris secara terpisah untuk setiap outlet</li>
                      <li>Lihat laporan per outlet atau gabungan</li>
                    </ol>
                    Anda dapat dengan mudah beralih antar outlet dari dasbor utama.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="op-3">
                  <AccordionTrigger>Apa yang harus dilakukan jika terminal EDC tidak berfungsi?</AccordionTrigger>
                  <AccordionContent>
                    Jika terminal EDC Anda tidak berfungsi:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Periksa daya dan koneksi internet/telepon</li>
                      <li>Restart terminal (matikan daya, tunggu 10 detik, nyalakan)</li>
                      <li>Pastikan kertas roll terpasang dengan benar</li>
                      <li>Hubungi Dukungan Merchant Bank Mandiri di 14000</li>
                      <li>Berikan ID merchant dan ID terminal Anda</li>
                      <li>Jelaskan masalah yang Anda alami</li>
                      <li>Ikuti langkah pemecahan masalah yang diberikan</li>
                      <li>Jika diperlukan, teknisi akan dikirim ke lokasi Anda</li>
                    </ol>
                    Sambil menunggu penyelesaian, Anda dapat menggunakan Livin Merchant untuk pembayaran QRIS sebagai alternatif.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="op-4">
                  <AccordionTrigger>Bagaimana cara mengelola akses staf di Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    Untuk mengelola akses staf di Livin Merchant:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Buka "Pengaturan" lalu "Manajemen Staf"</li>
                      <li>Pilih "Tambah Anggota Staf"</li>
                      <li>Masukkan detail anggota staf (nama, telepon, email)</li>
                      <li>Tetapkan peran (kasir, manajer, admin, dll.)</li>
                      <li>Atur izin untuk apa yang dapat mereka akses</li>
                      <li>Tetapkan ke outlet tertentu jika diperlukan</li>
                      <li>Simpan profil staf</li>
                      <li>Anggota staf akan menerima kredensial login</li>
                    </ol>
                    Anda dapat mengedit izin atau menonaktifkan akses staf kapan saja.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="op-5">
                  <AccordionTrigger>Bagaimana cara melihat laporan transaksi dan penyelesaian?</AccordionTrigger>
                  <AccordionContent>
                    Untuk melihat laporan transaksi dan penyelesaian:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Masuk ke akun Livin Merchant Anda</li>
                      <li>Buka bagian "Laporan" atau "Analitik"</li>
                      <li>Pilih rentang tanggal yang ingin Anda lihat</li>
                      <li>Pilih jenis laporan (penjualan, penyelesaian, dll.)</li>
                      <li>Saring berdasarkan metode pembayaran jika diperlukan</li>
                      <li>Lihat ringkasan dan transaksi detail</li>
                      <li>Ekspor laporan ke PDF atau Excel jika diperlukan</li>
                      <li>Detail penyelesaian menunjukkan kapan dana dialihkan ke rekening Anda</li>
                    </ol>
                    Untuk transaksi EDC, Anda juga dapat melihat laporan melalui portal merchant Bank Mandiri.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Pertanyaan Pembayaran</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="pay-1">
                  <AccordionTrigger>Bagaimana cara mengatur pembayaran QRIS di Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    Mengatur pembayaran QRIS di Livin Merchant sangatlah sederhana:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Buka aplikasi Livin Merchant</li>
                      <li>Masuk ke bagian "Pembayaran" atau "Metode Pembayaran"</li>
                      <li>Pilih "Atur QRIS"</li>
                      <li>Ikuti petunjuk di layar</li>
                      <li>Kode QRIS Anda akan dihasilkan secara otomatis</li>
                      <li>Anda dapat mengunduh dan mencetak kode QRIS</li>
                      <li>Tampilkan kode QRIS di lokasi bisnis Anda</li>
                      <li>Pelanggan dapat memindainya dengan aplikasi mobile banking apa pun</li>
                    </ol>
                    Pengaturan QRIS bersifat instan dan Anda dapat langsung menerima pembayaran.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pay-2">
                  <AccordionTrigger>Bagaimana cara kerja pembayaran kartu dengan dongle di Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    Untuk menerima pembayaran kartu dengan dongle di Livin Merchant:
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Pesan dongle kartu melalui aplikasi Livin Merchant atau Bank Mandiri</li>
                      <li>Hubungkan dongle kartu ke smartphone Anda via Bluetooth</li>
                      <li>Di aplikasi, buat penjualan atau pilih item dari katalog</li>
                      <li>Pilih "Pembayaran Kartu" sebagai metode pembayaran</li>
                      <li>Masukkan jumlah pembayaran</li>
                      <li>Minta pelanggan memasukkan, mengetuk, atau menggesek kartunya di dongle</li>
                      <li>Untuk kartu chip dan PIN, pelanggan perlu memasukkan PIN</li>
                      <li>Transaksi akan diproses dan struk digital dibuat</li>
                    </ol>
                    Dongle bekerja dengan kartu kredit dan debit dari semua jaringan utama.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pay-3">
                  <AccordionTrigger>Kapan dana dari transaksi diselesaikan ke rekening saya?</AccordionTrigger>
                  <AccordionContent>
                    <p>Untuk transaksi QRIS Livin Merchant:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Dana diselesaikan ke rekening Anda tiga kali sehari</li>
                      <li>Penyelesaian pagi: Transaksi diproses hingga 23:59 hari sebelumnya</li>
                      <li>Penyelesaian siang: Transaksi diproses hingga pukul 11:00 pagi</li>
                      <li>Penyelesaian malam: Transaksi diproses hingga pukul 15:00</li>
                    </ul>

                    <p className="mt-3">Untuk transaksi kartu terminal EDC:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Biasanya diselesaikan dalam 1 hari kerja</li>
                      <li>Waktu penyelesaian dapat bervariasi berdasarkan perjanjian merchant</li>
                      <li>Akhir pekan dan hari libur dapat menunda penyelesaian</li>
                    </ul>

                    <p className="mt-2">Semua penyelesaian dilakukan langsung ke rekening Bank Mandiri yang terdaftar.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pay-4">
                  <AccordionTrigger>Bagaimana cara memproses pengembalian dana atau membatalkan transaksi?</AccordionTrigger>
                  <AccordionContent>
                    <p>Untuk pengembalian dana QRIS Livin Merchant:</p>
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Buka "Transaksi" atau "Riwayat Penjualan"</li>
                      <li>Temukan transaksi yang ingin Anda kembalikan</li>
                      <li>Ketuk "Pengembalian Dana" atau "Batalkan"</li>
                      <li>Masukkan jumlah pengembalian dana (penuh atau sebagian)</li>
                      <li>Berikan alasan pengembalian dana</li>
                      <li>Konfirmasi pengembalian dana</li>
                    </ol>

                    <p className="mt-3">Untuk pengembalian dana kartu terminal EDC:</p>
                    <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                      <li>Di terminal EDC, pilih "Pengembalian Dana" atau "Batal"</li>
                      <li>Masukkan detail transaksi (mungkin perlu struk asli)</li>
                      <li>Masukkan jumlah yang akan dikembalikan</li>
                      <li>Minta pelanggan memasukkan/menggesek kartunya lagi</li>
                      <li>Struk pengembalian dana akan dicetak</li>
                    </ol>

                    <p className="mt-2">Pengembalian dana QRIS biasanya diproses dalam 1-3 hari kerja, sedangkan pengembalian dana kartu dapat memakan waktu 7-14 hari kerja untuk tercermin di rekening pelanggan.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pay-5">
                  <AccordionTrigger>Metode pembayaran apa saja yang diterima melalui Livin Merchant?</AccordionTrigger>
                  <AccordionContent>
                    <p>Livin Merchant mendukung berbagai metode pembayaran:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li><strong>QRIS:</strong> Menerima pembayaran dari semua bank dan e-wallet yang mendukung QRIS</li>
                      <li><strong>Pembayaran Kartu (via dongle):</strong> Kartu kredit dan debit dari semua jaringan utama (Visa, Mastercard, JCB, dll.)</li>
                      <li><strong>Tunai:</strong> Catat transaksi tunai untuk pembukuan</li>
                      <li><strong>Transfer Bank:</strong> Hasilkan dan bagikan instruksi pembayaran</li>
                      <li><strong>Metode Pembayaran Kustom:</strong> Buat opsi untuk jenis pembayaran lainnya</li>
                    </ul>

                    <p className="mt-2">Untuk terminal EDC, Anda dapat menerima semua kartu kredit dan debit utama termasuk yang menggunakan chip, kontak dekat, dan teknologi pita magnetik.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </motion.div>
      </AnimatePresence>
      </Tabs>

      <Card className="bg-blue-50 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Masih Ada Pertanyaan?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-gray-700">
            Jika Anda atau pelanggan Anda memiliki pertanyaan tambahan yang tidak tercakup di sini, silakan hubungi:
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="font-medium">Call Center Mandiri: 14000</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <span className="font-medium">Email: mandiricare@bankmandiri.co.id</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span className="font-medium">Visit any Bank Mandiri branch</span>
            </div>
          </div>
        </CardContent>
      </Card>
  </motion.div>
  </motion.div>
  );
}
