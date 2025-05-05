import Link from "next/link"
import { XCircle, AlertTriangle, RefreshCw, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm relative">
        <Card className="w-full border-none shadow-xl overflow-hidden pt-16">
          {/* Top decorative element */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-red-400 to-rose-500 rounded-t-xl" />

          {/* Failed icon with glow effect */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg w-24 h-24 flex items-center justify-center z-10 ring-8 ring-white/50">
            <XCircle className="h-14 w-14 text-red-500" />
          </div>

          <CardHeader className="pt-24 pb-4 text-center relative z-0">
            <CardTitle className="text-2xl font-bold text-gray-800">Payment Failed</CardTitle>
          </CardHeader>

          <CardContent className="text-center space-y-4 pb-6 px-6">
            <p className="text-gray-600">Your payment could not be processed at this time</p>

            {/* Error details card */}
            <div className="bg-red-50 rounded-xl p-5 mt-2 shadow-inner border border-red-100">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700">Possible reasons:</p>
                  <ul className="text-sm text-gray-600 list-disc pl-5 mt-1 space-y-1">
                    <li>Insufficient funds</li>
                    <li>Card information is incorrect</li>
                    <li>Transaction was declined by your bank</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between mt-4 pt-3 border-t border-red-200">
                <span className="text-sm font-medium text-gray-600">Order Reference:</span>
                <span className="text-sm font-bold text-gray-800">#ORD-2023-1234</span>
              </div>
            </div>

            {/* Additional info */}
            <div className="text-sm text-gray-500 mt-2">No charges have been made to your account</div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pb-8 px-6">
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-lg shadow-md transition-colors"
              asChild
            >
              <Link href="/checkout" className="flex items-center justify-center">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full border-red-200 text-red-700 hover:bg-red-50 py-5 rounded-lg transition-colors"
              asChild
            >
              <Link href="/contact-support" className="flex items-center justify-center">
                <HelpCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </CardFooter>

          {/* Bottom decorative dots */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
          </div>
        </Card>
      </div>
    </div>
  )
}
