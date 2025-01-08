import { twMerge } from "tailwind-merge";

type TCustomButton = {
    variant?: "outlined" | "solid",
    children: React.ReactNode;
    size?: "sm" | "lg";
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const CustomButton = ({variant = "solid", children, size ="sm", className, disabled, onClick}: TCustomButton) => {
  return (
    <button 
        {...(onClick && {onClick: onClick})}
        disabled={disabled}
        className={twMerge(
            "md:text-lg border-[1.5px] px-14 border-textPurple font-medium transition w-full disabled:opacity-50 disabled:pointer-events-none",
            variant === "outlined" ? "text-textPurple hover:bg-primary hover:text-white" : "text-white bg-primary hover:opacity-70",
            size === "sm" ? "h-[3.625rem] rounded-md" : "h-[4.375rem] rounded-lg",
            className
            )}>
        {children}
    </button>
  )
}

export default CustomButton