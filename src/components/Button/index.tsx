import React from 'react';

interface ButtonProps {
    text: string;
    type: "button" | "submit" | "reset";
    href?: string;
    className?: string;
}
const Button: React.FC<ButtonProps> = ({ text, type, href, className }) => {
    return (
        <div>
            <a href={href}>
            <button
                type={type}
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}>
                {text}
            </button>
            </a>
        </div>
    )
}
export default Button;