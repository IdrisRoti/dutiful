import { twMerge } from "tailwind-merge";

type TCustomButton = {
    variant?: "outlined" | "solid",
    children: React.ReactNode;
    size?: "sm" | "lg";
    className?: string
}

const CustomButton = ({variant = "solid", children, size ="sm", className}: TCustomButton) => {
  return (
    <button 
        className={twMerge(
            "md:text-lg border-[1.5px] px-14 border-textPurple font-medium transition ",
            variant === "outlined" ? "text-textPurple hover:bg-primary hover:text-white" : "text-white bg-primary hover:opacity-70",
            size === "sm" ? "h-[3.625rem] rounded-md" : "h-[4.875rem] rounded-lg",
            className
            )}>
        {children}
    </button>
  )
}

export default CustomButton