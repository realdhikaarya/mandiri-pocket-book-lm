"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Download, ChevronRight, QrCode, Smartphone, Store, ClipboardList, CreditCard, CircleAlert } from "lucide-react";

export default function LivenMerchantContent() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pb-4"
      >
        <h1 className="text-3xl font-bold text-primary mb-3">Livin Merchant Registration</h1>
        <p className="text-gray-600 max-w-4xl">
          Livin' Merchant is an all-in-one Point-of-Sales (POS) solution to easily manage inventory, sales, payment, and cash flow.
          This guide simplifies the registration and setup process for your customers.
        </p>
      </motion.div>

      <Tabs defaultValue="individual" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="individual">Individual Registration</TabsTrigger>
          <TabsTrigger value="business">Business Entity Registration</TabsTrigger>
        </TabsList>

        <TabsContent value="individual" className="space-y-6">
          <Card className="bg-blue-50 border-none">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Requirements for Individual Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Indonesian Citizen with KTP</p>
                  <p className="text-sm text-gray-600">Must be at least 17 years old</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Mandiri Savings Account</p>
                  <p className="text-sm text-gray-600">Livin' by Mandiri app user or can register through the app</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Active Mobile Number</p>
                  <p className="text-sm text-gray-600">For OTP verification and communication</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Email Address</p>
                  <p className="text-sm text-gray-600">For account verification and notices</p>
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
                <CardTitle className="text-primary">Simplified Registration Steps</CardTitle>
                <CardDescription>
                  The registration process takes less than 15 minutes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                        <h3 className="font-medium text-lg mb-2">Download and Install the Livin Merchant App</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Go to Google Play Store or Apple App Store</li>
                          <li>Search for "Livin Merchant by Mandiri"</li>
                          <li>Download and install the application</li>
                          <li>Open the app after installation is complete</li>
                        </ul>
                        <div className="flex items-center gap-2 mt-3">
                          <Button variant="default" size="sm" className="bg-[#0c73ec]">
                            <Download className="h-4 w-4 mr-1" />
                            Download Now
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
                        <h3 className="font-medium text-lg mb-2">Create a Livin Merchant Account</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Open the Livin Merchant app</li>
                          <li>Tap on "Register" or "Create Account"</li>
                          <li>Enter your mobile number</li>
                          <li>Verify with the OTP sent to your phone</li>
                          <li>Create and confirm a secure password</li>
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
                        <h3 className="font-medium text-lg mb-2">Complete Your Profile & Business Information</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Enter your personal information (name, email, etc.)</li>
                          <li>Provide your Mandiri account number</li>
                          <li>Add your business name and category</li>
                          <li>Enter your business address</li>
                          <li>Upload your profile photo (optional)</li>
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
                        <h3 className="font-medium text-lg mb-2">Set Up QRIS for Payments</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>From the dashboard, tap "Payments"</li>
                          <li>Select "Set up QRIS"</li>
                          <li>Follow the on-screen instructions</li>
                          <li>Your QRIS code will be generated automatically</li>
                          <li>You can download and print your QRIS code</li>
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
                        <h3 className="font-medium text-lg mb-2">Start Using Livin Merchant Features</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Add your products and services to the catalog</li>
                          <li>Set up inventory if needed</li>
                          <li>Accept your first payment</li>
                          <li>Track sales in real-time dashboard</li>
                          <li>Revenues are automatically settled to your bank account 3 times daily</li>
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
              <CardTitle className="text-primary text-lg">Requirements for Business Entity Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Business Documentation</p>
                  <p className="text-sm text-gray-600">Business license (NIB/SIUP), NPWP, and company deed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Mandiri Business Account</p>
                  <p className="text-sm text-gray-600">Must have a Bank Mandiri business account</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Authorized Representative</p>
                  <p className="text-sm text-gray-600">KTP and contact information of the business owner or authorized representative</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Business Address Verification</p>
                  <p className="text-sm text-gray-600">Physical business location documentation (e.g., photos, utility bills)</p>
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
                <CardTitle className="text-primary">Business Entity Registration Steps</CardTitle>
                <CardDescription>
                  Simplified process for business entities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                        <h3 className="font-medium text-lg mb-2">Contact a Mandiri Business Representative</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Call Mandiri Call at 14000</li>
                          <li>Request for a business representative to assist with Livin Merchant setup</li>
                          <li>Schedule a meeting with the representative</li>
                        </ul>
                        <div className="flex items-center gap-2 mt-3">
                          <Button variant="outline" size="sm">
                            Contact Now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-1 border rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-primary text-white p-8 rounded-lg flex flex-col items-center justify-center">
                          <CreditCard className="h-12 w-12 mb-3" />
                          <div className="text-lg font-medium text-center">Business Registration</div>
                          <div className="text-sm text-center mt-1 text-primary-foreground/80">Contact 14000 for assistance</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                        <h3 className="font-medium text-lg mb-2">Prepare Business Documentation</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Gather all required business documents</li>
                          <li>Prepare digital copies of all documents</li>
                          <li>Ensure your business Mandiri account is active</li>
                          <li>Have the authorized representative's ID ready</li>
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
                        <h3 className="font-medium text-lg mb-2">Complete the Application Form</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>The representative will provide the necessary forms</li>
                          <li>Fill out all required business information</li>
                          <li>Sign the merchant agreement</li>
                          <li>Submit all documentation to the representative</li>
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
                        <h3 className="font-medium text-lg mb-2">Account Verification and Setup</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Wait for Bank Mandiri to verify your business</li>
                          <li>Verification typically takes 3-5 business days</li>
                          <li>The representative will contact you once verified</li>
                          <li>Receive your Livin Merchant credentials</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center items-start">
                      <div className="p-4 border rounded-xl overflow-hidden shadow-sm bg-blue-50">
                        <div className="text-center">
                          <CircleAlert className="h-10 w-10 mx-auto text-amber-500 mb-2" />
                          <h4 className="font-medium">Processing Time</h4>
                          <p className="text-sm text-gray-600">3-5 business days for verification</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 relative">
                    <div className="md:w-7/12">
                      <div className="bg-blue-50 p-4 rounded-lg relative">
                        <div className="absolute -top-3 -left-3 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">5</div>
                        <h3 className="font-medium text-lg mb-2">Activate and Use Livin Merchant</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                          <li>Download the Livin Merchant app</li>
                          <li>Log in with provided credentials</li>
                          <li>Follow the setup wizard to complete configuration</li>
                          <li>Set up your products and services</li>
                          <li>Begin accepting payments via QRIS or card</li>
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
          <CardTitle className="text-primary">Key Features & Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <QrCode className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Instant QRIS Creation</p>
                <p className="text-sm text-gray-600">Accept QRIS payments from all banks and e-wallets instantly</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <CreditCard className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Card Payment via Dongle</p>
                <p className="text-sm text-gray-600">Accept debit and credit card payments using the card dongle</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Smartphone className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Mobile POS Solution</p>
                <p className="text-sm text-gray-600">Turn your smartphone into a complete point-of-sale system</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Store className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Online Store Creation</p>
                <p className="text-sm text-gray-600">Create your online store and share the link with customers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <ClipboardList className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">Inventory Management</p>
                <p className="text-sm text-gray-600">Track stock levels and manage product inventory</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="h-10 w-10 text-primary" />
              <div>
                <p className="font-medium">3 Times Daily Settlement</p>
                <p className="text-sm text-gray-600">Payments settled to bank account three times daily</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Common Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is there a subscription fee for using Livin Merchant?</AccordionTrigger>
              <AccordionContent>
                No, Livin Merchant is completely free to use. There are no monthly subscriptions or hidden charges.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does the registration process take?</AccordionTrigger>
              <AccordionContent>
                For individual merchants, registration takes less than 15 minutes. For business entities, the verification process may take 3-5 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I use Livin Merchant if I don't have a Mandiri account?</AccordionTrigger>
              <AccordionContent>
                No, you need a Mandiri savings account to use Livin Merchant. However, you can easily open a Mandiri account through the Livin' by Mandiri app.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How are payments settled to my account?</AccordionTrigger>
              <AccordionContent>
                Payments are automatically settled to your Mandiri account three times a day - in the morning, afternoon, and evening.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I manage multiple outlets or businesses?</AccordionTrigger>
              <AccordionContent>
                Yes, you can manage multiple outlets or businesses from a single Livin Merchant account. This makes it convenient for business owners with multiple locations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
