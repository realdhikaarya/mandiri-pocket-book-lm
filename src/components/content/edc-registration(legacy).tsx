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
        <h1 className="text-3xl font-bold text-primary mb-3">EDC Registration Guide</h1>
        <p className="text-gray-600 max-w-4xl">
          Electronic Data Capture (EDC) terminals allow businesses to accept card payments securely.
          This guide simplifies the EDC registration process for Bank Mandiri customers.
        </p>
      </motion.div>

      <Card className="bg-blue-50 border-none">
        <CardHeader>
          <CardTitle className="text-primary text-lg">EDC Terminal Types</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary rounded-full p-2">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-medium text-primary">Standard EDC Terminal</h3>
              </div>
              <div className="rounded-lg overflow-hidden border mb-3">
                <Image
                  src="https://ext.same-assets.com/2971081402/3081523439.png"
                  alt="Standard EDC Terminal"
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Countertop model for fixed locations</li>
                <li>Requires power outlet and internet connection</li>
                <li>Ideal for retail stores and restaurants</li>
                <li>Accepts all types of cards including chip, contactless, and magnetic stripe</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary rounded-full p-2">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-medium text-primary">Mobile EDC (MPOS)</h3>
              </div>
              <div className="rounded-lg overflow-hidden border mb-3">
                <Image
                  src="https://ext.same-assets.com/2971081402/1881469761.png"
                  alt="Mobile EDC Terminal"
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Portable and wireless solution</li>
                <li>Works with SIM card or WiFi connection</li>
                <li>Ideal for businesses on the go</li>
                <li>Lightweight and battery-powered</li>
                <li>Also available as a card dongle with Livin Merchant app</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Requirements for EDC Registration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Building className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Business Documents</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Business Registration Certificate (NIB/SIUP)</li>
                <li>Tax ID (NPWP) - business and personal</li>
                <li>Business owner's ID card (KTP)</li>
                <li>Deed of establishment (for corporations/PT)</li>
                <li>Business license relevant to your industry</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Bank Account Requirements</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Active Bank Mandiri business account</li>
                <li>Account must be under the business name</li>
                <li>Minimum account balance requirements</li>
                <li>Recent bank statements (last 3 months)</li>
                <li>Account must be in good standing</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Store className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Business Location Requirements</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Proof of business address (utility bills)</li>
                <li>Photos of business premises (interior/exterior)</li>
                <li>Lease agreement (if renting)</li>
                <li>Business must be operational for at least 6 months</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Other Requirements</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                <li>Active contact number (registered under owner)</li>
                <li>Email address for notifications</li>
                <li>Sales projections or past transaction volumes</li>
                <li>A strong internet connection at the premises</li>
                <li>Power supply for the EDC terminal</li>
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
            <CardTitle className="text-primary">Simplified EDC Registration Process</CardTitle>
            <CardDescription>
              Follow these 5 simple steps to register for a Bank Mandiri EDC terminal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="md:w-7/12">
                  <div className="bg-blue-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                    <h3 className="font-medium text-lg mb-2">Initial Contact with Mandiri</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Visit nearest Bank Mandiri branch or call 14000</li>
                      <li>Request to speak with a Merchant Acquiring representative</li>
                      <li>Explain your business needs and request EDC terminal</li>
                      <li>Provide basic business information</li>
                    </ul>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="default" size="sm" className="bg-[#0c73ec]">
                        Contact Bank Mandiri
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-5/12 flex justify-center items-start">
                  <div className="p-4 border rounded-xl overflow-hidden shadow-sm">
                    <div className="text-center">
                      <Building className="h-12 w-12 mx-auto text-primary mb-2" />
                      <h4 className="font-medium">Contact Options</h4>
                      <div className="text-sm text-gray-600 mt-2 space-y-2">
                        <p className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>Call 14000</span>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                          <Store className="h-4 w-4 text-primary" />
                          <span>Visit any Mandiri branch</span>
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
                    <h3 className="font-medium text-lg mb-2">Complete Application Forms</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Fill out the EDC Merchant Application Form</li>
                      <li>Provide all required business documentation</li>
                      <li>Sign the merchant agreement</li>
                      <li>Submit the completed application to the representative</li>
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
                    <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">3</div>
                    <h3 className="font-medium text-lg mb-2">Application Review and Verification</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Bank Mandiri reviews your application</li>
                      <li>A representative may visit your business location</li>
                      <li>Verification of business credentials and documents</li>
                      <li>Approval process typically takes 5-7 business days</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-5/12 flex justify-center items-start">
                  <div className="p-4 border rounded-xl overflow-hidden shadow-sm bg-blue-50">
                    <div className="text-center">
                      <CircleAlert className="h-10 w-10 mx-auto text-amber-500 mb-2" />
                      <h4 className="font-medium">Processing Time</h4>
                      <p className="text-sm text-gray-600">5-7 business days for verification</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="md:w-7/12">
                  <div className="bg-blue-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">4</div>
                    <h3 className="font-medium text-lg mb-2">EDC Terminal Installation</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Once approved, Bank Mandiri will contact you to schedule installation</li>
                      <li>A technician will visit your business location</li>
                      <li>EDC terminal setup and configuration</li>
                      <li>Testing of transactions to ensure proper functioning</li>
                      <li>Basic training on terminal usage and maintenance</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-5/12 flex justify-center items-start">
                  <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://ext.same-assets.com/2971081402/3081523439.png"
                      alt="EDC Installation"
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
                    <h3 className="font-medium text-lg mb-2">Activation & Start Accepting Payments</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                      <li>Your merchant account is activated</li>
                      <li>Begin accepting card payments from customers</li>
                      <li>Receive settlement of transactions to your Mandiri account</li>
                      <li>Access merchant reports and transaction history</li>
                      <li>Dedicated customer support for any assistance needed</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-5/12 flex justify-center items-start">
                  <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://ext.same-assets.com/2971081402/3063528686.jpeg"
                      alt="Card Payment"
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
          <CardTitle className="text-primary">Bank Mandiri EDC Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Fast Settlement</p>
                <p className="text-sm text-gray-600">Receive funds in your Mandiri account within 1 business day</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Accepts All Cards</p>
                <p className="text-sm text-gray-600">Visa, Mastercard, JCB, American Express, and local debit cards</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">24/7 Merchant Support</p>
                <p className="text-sm text-gray-600">Dedicated helpline for terminal issues and transaction assistance</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Comprehensive Reporting</p>
                <p className="text-sm text-gray-600">Detailed transaction reports available online and in-app</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Enhanced Security</p>
                <p className="text-sm text-gray-600">EMV chip technology and fraud protection measures</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-green-600" />
              <div>
                <p className="font-medium">Integration with Livin Merchant</p>
                <p className="text-sm text-gray-600">Seamless connection with the Livin Merchant app for unified business management</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What fees are associated with the EDC terminal?</AccordionTrigger>
              <AccordionContent>
                Bank Mandiri EDC terminals typically have the following fee structure:
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Merchant Discount Rate (MDR): 0.5% to 2.5% per transaction (varies by card type)</li>
                  <li>Monthly rental fee (may be waived based on transaction volume)</li>
                  <li>One-time installation fee</li>
                  <li>Paper roll replacements</li>
                </ul>
                Exact fees will be explained by your Mandiri representative during application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does it take to process a refund?</AccordionTrigger>
              <AccordionContent>
                Refunds through Bank Mandiri EDC terminals typically take 7-14 business days to reflect in the customer's account. The process requires the original transaction details and the customer's card to be present.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What happens if the EDC terminal malfunctions?</AccordionTrigger>
              <AccordionContent>
                If your EDC terminal malfunctions, contact Bank Mandiri's merchant support line immediately at 14000. A technical representative will either guide you through troubleshooting or arrange for a technician to visit your location. In most cases, replacement terminals can be provided within 1-2 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I have multiple EDC terminals for my business?</AccordionTrigger>
              <AccordionContent>
                Yes, Bank Mandiri allows businesses to have multiple EDC terminals across different locations or even within the same location if transaction volume justifies it. Each terminal will be linked to the same merchant account for centralized reporting and settlement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What's the difference between EDC terminals and Livin Merchant?</AccordionTrigger>
              <AccordionContent>
                <p>EDC terminals are dedicated hardware devices specifically designed to process card transactions, while Livin Merchant is a mobile app that functions as a complete point-of-sale system.</p>
                <p className="mt-2">You can use both together: EDC terminals for card processing and Livin Merchant for inventory management, sales tracking, and QRIS payments. Bank Mandiri offers integration between the two systems for a seamless business management experience.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
