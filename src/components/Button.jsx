
const Button = ({ label, backgroundColor, borderColor, textColor }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-source text-lg leading-none 
                ${backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : "bg-coral-red text-white border-coral-red"
                } rounded-full`}
        >
            {label}
        </button>
    )
}

export default Button
