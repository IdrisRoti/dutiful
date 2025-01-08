import Benefits from "@/components/landing-page/benefits/Benefits";
import CollectReviews from "@/components/landing-page/collect-reviews/CollectReviews";
import Hero from "@/components/landing-page/hero/Hero";

export default function Home() {
  return (
   <div className="padding pt-[4rem] md:pt-[5.625rem]">
      <Hero />
      <CollectReviews />
      <Benefits />
   </div>
  );
}
