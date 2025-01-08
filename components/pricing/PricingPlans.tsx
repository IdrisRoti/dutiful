import { pricingPlans } from "@/constants";
import CustomButton from "../CustomButton";

import { BiCheck } from "react-icons/bi";

const PricingPlans = () => {
  return (
    <section className="mt-8 md:mt-16 max-w-[75rem] mx-auto pb-5">
        <div className="grid grid-cols-3 gap-3 lg:gap-5">
            {
                pricingPlans.map(({price, type, features}) => (
                    <div key={type} className="col-span-full md:col-span-1 bg-white rounded-lg pt-10 pb-5 px-5">
                        <h3 className="font-medium text-lg lg:text-xl mb-3">{type}</h3>
                        <>
                            {
                                price === null ? (
                                    <h4 className="font-semibold text-3xl lg:text-5xl mb-5 font-averia">Free</h4>
                                ) :  (
                                    <div className="flex mb-5 font-averia">
                                        <span className="uppercase font-semibold">NGN</span>
                                        <div className="flex items-end">
                                            <h4 className="font-semibold text-3xl lg:text-5xl">{price}</h4>
                                            <span className="font-semibold">/year</span>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                        <div className="hidden lg:block">
                            <CustomButton className='shadow-xl' size="lg">Get started</CustomButton>
                        </div>
                        <div className="lg:hidden">
                            <CustomButton className='shadow-xl px-2'>Get started</CustomButton>
                        </div>
                        <section className="flex flex-col gap-6 mt-10">
                            {
                                features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-6">
                                        <BiCheck className="size-5" />
                                        <p className="text-[#656565] text-sm lg:text-base">{feature}</p>
                                    </div>
                                ))
                            }
                        </section>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default PricingPlans;