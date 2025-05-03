import { ArrowUp, Facebook, Twitter, Instagram, Star, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Footer main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Info Column */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-sm text-gray-700 mb-4">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-purple-600">📞</span>
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600">✉️</span>
                <span className="text-gray-600 text-sm">support@reviewhub.com</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">📍</span>
                <span className="text-gray-600 text-sm">
                  123 Review Street
                  <br />
                  San Francisco, CA 94103
                </span>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-sm text-gray-700 mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 text-sm hover:text-purple-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 text-sm hover:text-purple-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 text-sm hover:text-purple-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 text-sm hover:text-purple-600">
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Review Resources Column */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-sm text-gray-700 mb-4">REVIEW RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guidelines" className="text-gray-600 text-sm hover:text-purple-600">
                  Review Guidelines
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 text-sm hover:text-purple-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 text-sm hover:text-purple-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/content-policy" className="text-gray-600 text-sm hover:text-purple-600">
                  Content Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-sm text-gray-700 mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories" className="text-gray-600 text-sm hover:text-purple-600">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/premium" className="text-gray-600 text-sm hover:text-purple-600">
                  Premium Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 text-sm hover:text-purple-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 text-sm hover:text-purple-600">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo Column */}
          <div className="lg:col-span-1 flex justify-start lg:justify-end">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Star className="mr-2 h-6 w-6 text-yellow-500" />
                <span className="text-xl font-bold text-purple-600">Review</span>
                <span className="text-xl font-semibold text-gray-900">Hub</span>
              </Link>
              <p className="text-gray-500 text-xs mt-2 max-w-[200px]">
                Your trusted source for honest and reliable product reviews
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-sm text-gray-700 mb-2">SUBSCRIBE TO OUR NEWSLETTER</h3>
              <p className="text-gray-500 text-xs">Get the latest reviews and updates delivered to your inbox</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-purple-600 w-full md:w-64"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-xs mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} ReviewHub. All rights reserved
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 mb-4 md:mb-0">
            <Link
              href="#"
              className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-[#E4405F] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-[#333333] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="GitHub"
            >
              <Github size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </Link>
          </div>

          {/* Back to Top */}
          <Link
            href="#"
            className="flex items-center gap-1 text-gray-500 text-xs hover:text-purple-600 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
