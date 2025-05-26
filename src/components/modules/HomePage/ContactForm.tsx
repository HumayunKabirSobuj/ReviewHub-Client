"use client"

import { ArrowRight, Mail, MessageSquare, Send, User } from "lucide-react"
import type React from "react"
import { toast } from "sonner"

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    console.log("Form submitted:", {
      name,
      email,
      message,
    })

    toast.success("Message Sent Successfully")
    form.reset()
  }

  return (
    <div className="min-h-screen bg-background mt-4 relative overflow-hidden rounded-3xl">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-primary">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Get in Touch
                  <span className="bg-clip-text "> With Our Team!</span>
                </h1>

                <p className="text-lg  leading-relaxed max-w-lg">
                  Have questions about our platform or need assistance with your account? Want to discuss potential
                  partnerships or advertising opportunities? We had love to hear from you.
                </p>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-secondary shadow-sm">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Email Us</h3>
                <p className="text-black text-sm">help@reviewportal.com</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-secondary shadow-sm">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Live Chat</h3>
                <p className=" text-sm">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Form Header */}
              <div className="bg-primary p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                <p className="">We will get back to you within 24 hours</p>
              </div>

              {/* Form Content */}
              <div className="p-6 lg:p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-primary">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 " />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-primary  "
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-primary">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 " />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-primary  "
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 " />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none text-primary  "
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
