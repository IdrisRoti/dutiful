"use client"

import { FormEvent, KeyboardEvent, useRef, useState } from "react"
import CustomButton from "../CustomButton"

const NUMBER_OF_INPUTS = 4

const ConfirmOTP = () => {
    const [code, setCode] = useState(["", "", "", ""])
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, value: string) => {
        const newCode = [...code];

        // Make sure only digits are passed
        const sanitizedValues = value.replace(/[^0-9]/g, "")

        // Handle pasted content
        if( sanitizedValues.length > 1 ){
            const pastedCode = sanitizedValues.slice(0, NUMBER_OF_INPUTS).split("");
            for(let i = 0; i < NUMBER_OF_INPUTS; i++){
                newCode[i] = pastedCode[i] || ""
            }
            setCode(newCode);

            // Focus on the next empty input
            const lastFilledIndex = newCode.findLastIndex((digit) => digit != "");
            const indexToBeFocused = lastFilledIndex < NUMBER_OF_INPUTS - 1 ? lastFilledIndex + 1 : NUMBER_OF_INPUTS -1;
            inputRefs.current[indexToBeFocused]?.focus();
  
        } else {
            // set value in the focused index
            newCode[index] = sanitizedValues;
            setCode(newCode)

            // focus on the next index after value is entered
            if(sanitizedValues && index < NUMBER_OF_INPUTS - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    }
    const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Backspace" && !code[index] && index > 0){
            inputRefs.current[index - 1]?.focus();
        }
    }

    const handleSubmit = (e?: FormEvent) => {
        if(e) e.preventDefault()

        console.log("Submitted", code.length)
    }

    const allInputIsFilled = code.every((digit) => digit !== "")

  return (
    <div className='pt-[5rem] md:pt-[7rem] pb-[5rem] w-full max-w-[30.375rem] mx-auto px-4 md:px-0'>
        <form onSubmit={handleSubmit} className="pt-20">
            <div className="flex items-center justify-center gap-5">
                {
                    code.map((digit, index) => (
                        <input 
                            ref={(el) => { inputRefs.current[index] = el }}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            maxLength={4} 
                            className="w-[75px] aspect-square bg-[#F3F3F3] border-[2px] border-[#B6B6E5] rounded-lg outline-none focus:border-primary text-5xl text-center"
                            aria-label={`OTP digit ${index + 1}`}
                            key={index} 
                        />
                    ))
                }
            </div>
            <p className="text-[#686868] text-center my-8">Enter OTP code that was sent to your email, segunsolaru@gmail.com.</p>
            <CustomButton disabled={!allInputIsFilled}>Confirm OTP</CustomButton>
        </form>
    </div>
  )
}

export default ConfirmOTP;