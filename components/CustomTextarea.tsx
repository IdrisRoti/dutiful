interface ICustomTextarea {  
    name: string;
    label: string;
    required?: boolean;
}

const CustomTextarea = ({ name, label, required=false }: ICustomTextarea) => {

  return (
    <div>
        <label htmlFor={name} className="text-textPurple font-medium md:text-xl mb-2">{label}</label>
        <textarea required={required} id={name} className="w-full px-3 rounded-md bg-[#F8FAFD] outline-none border-[2px] border-[#E7EAF1] focus:border-borderPurple transition-all" />
    </div>
  )
}

export default CustomTextarea