
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Activity, ArrowRight, BookOpen, Building, FileText, Star, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative w-full min-h-screen  overflow-hidden ">
      {/* Hero section */}
      <section className="w-full bg-accent ">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-24">
          {/* Tagline */}
          <p className="text-black mb-4 md:mb-6">"Discover, Review, Connect"</p>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                ReviewHub - Your trusted <br />
                source for <span className="text-primary">honest reviews.</span>
              </h1>
              <p className="text-black max-w-md">
                Join our community of reviewers and consumers to discover the best products, share your experiences, and
                make informed purchasing decisions.
              </p>
              <button className="flex items-center gap-2 bg-primary hover:bg-purple-600 text-white px-6 py-3 rounded-full transition-all">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right column - Cards */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Main card */}
              <div className="bg-white text-black p-6 rounded-xl col-span-1 md:col-span-2 md:max-w-sm border border-primary">
                <div className="flex flex-col gap-4">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium">Discover Trusted Reviews</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <p className="text-sm">Verified User Reviews</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <p className="text-sm">Premium Content Access</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 1 */}
              <div className="bg-white text-black p-4 rounded-xl border border-primary">
                <div className="flex flex-col gap-2">
                  <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white">⏱️</span>
                  </div>
                  <h3 className="text-sm font-medium">Timely & Relevant Reviews</h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-black p-4 rounded-xl border border-primary">
                <div className="flex flex-col gap-2">
                  <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white">🔒</span>
                  </div>
                  <h3 className="text-sm font-medium">Secure & Trusted Platform</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto bg-white px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {/* Services section */}
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Header section */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Our Services</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">Premium Features for Our Community</h1>
            <p className="text-black max-w-3xl mx-auto mb-2">
              Our comprehensive suite of features helps you discover, review, and connect with products and services that
              matter to you.
            </p>
            <p className="text-black max-w-3xl mx-auto">
              These tools are designed to enhance your experience and help you make informed purchasing decisions.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-200 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Product Reviews</h3>
              <p className="text-black mb-4">
                Read and write detailed reviews on a wide range of products across multiple categories.
              </p>
              <Link href="/reviews" className="text-primary flex items-center text-sm font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-200 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Community Engagement</h3>
              <p className="text-black mb-4">
                Connect with other users, vote on reviews, and participate in discussions about products.
              </p>
              <Link href="/community" className="text-primary flex items-center text-sm font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-200 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Premium Content</h3>
              <p className="text-black mb-4">
                Access in-depth expert reviews and exclusive content with our premium subscription.
              </p>
              <Link href="/premium" className="text-primary flex items-center text-sm font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-200 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Category Exploration</h3>
              <p className="text-black mb-4">
                Browse reviews by categories like Gadgets, Clothing, Books, and more to find exactly what you're looking
                for.
              </p>
              <Link href="/categories" className="text-primary flex items-center text-sm font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-200 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Verified Purchases</h3>
              <p className="text-black mb-4">
                Identify reviews from verified purchasers to ensure you're getting authentic feedback.
              </p>
              <Link href="/verified" className="text-primary flex items-center text-sm font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-200 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Review Analytics</h3>
              <p className="text-black mb-4">
                Track the performance of your reviews and see how they're helping others make decisions.
              </p>
              <Link href="/analytics" className="text-primary flex items-center text-sm font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* How it works section */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Top section - CTA */}
          <div className="bg-white p-6 rounded-lg mb-12 border border-primary">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black">
                  Enhance your shopping experience with <span className="text-primary">honest reviews</span>
                </h2>
                <p className="text-sm text-black">
                  Join thousands of users who make better purchasing decisions with our community-driven reviews.
                  <br />
                  Start today and never regret a purchase again.
                </p>
              </div>
              <button className="bg-primary hover:bg-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main section - How it works */}
          <div className="mt-8">
            <h3 className="text-primary uppercase text-sm font-medium mb-2">Our Process</h3>
            <h2 className="text-2xl font-bold mb-8 text-black">How Our Review Platform Works!</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left side - Illustration */}
              <div className="w-full md:w-2/5">
                <div className="relative h-64 md:h-80">
                  <Image src="/images/review.png" alt="Product review illustration" fill className="object-contain" />
                </div>
              </div>

              {/* Right side - Text content */}
              <div className="w-full md:w-3/5 space-y-4">
                <div className="border-l-4 border-primary pl-4 py-1">
                  <p className="text-sm text-black">
                    Our platform connects consumers with honest, detailed reviews to help them make informed decisions.
                    <br />
                    Here's how it works.
                  </p>
                </div>

                <p className="text-black text-sm leading-relaxed">
                  Our review platform allows users to create accounts and share their experiences with products across
                  various categories. Users can rate products on a scale of 1-5 stars, provide detailed reviews, and even
                  include information about where they purchased the item. The community can then vote on these reviews
                  and engage in discussions through comments.
                </p>

                <p className="text-black text-sm leading-relaxed">
                  For those looking for more in-depth analysis, we offer premium reviews created by experts and
                  experienced users. These premium reviews provide comprehensive insights and are available for a small
                  fee. All content is moderated by our admin team to ensure it meets our community guidelines, providing
                  you with a trustworthy platform for all your product research needs.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white py-12 lg:px-4 mt-16 rounded-lg border border-purple-200">
            <div className="lg:max-w-3xl w-full mx-auto">
              {/* FAQ Header */}
              <h2 className="text-2xl font-bold text-center mb-8 text-black">Frequently Asked Questions</h2>

              {/* FAQ Accordion */}
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-purple-200">
                  <AccordionTrigger className="p-4 hover:no-underline">
                    <h3 className="font-medium text-left text-black">
                      How do I create an account and start writing reviews?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0">
                    <p className="text-black text-sm">
                      Creating an account is simple! Click the "Sign Up" button in the top right corner, fill out the
                      registration form with your email and password, and verify your email address. Once registered, you
                      can navigate to any product page and click "Write a Review" to share your experience. Your review
                      will be submitted for moderation and published once approved.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-purple-200">
                  <AccordionTrigger className="p-4 hover:no-underline">
                    <h3 className="font-medium text-left text-black">
                      What are premium reviews and how can I access them?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0">
                    <p className="text-black text-sm">
                      Premium reviews are in-depth analyses written by our expert team or verified power users. They
                      include detailed pros and cons, performance metrics, and long-term usage insights. To access premium
                      reviews, you need to subscribe to our Premium plan. Visit your account settings and select "Upgrade
                      to Premium" to see our subscription options.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-purple-200">
                  <AccordionTrigger className="p-4 hover:no-underline">
                    <h3 className="font-medium text-left text-black">How does the voting system work for reviews?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0">
                    <p className="text-black text-sm">
                      Our voting system allows users to rate the helpfulness of reviews. Each review has upvote and
                      downvote buttons. Upvoting indicates you found the review helpful, while downvoting suggests it
                      wasn't useful. Reviews with more upvotes appear higher in the listings. You must be logged in to
                      vote, and you can only vote once per review.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-purple-200">
                  <AccordionTrigger className="p-4 hover:no-underline">
                    <h3 className="font-medium text-left text-black">
                      How can I become an admin or moderator on the platform?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0">
                    <p className="text-black text-sm">
                      We select moderators from our most active and trusted community members. To be considered, maintain
                      a high-quality contribution record with at least 50 approved reviews and a positive reputation
                      score. Admin positions are typically filled internally. If you're interested in becoming a
                      moderator, you can apply through the "Moderator Application" form in your profile settings after
                      meeting the eligibility requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Statistics Section */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Statistic 1 */}
                <div className="text-center">
                  <p className="text-primary text-2xl font-bold">10,000+</p>
                  <p className="text-sm text-black">Active Users</p>
                </div>

                {/* Statistic 2 */}
                <div className="text-center">
                  <p className="text-primary text-2xl font-bold">25,000+</p>
                  <p className="text-sm text-black">Product Reviews</p>
                </div>

                {/* Statistic 3 */}
                <div className="text-center">
                  <p className="text-primary text-2xl font-bold">500+</p>
                  <p className="text-sm text-black">Premium Reviews</p>
                </div>

                {/* Statistic 4 */}
                <div className="text-center">
                  <p className="text-primary text-2xl font-bold">50+</p>
                  <p className="text-sm text-black">Product Categories</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              {/* Left Column - Text and Illustration */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <p className="text-primary text-sm mb-2">Contact Us</p>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                    Get in Touch With
                    <br />
                    Our Team!
                  </h2>
                  <p className="text-black text-sm leading-relaxed">
                    Have questions about our platform or need assistance with your account?
                    <br />
                    Want to discuss potential partnerships or advertising opportunities?
                    <br />
                    Use the form below to reach out to us.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-6 border border-purple-200">
                  {/* Top border */}
                  <div className="flex h-1 mb-6">
                    <div className="w-full bg-primary"></div>
                  </div>

                  <form className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <div className="flex items-center border border-purple-200 rounded-md px-3 py-2 focus-within:border-primary">
                        <span className="text-primary mr-2">👤</span>
                        <input type="text" placeholder="Your Name" className="w-full outline-none text-sm text-black" />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <div className="flex items-center border border-purple-200 rounded-md px-3 py-2 focus-within:border-primary">
                        <span className="text-primary mr-2">✉️</span>
                        <input type="email" placeholder="Your Email" className="w-full outline-none text-sm text-black" />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div>
                      <div className="flex items-start border border-purple-200 rounded-md px-3 py-2 focus-within:border-primary">
                        <span className="text-primary mr-2 mt-1">💬</span>
                        <textarea
                          placeholder="Your Message"
                          rows={5}
                          className="w-full outline-none text-sm resize-none text-black"
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-purple-600 text-white py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
