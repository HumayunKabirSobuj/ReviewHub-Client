import HeroSection from "@/components/modules/HomePage/HeroSection";
import HowItWorksSection from "@/components/modules/HomePage/HowItWorksSection";
import ReviewsSection from "@/components/modules/HomePage/ReviewsSection";
import ServicesSection from "@/components/modules/HomePage/ServicesSection";

export default async function HomePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/review?isPublished=true&page=1&limit=6`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
    cache: 'force-cache',     // Optional, enables static caching
  })
  const { data: reviewsData } = await res.json()

  return (
    <div className="relative w-full min-h-screen  overflow-hidden ">
      {/* <Banner/> */}
      <HeroSection />
      <section className="container mx-auto bg-white px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <ReviewsSection reviewsData={reviewsData} />
        <ServicesSection />
        <HowItWorksSection />
      </section>
    </div>
  );
}
