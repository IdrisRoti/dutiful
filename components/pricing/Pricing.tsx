import PricingPlans from "./PricingPlans";
import FeaturesOverview from "./FeaturesOverview";

const Pricing = () => {
  return (
    <div className="pt-[4rem] md:pt-[5.625rem] bg-[#FCFAFF]">
        <section className="bg-white py-5 md:py-10 text-center">
            <h1 className="text-4xl text-textHeading mb-4 font-averia">Plans to Suit Your Business Budget</h1>
            <h2 className='text-textGray mb-3 w-full lg:max-w-[60%] mx-auto px-4 lg:px-0'>Our fully organized plans deliver valuable content that showcases your services and skills, drives Lead, covers all features, and gives customers a clear idea to be able to choose your services.</h2>
        </section>
        <PricingPlans />
        <FeaturesOverview />
    </div>
  )
}

export default Pricing;