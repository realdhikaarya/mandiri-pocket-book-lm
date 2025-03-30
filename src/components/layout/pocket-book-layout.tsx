"use client";

import { useState, useEffect } from "react";
import MandiriLogo from "@/components/common/mandiri-logo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Store,
  CreditCard,
  HelpCircle,
  Download,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import { t } from "@/lib/translations";

import LivenMerchantContent from "@/components/content/liven-merchant";
import EDCRegistrationContent from "@/components/content/edc-registration";
import FAQContent from "@/components/content/faq";
import WelcomeContent from "@/components/content/welcome";

const SIDEBAR_ITEMS = [
  {
    title: t("Home"),
    icon: Home,
    key: "home"
  },
  {
    title: t("Livin Merchant"),
    icon: Store,
    key: "livin-merchant"
  },
  {
    title: t("EDC Registration"),
    icon: CreditCard,
    key: "edc-registration"
  },
  {
    title: t("FAQ"),
    icon: HelpCircle,
    key: "faq"
  }
];

const AssistanceCard = () => (
  <Card className="bg-blue-600 border-none p-4 text-white">
    <div className="flex flex-col gap-2">
      <div className="font-medium">{t("Need assistance?")}</div>
      <div className="text-sm opacity-90">{t("Contact Mandiri Call 14000")}</div>
      <Button variant="outline" className="mt-2 w-full text-black border-white hover:bg-white/10" asChild>
        <Link href="http://wa.me/628118414000" target="_blank" rel="noopener noreferrer">
          <HelpCircle className="mr-2 h-4 w-4" />
          {t("Get Help")}
        </Link>
      </Button>
    </div>
  </Card>
);

export default function PocketBookLayout() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <WelcomeContent />;
      case "livin-merchant":
        return <LivenMerchantContent />;
      case "edc-registration":
        return <EDCRegistrationContent />;
      case "faq":
        return <FAQContent />;
      default:
        return <WelcomeContent />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-72 bg-primary text-white border-r fixed inset-y-0 left-0 z-50">
        <div className="flex items-center gap-2 p-4">
          <MandiriLogo className="h-8 w-auto" />
          <span className="font-semibold">{t("Pocket Book")}</span>
        </div>

        <div className="space-y-1 py-4 px-3">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors ${
                activeTab === item.key ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto p-4">
          <Card className="bg-blue-600 border-none p-4 text-white">
            <div className="flex flex-col gap-2">
              <div className="font-medium">{t("Need assistance?")}</div>
              <div className="text-sm opacity-90">{t("Contact Mandiri Call 14000")}</div>
              <Button variant="outline" className="mt-2 w-full text-black border-white hover:bg-white/10" asChild>
                <Link href="http://wa.me/628118414000" target="_blank" rel="noopener noreferrer">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  {t("Get Help")}
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 lg:pl-72 relative">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="lg:hidden">
            <MandiriLogo className="h-8 w-auto" />
          </div>

          <h1 className="text-xl font-semibold truncate">
            {t("Bank Mandiri Sales Pocket Book")}
          </h1>

          <div className="ml-auto hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-primary flex items-center gap-1" asChild>
              <Link href="https://play.google.com/store/apps/details?id=id.bmri.livinmerchant&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                <span>{t("Download")}</span>
              </Link>
            </Button>
          </div>
        </header>

        {/* Mobile Menu - Animated overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 ${
            menuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
          }`} 
          onClick={() => setMenuOpen(false)}
        >
          {/* This is just the backdrop */}
        </div>
        
        {/* Mobile Sidebar - Animated */}
        <div 
          className={`lg:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-3/4 max-w-xs bg-primary text-white z-40 shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-3 flex flex-col h-full">
            <div className="flex-1">
              {SIDEBAR_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setActiveTab(item.key);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-3 py-3 rounded-md transition-colors mb-1 ${
                    activeTab === item.key ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </button>
              ))}
              <div className="mt-auto pt-4 pb-6 px-3">
              <AssistanceCard />
            </div>
            </div>

            <div className="mt-auto pb-4">
              <Card className="bg-blue-600 border-none p-4 text-white">
                <div className="flex flex-col gap-2">
                  <div className="font-medium">{t("Need assistance?")}</div>
                  <div className="text-sm opacity-90">{t("Contact Mandiri Call 14000")}</div>
                  <Button variant="outline" className="mt-2 w-full text-white border-white hover:bg-white/10" asChild>
                    <Link href="http://wa.me/628118414000" target="_blank" rel="noopener noreferrer">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      {t("Get Help")}
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <main className="flex-1 p-4 md:p-6 overflow-x-hidden overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}