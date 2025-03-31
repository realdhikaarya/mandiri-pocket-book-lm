"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Store, CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";
import { t } from "@/lib/translations";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function WelcomeContent() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="space-y-8 pb-32 md:pb-16 min-h-screen"> {/* Increased bottom padding and set min-height */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center pb-4"
      >
        <h1 className="text-3xl font-bold text-primary mb-2">{t("Welcome to Bank Mandiri Sales Pocket Book")}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t("Your comprehensive guide to help customers with Livin Merchant and EDC registration. This pocket book simplifies the process for easier sales negotiations.")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                {t("Pendaftaran Livin Merchant")}
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                {t("All-in-one Point-of-Sales (POS) solution")}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="aspect-video relative mb-4 rounded-md overflow-hidden border">
                <Image
                    src="/images/livin-merchant-app.png"
                    alt="EDC Registration"
                    fill
                    className="h-full w-full object-cover"
                    />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t("Guide your customers through Livin Merchant registration and setup with our simplified step-by-step process.")}
              </p>
              <Button variant="outline" className="w-full group" asChild>
                <Link href="https://www.bankmandiri.co.id/livin-merchant/cara-daftar/belum-punya-qris-atau-edc" target="_blank" rel="noopener noreferrer">
                  <span>{t("View Guide")}</span>
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                {t("EDC Registration")}
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                {t("Electronic Data Capture setup for businesses")}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="aspect-video relative mb-4 rounded-md overflow-hidden border">
              <Image
                  src="/images/livin-merchant.jpg"
                  alt="EDC Registration"
                  fill
                  className="h-full w-full object-cover"
                  />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t("Help businesses set up Bank Mandiri EDC terminals with a streamlined registration process that's easy to follow.")}
              </p>
              <Button variant="outline" className="w-full group" asChild>
                <Link href="https://www.bankmandiri.co.id/livin-merchant/cara-daftar/cara-daftar-bagi-badan-usaha-edc-bank-mandiri" target="_blank" rel="noopener noreferrer">
                  <span>{t("View Guide")}</span>
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        id="how-to-use" /* Added ID for easier targeting */
        className="relative" /* Added relative positioning */
      >
        <Card className="bg-blue-50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">{t("How to use this Pocket Book")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="flex items-start gap-2">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">1</span>
              <span>{t("Navigate using the sidebar to find the specific guide you need")}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">2</span>
              <span>{t("Follow the step-by-step instructions with your customer")}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">3</span>
              <span>{t("Use the FAQ section for common questions and troubleshooting")}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">4</span>
              <span>{t("Access quick reference guides for on-the-spot assistance")}</span>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}