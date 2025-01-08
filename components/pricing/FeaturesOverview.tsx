import { featuresOverview, pricingPlans } from "@/constants"
import CustomButton from "../CustomButton"
import { BiCheck, BiX } from "react-icons/bi"

const FeaturesOverview = () => {
  return (
    <section className="pt-10 max-w-[75rem] mx-auto pb-20">
        <h3 className="font-medium text-3xl px-4 lg:px-0">Features Overview</h3>
        <div className="mt-10 md:mt-20 max-md:overflow-x-auto">
            <div className="max-md:w-[60rem]">
                <div className="flex items-end mb-5 px-8 gap-2">
                    <h4 className="text-[#656565] text-lg lg:text-2xl w-[30%]">Features and Services</h4>
                    <div className="flex justify-between w-[70%] gap-4">
                        {
                            pricingPlans.map(({type}) => (
                                <div key={type} className="w-full lg:w-[244px] flex flex-col">
                                    <h5 className="font-medium mb-5">{type}</h5>
                                    <CustomButton className="px-0">{type}</CustomButton>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                    {
                        featuresOverview.map(({name, features}, i) => (
                            <div key={i} className="flex items-center h-[58px] odd:bg-white rounded-md px-8">
                                <h5 className="w-[30%] h-full lg:text-xl flex items-center">{name}</h5>
                                <div className="w-[70%] flex items-center justify-between h-full">
                                    {
                                        features.map(({value}, i) => (
                                            <span key={i} className="w-[244px] grid place-items-center text-[#AC64CE]">
                                                {
                                                    typeof value === "boolean" ? (
                                                        <div>
                                                            {
                                                                value ? <BiCheck className="size-6" /> : <BiX className="size-6" />
                                                            }
                                                        </div>
                                                    ) : (
                                                        <span className="text-black font-medium">{value}</span>
                                                    )
                                                }
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    </section>
  )
}

export default FeaturesOverview