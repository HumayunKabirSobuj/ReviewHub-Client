import Link from "next/link"
import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm relative">
        <Card className="w-full border-none shadow-xl overflow-hidden pt-16">
          {/* Top decorative element */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-t-xl" />

          {/* Success icon with glow effect - repositioned */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg w-24 h-24 flex items-center justify-center z-10 ring-8 ring-white/50">
            <CheckCircle2 className="h-14 w-14 text-green-500" />
          </div>

          <CardHeader className="pt-24 pb-4 text-center relative z-0">
            <CardTitle className="text-2xl font-bold text-gray-800">Payment Successful!</CardTitle>
          </CardHeader>

          <CardContent className="text-center space-y-4 pb-6 px-6">
            <p className="text-gray-600">Your order has been successfully received</p>

            {/* Order details card with subtle pattern */}
            <div className="bg-green-50 rounded-xl p-5 mt-2 shadow-inner border border-green-100">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">Order Number:</span>
                <span className="text-sm font-bold text-gray-800">#ORD-2023-1234</span>
              </div>
              <div className="flex justify-between font-bold mt-3 text-lg">
                <span className="text-gray-700">Total Amount:</span>
                <span className="text-green-700">$1,250.00</span>
              </div>
            </div>

            {/* Estimated delivery info */}
            <div className="text-sm text-gray-500 mt-2">
              Estimated delivery: <span className="font-medium">May 8 - May 12</span>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pb-8 px-6">
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-lg shadow-md transition-colors"
              asChild
            >
              <Link href="/orders" className="flex items-center justify-center">
                View Order Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full border-green-200 text-green-700 hover:bg-green-50 py-5 rounded-lg transition-colors"
              asChild
            >
              <Link href="/shop" className="flex items-center justify-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </CardFooter>

          {/* Bottom decorative dots */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
        </Card>
      </div>
    </div>
  )
}
