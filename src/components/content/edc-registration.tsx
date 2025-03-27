"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Download, ChevronRight, CreditCard, Store, ClipboardList, CircleAlert, Smartphone, Hash, Building, Phone } from "lucide-react";

export default function EDCRegistrationContent() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pb-4"
      >
        <h1 className="text-3xl font-bold text-primary mb-3">Panduan Pendaftaran EDC</h1>
        <p className="text-gray-600 max-w-4xl">
          Terminal Electronic Data Capture (EDC) memungkinkan bisnis untuk menerima pembayaran kartu dengan aman.
          Panduan ini menyederhanakan proses pendaftaran EDC untuk nasabah Bank Mandiri.
        </p>
      </motion.div>

      <Card className="bg-blue-50 border-none">
        <CardHeader>
          <CardTitle className="text-primary text-lg">Jenis Terminal EDC</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary rounded-full p-2">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-medium text-primary">Terminal EDC Standar</h3>
              </div>
              <div className="rounded-lg overflow-hidden border mb-3">
                <Image
                  src="https://ext.same-assets.com/2971081402/3081523439.png"
                  alt="Terminal EDC Standar"
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Model meja untuk lokasi tetap</li>
                <li>Membutuhkan sumber listrik dan koneksi internet</li>
                <li>Ideal untuk toko retail dan restoran</li>
                <li>Menerima semua jenis kartu termasuk chip, contactless, dan pita magnetik</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary rounded-full p-2">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-medium text-primary">EDC Mobile (MPOS)</h3>
              </div>
              <div className="rounded-lg overflow-hidden border mb-3">
                <Image
                  src="https://ext.same-assets.com/2971081402/1881469761.png"
                  alt="Terminal EDC Mobile"
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Solusi portabel dan nirkabel</li>
                <li>Bekerja dengan kartu SIM atau koneksi WiFi</li>
                <li>Ideal untuk bisnis yang bergerak</li>
                <li>Ringan dan bertenaga baterai</li>
                <li>Juga tersedia sebagai dongle kartu dengan aplikasi Livin Merchant</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Persyaratan untuk Pendaftaran EDC</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Building className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Dokumen Bisnis</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Sertifikat Pendaftaran Usaha (NIB/SIUP)</li>
                <li>NPWP - bisnis dan pribadi</li>
                <li>KTP pemilik bisnis</li>
                <li>Akta pendirian (untuk korporasi/PT)</li>
                <li>Izin usaha yang relevan dengan industri Anda</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Persyaratan Rekening Bank</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Rekening bisnis Bank Mandiri yang aktif</li>
                <li>Rekening harus atas nama bisnis</li>
                <li>Persyaratan saldo minimum rekening</li>
                <li>Rekening koran terbaru (3 bulan terakhir)</li>
                <li>Rekening harus dalam kondisi baik</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Store className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Persyaratan Lokasi Bisnis</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Bukti alamat bisnis (tagihan utilitas)</li>
                <li>Foto tempat usaha (interior/eksterior)</li>
                <li>Perjanjian sewa (jika menyewa)</li>
                <li>Bisnis harus beroperasi minimal 6 bulan</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Persyaratan Lainnya</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Nomor kontak aktif (terdaftar atas nama pemilik)</li>
                <li>Alamat email untuk notifikasi</li>
                <li>Proyeksi penjualan atau volume transaksi masa lalu</li>
                <li>Koneksi internet yang kuat di lokasi</li>
                <li>Sumber listrik untuk terminal EDC</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Proses Pendaftaran EDC yang Disederhanakan</CardTitle>
            <CardDescription>
              Ikuti 5 langkah sederhana ini untuk mendaftar terminal EDC Bank Mandiri
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="md:w-7/12">
                  <div className="bg-blue-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                    <h3 className="font-medium text-lg mb-2">Kontak Awal dengan Mandiri</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Kunjungi cabang Bank Mandiri terdekat atau hubungi 14000</li>
                      <li>Minta untuk berbicara dengan perwakilan Merchant Acquiring</li>
                      <li>Jelaskan kebutuhan bisnis Anda dan minta terminal EDC</li>
                      <li>Berikan informasi bisnis dasar</li>
                    </ul>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="default" size="sm" className="bg-[#0c73ec]">
                        Hubungi Bank Mandiri
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-5/12 flex justify-center items-start">
                  <div className="p-4 border rounded-xl overflow-hidden shadow-sm">
                    <div className="text-center">
                      <Building className="h-12 w-12 mx-auto text-primary mb-2" />
                      <h4 className="font-medium">Opsi Kontak</h4>
                      <div className="text-sm text-gray-600 mt-2 space-y-2">
                        <p className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>Hubungi 14000</span>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                          <Store className="h-4 w-4 text-primary" />
                          <span>Kunjungi cabang Mandiri mana saja</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="md:w-7/12">
                  <div className="bg-blue-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                    <h3 className="font-medium text-lg mb-2">Lengkapi Formulir Aplikasi</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Isi Formulir Aplikasi Merchant EDC</li>
                      <li>Berikan semua dokumentasi bisnis yang diperlukan</li>
                      <li>Tanda tangani perjanjian merchant</li>
                      <li>Serahkan aplikasi yang sudah dilengkapi kepada perwakilan</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-5/12 flex justify-center items-start">
                  <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://ext.same-assets.com/2971081402/1988507033.jpeg"
                      alt="Formulir Aplikasi"
                      width={240}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="md:w-7/12">
                  <div className="bg-blue-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">3</div>
                    <h3 className="font-medium text-lg mb-2">Peninjauan dan Verifikasi Aplikasi</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Bank Mandiri meninjau aplikasi Anda</li>
                      <li>Perwakilan mungkin mengunjungi lokasi bisnis Anda</li>
                      <li>Verifikasi kredensial dan dokumen bisnis</li>
                      <li>Proses persetujuan biasanya membutuhkan waktu 5-7 hari kerja</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-5/12 flex justify-center items-start">
                  <div className="p-4 border rounded-xl overflow-hidden shadow-sm bg-blue-50">
                    <div className="text-center">
                      <CircleAlert className="h-10 w-10 mx-auto text-amber-500 mb-2" />
                      <h4 className="font-medium">Waktu Pemrosesan</h4>
                      <p className="text-sm text-gray-600">5-7 hari kerja untuk verifikasi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="md:w-7/12">
                  <div className="bg-blue-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">4</div>
                    <h3 className="font-medium text-lg mb-2">Instalasi Terminal EDC</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Setelah disetujui, Bank Mandiri akan menghubungi Anda untuk menjadwalkan instalasi</li>
                      <li>Teknisi akan mengunjungi lokasi bisnis Anda</li>
                      <li>Pengaturan dan konfigurasi terminal EDC</li>
                      <li>Pengujian transaksi untuk memastikan berfungsi dengan baik</li>
                      <li>Pelatihan dasar tentang penggunaan dan pemeliharaan terminal</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-5/12 flex justify-center items-start">
                  <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://ext.same-assets.com/2971081402/3081523439.png"
                      alt="Instalasi EDC"
                      width={240}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="md:w-7/12">
                  <div className="bg-blue-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">5</div>
                    <h3 className="font-medium text-lg mb-2">Aktivasi & Mulai Menerima Pembayaran</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Akun merchant Anda diaktifkan</li>
                      <li>Mulai menerima pembayaran kartu dari pelanggan</li>
                      <li>Menerima penyelesaian transaksi ke rekening Mandiri Anda</li>
                      <li>Akses laporan merchant dan riwayat transaksi</li>
                      <li>Dukungan pelanggan khusus untuk bantuan yang diperlukan</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-5/12 flex justify-center items-start">
                  <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://ext.same-assets.com/2971081402/3063528686.jpeg"
                      alt="Pembayaran Kartu"
                      width={240}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Manfaat EDC Bank Mandiri</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Penyelesaian Cepat</p>
                <p className="text-sm text-gray-600">Terima dana di rekening Mandiri Anda dalam 1 hari kerja</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Menerima Semua Kartu</p>
                <p className="text-sm text-gray-600">Visa, Mastercard, JCB, American Express, dan kartu debit lokal</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Dukungan Merchant 24/7</p>
                <p className="text-sm text-gray-600">Saluran bantuan khusus untuk masalah terminal dan bantuan transaksi</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Pelaporan Komprehensif</p>
                <p className="text-sm text-gray-600">Laporan transaksi terperinci tersedia secara online dan dalam aplikasi</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Keamanan Ditingkatkan</p>
                <p className="text-sm text-gray-600">Teknologi chip EMV dan langkah-langkah perlindungan penipuan</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Integrasi dengan Livin Merchant</p>
                <p className="text-sm text-gray-600">Koneksi mulus dengan aplikasi Livin Merchant untuk manajemen bisnis terpadu</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Pertanyaan yang Sering Diajukan</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Biaya apa saja yang terkait dengan terminal EDC?</AccordionTrigger>
              <AccordionContent>
                Terminal EDC Bank Mandiri biasanya memiliki struktur biaya sebagai berikut:
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Merchant Discount Rate (MDR): 0,5% hingga 2,5% per transaksi (bervariasi berdasarkan jenis kartu)</li>
                  <li>Biaya sewa bulanan (dapat dibebaskan berdasarkan volume transaksi)</li>
                  <li>Biaya instalasi satu kali</li>
                  <li>Penggantian gulungan kertas</li>
                </ul>
                Biaya pasti akan dijelaskan oleh perwakilan Mandiri Anda selama proses aplikasi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Berapa lama waktu yang dibutuhkan untuk memproses pengembalian dana?</AccordionTrigger>
              <AccordionContent>
                Pengembalian dana melalui terminal EDC Bank Mandiri biasanya membutuhkan waktu 7-14 hari kerja untuk tercermin di rekening pelanggan. Prosesnya memerlukan detail transaksi asli dan kartu pelanggan harus ada.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Apa yang terjadi jika terminal EDC mengalami malfungsi?</AccordionTrigger>
              <AccordionContent>
                Jika terminal EDC Anda mengalami malfungsi, segera hubungi saluran dukungan merchant Bank Mandiri di 14000. Perwakilan teknis akan membimbing Anda melalui pemecahan masalah atau mengatur teknisi untuk mengunjungi lokasi Anda. Dalam kebanyakan kasus, terminal pengganti dapat disediakan dalam waktu 1-2 hari kerja.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Bisakah saya memiliki beberapa terminal EDC untuk bisnis saya?</AccordionTrigger>
              <AccordionContent>
                Ya, Bank Mandiri memungkinkan bisnis memiliki beberapa terminal EDC di berbagai lokasi atau bahkan dalam lokasi yang sama jika volume transaksi membenarkannya. Setiap terminal akan terhubung ke akun merchant yang sama untuk pelaporan dan penyelesaian terpusat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Apa perbedaan antara terminal EDC dan Livin Merchant?</AccordionTrigger>
              <AccordionContent>
                <p>Terminal EDC adalah perangkat keras khusus yang dirancang khusus untuk memproses transaksi kartu, sementara Livin Merchant adalah aplikasi mobile yang berfungsi sebagai sistem point-of-sale lengkap.</p>
                <p className="mt-2">Anda dapat menggunakan keduanya bersama-sama: terminal EDC untuk pemrosesan kartu dan Livin Merchant untuk manajemen inventaris, pelacakan penjualan, dan pembayaran QRIS. Bank Mandiri menawarkan integrasi antara kedua sistem untuk pengalaman manajemen bisnis yang mulus.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
