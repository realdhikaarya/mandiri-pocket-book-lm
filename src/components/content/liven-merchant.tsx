"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Download, ChevronRight, QrCode, Smartphone, Store, ClipboardList, CreditCard, CircleAlert } from "lucide-react";
import  Link  from "next/link";

export default function LivenMerchantContent() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pb-4"
      >
        <h1 className="text-3xl font-bold text-primary mb-3">Pendaftaran Livin Merchant</h1>
        <p className="text-gray-600 max-w-4xl">
          Livin' Merchant adalah solusi Point-of-Sales (POS) all-in-one untuk mengelola inventaris, penjualan, pembayaran, dan arus kas dengan mudah.
          Panduan ini menyederhanakan proses pendaftaran dan pengaturan untuk pelanggan Anda.
        </p>
      </motion.div>

      <Tabs defaultValue="individual" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="individual">Pendaftaran Individu</TabsTrigger>
          <TabsTrigger value="business">Pendaftaran Badan Usaha</TabsTrigger>
        </TabsList>

        <TabsContent value="individual" className="space-y-6">
          <Card className="bg-blue-50 border-none">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Persyaratan untuk Pendaftaran Individu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Warga Negara Indonesia dengan KTP</p>
                  <p className="text-sm text-gray-600">Minimal berusia 17 tahun</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Rekening Tabungan Mandiri</p>
                  <p className="text-sm text-gray-600">Pengguna aplikasi Livin' by Mandiri atau dapat mendaftar melalui aplikasi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Nomor Telepon Aktif</p>
                  <p className="text-sm text-gray-600">Untuk verifikasi OTP dan komunikasi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Alamat Email</p>
                  <p className="text-sm text-gray-600">Untuk verifikasi akun dan pemberitahuan</p>
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
                <CardTitle className="text-primary">Langkah-langkah Pendaftaran yang Disederhanakan</CardTitle>
                <CardDescription>
                  Proses pendaftaran membutuhkan waktu kurang dari 15 menit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                        <h3 className="font-medium text-lg mb-2">Unduh dan Pasang Aplikasi Livin Merchant</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Buka Google Play Store atau Apple App Store</li>
                          <li>Cari "Livin Merchant by Mandiri"</li>
                          <li>Unduh dan pasang aplikasi</li>
                          <li>Buka aplikasi setelah instalasi selesai</li>
                        </ul>
                        <div className="flex items-center gap-2 mt-3">
                          <Button variant="default" size="sm" className="bg-[#0c73ec]">
                            <Download className="h-4 w-4 mr-1" />
                            <Link href="https://play.google.com/store/apps/details?id=id.bmri.livinmerchant&pcampaignid=web_share">Unduh Sekarang</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm max-w-[200px]">
                        <Image
                          src="https://ext.same-assets.com/1184419458/439442366.png"
                          alt="Livin Merchant App"
                          width={200}
                          height={200}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                        <h3 className="font-medium text-lg mb-2">Buat Akun Livin Merchant</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Buka aplikasi Livin Merchant</li>
                          <li>Ketuk "Daftar" atau "Buat Akun"</li>
                          <li>Masukkan nomor ponsel Anda</li>
                          <li>Verifikasi dengan OTP yang dikirim ke ponsel Anda</li>
                          <li>Buat dan konfirmasi kata sandi yang aman</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src="https://ext.same-assets.com/2971081402/2771729354.png"
                          alt="Livin Merchant Registration"
                          width={240}
                          height={400}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">3</div>
                        <h3 className="font-medium text-lg mb-2">Lengkapi Profil & Informasi Bisnis Anda</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Masukkan informasi pribadi Anda (nama, email, dll.)</li>
                          <li>Berikan nomor rekening Mandiri Anda</li>
                          <li>Tambahkan nama dan kategori bisnis Anda</li>
                          <li>Masukkan alamat bisnis Anda</li>
                          <li>Unggah foto profil Anda (opsional)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src="https://ext.same-assets.com/2971081402/2489530157.png"
                          alt="Livin Merchant Profile Setup"
                          width={240}
                          height={400}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">4</div>
                        <h3 className="font-medium text-lg mb-2">Siapkan QRIS untuk Pembayaran</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Dari dasbor, ketuk "Pembayaran"</li>
                          <li>Pilih "Siapkan QRIS"</li>
                          <li>Ikuti petunjuk di layar</li>
                          <li>Kode QRIS Anda akan dibuat secara otomatis</li>
                          <li>Anda dapat mengunduh dan mencetak kode QRIS Anda</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src="https://ext.same-assets.com/2971081402/3063528686.jpeg"
                          alt="Livin Merchant QRIS Setup"
                          width={240}
                          height={400}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">5</div>
                        <h3 className="font-medium text-lg mb-2">Mulai Menggunakan Fitur Livin Merchant</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Tambahkan produk dan layanan Anda ke katalog</li>
                          <li>Siapkan inventaris jika diperlukan</li>
                          <li>Terima pembayaran pertama Anda</li>
                          <li>Lacak penjualan di dasbor real-time</li>
                          <li>Pendapatan diselesaikan secara otomatis ke rekening bank Anda 3 kali sehari</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src="https://ext.same-assets.com/2971081402/1881469761.png"
                          alt="Livin Merchant Dashboard"
                          width={240}
                          height={400}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="business" className="space-y-6">
          <Card className="bg-blue-50 border-none">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Persyaratan untuk Pendaftaran Badan Usaha</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Dokumentasi Bisnis</p>
                  <p className="text-sm text-gray-600">Izin usaha (NIB/SIUP), NPWP, dan akta perusahaan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Rekening Bisnis Mandiri</p>
                  <p className="text-sm text-gray-600">Harus memiliki rekening bisnis Bank Mandiri</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Perwakilan Resmi</p>
                  <p className="text-sm text-gray-600">KTP dan informasi kontak pemilik bisnis atau perwakilan resmi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Verifikasi Alamat Bisnis</p>
                  <p className="text-sm text-gray-600">Dokumentasi lokasi bisnis fisik (misalnya, foto, tagihan utilitas)</p>
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
                <CardTitle className="text-primary">Langkah-langkah Pendaftaran Badan Usaha</CardTitle>
                <CardDescription>
                  Proses yang disederhanakan untuk badan usaha
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                        <h3 className="font-medium text-lg mb-2">Hubungi Perwakilan Bisnis Mandiri</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Hubungi Mandiri Call di 14000</li>
                          <li>Minta perwakilan bisnis untuk membantu pengaturan Livin Merchant</li>
                          <li>Jadwalkan pertemuan dengan perwakilan</li>
                        </ul>
                        <div className="flex items-center gap-2 mt-3">
                          <Button variant="outline" size="sm">
                            Hubungi Sekarang
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-primary text-white p-8 rounded-lg flex flex-col items-center justify-center">
                          <CreditCard className="h-12 w-12 mb-3" />
                          <div className="text-lg font-medium text-center">Pendaftaran Bisnis</div>
                          <div className="text-sm text-center mt-1 text-primary-foreground/80">Hubungi 14000 untuk bantuan</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                        <h3 className="font-medium text-lg mb-2">Siapkan Dokumentasi Bisnis</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Kumpulkan semua dokumen bisnis yang diperlukan</li>
                          <li>Siapkan salinan digital dari semua dokumen</li>
                          <li>Pastikan rekening Mandiri bisnis Anda aktif</li>
                          <li>Siapkan ID perwakilan yang berwenang</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src="https://ext.same-assets.com/2971081402/548367777.jpeg"
                          alt="Business Documentation"
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
                        <h3 className="font-medium text-lg mb-2">Lengkapi Formulir Aplikasi</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Perwakilan akan menyediakan formulir yang diperlukan</li>
                          <li>Isi semua informasi bisnis yang diperlukan</li>
                          <li>Tanda tangani perjanjian merchant</li>
                          <li>Serahkan semua dokumentasi kepada perwakilan</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src="https://ext.same-assets.com/2971081402/1988507033.jpeg"
                          alt="Application Form"
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
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">4</div>
                        <h3 className="font-medium text-lg mb-2">Verifikasi dan Pengaturan Akun</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Tunggu Bank Mandiri memverifikasi bisnis Anda</li>
                          <li>Verifikasi biasanya membutuhkan waktu 3-5 hari kerja</li>
                          <li>Perwakilan akan menghubungi Anda setelah terverifikasi</li>
                          <li>Terima kredensial Livin Merchant Anda</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-4 border rounded-xl overflow-hidden shadow-sm bg-blue-50">
                        <div className="text-center">
                          <CircleAlert className="h-10 w-10 mx-auto text-amber-500 mb-2" />
                          <h4 className="font-medium">Waktu Pemrosesan</h4>
                          <p className="text-sm text-gray-600">3-5 hari kerja untuk verifikasi</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">5</div>
                        <h3 className="font-medium text-lg mb-2">Aktifkan dan Gunakan Livin Merchant</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Unduh aplikasi Livin Merchant</li>
                          <li>Masuk dengan kredensial yang diberikan</li>
                          <li>Ikuti wizard pengaturan untuk menyelesaikan konfigurasi</li>
                          <li>Siapkan produk dan layanan Anda</li>
                          <li>Mulai menerima pembayaran melalui QRIS atau kartu</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src="https://ext.same-assets.com/2971081402/3245944445.png"
                          alt="Livin Merchant Dashboard"
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
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Fitur & Manfaat Utama</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <QrCode className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Pembuatan QRIS Instan</p>
                <p className="text-sm text-gray-600">Terima pembayaran QRIS dari semua bank dan e-wallet secara instan</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <CreditCard className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Pembayaran Kartu via Dongle</p>
                <p className="text-sm text-gray-600">Terima pembayaran kartu debit dan kredit menggunakan card dongle</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Smartphone className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Solusi Mobile POS</p>
                <p className="text-sm text-gray-600">Ubah smartphone Anda menjadi sistem point-of-sale lengkap</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Store className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Pembuatan Toko Online</p>
                <p className="text-sm text-gray-600">Buat toko online Anda dan bagikan tautan dengan pelanggan</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <ClipboardList className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Manajemen Inventaris</p>
                <p className="text-sm text-gray-600">Lacak tingkat stok dan kelola inventaris produk</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Penyelesaian 3 Kali Sehari</p>
                <p className="text-sm text-gray-600">Pembayaran diselesaikan ke rekening bank tiga kali sehari</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Pertanyaan Umum</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Apakah ada biaya berlangganan untuk menggunakan Livin Merchant?</AccordionTrigger>
              <AccordionContent>
                Tidak, Livin Merchant sepenuhnya gratis untuk digunakan. Tidak ada biaya berlangganan bulanan atau biaya tersembunyi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Berapa lama proses pendaftaran?</AccordionTrigger>
              <AccordionContent>
                Untuk merchant individu, pendaftaran membutuhkan waktu kurang dari 15 menit. Untuk badan usaha, proses verifikasi mungkin membutuhkan waktu 3-5 hari kerja.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Bisakah saya menggunakan Livin Merchant jika tidak memiliki rekening Mandiri?</AccordionTrigger>
              <AccordionContent>
                Tidak, Anda memerlukan rekening tabungan Mandiri untuk menggunakan Livin Merchant. Namun, Anda dapat dengan mudah membuka rekening Mandiri melalui aplikasi Livin' by Mandiri.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Bagaimana pembayaran diselesaikan ke rekening saya?</AccordionTrigger>
              <AccordionContent>
                Pembayaran secara otomatis diselesaikan ke rekening Mandiri Anda tiga kali sehari - di pagi, siang, dan malam hari.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Bisakah saya mengelola beberapa outlet atau bisnis?</AccordionTrigger>
              <AccordionContent>
                Ya, Anda dapat mengelola beberapa outlet atau bisnis dari satu akun Livin Merchant. Ini memudahkan pemilik bisnis dengan beberapa lokasi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
