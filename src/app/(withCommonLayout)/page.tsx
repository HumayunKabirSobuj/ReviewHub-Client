import HeroSection from "@/components/modules/HomePage/HeroSection";
import HowItWorksSection from "@/components/modules/HomePage/HowItWorksSection";
import ReviewsSection from "@/components/modules/HomePage/ReviewsSection";
import ServicesSection from "@/components/modules/HomePage/ServicesSection";
import { getAllPublishedReviews } from "@/services/Reviews";

export default async function HomePage() {
  const queryString = new URLSearchParams({
    page: '1',
    limit: '6',
  }).toString();

  const result = await getAllPublishedReviews(queryString);
  const reviewsData = result?.data ?? [];


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
