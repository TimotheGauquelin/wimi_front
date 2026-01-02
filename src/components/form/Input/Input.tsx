interface InputProps {
    label: string;
    placeholder: string;
    type: 'text' | 'email' | 'password';
}

const Input: React.FC<InputProps> = ({ label, placeholder, type }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={label.toLowerCase()} className="text-base font-semibold">{label}</label>
            <input type={type} id={label.toLowerCase()} className="w-full p-3 rounded-md border border-gray-outline focus:outline-none focus:border-2 focus:border-true-blue" placeholder={placeholder} />
        </div>
    );
};

export default Input;