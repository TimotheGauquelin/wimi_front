interface InputProps {
    label: string;
    placeholder: string;
    type: 'text' | 'email' | 'password';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type, value, onChange, required = false, disabled = false }) => {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <label htmlFor={label.toLowerCase()} className="text-base font-semibold">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input 
                type={type} 
                id={label.toLowerCase()} 
                className="w-full p-3 rounded-md border border-gray-outline focus:outline-none focus:border-2 focus:border-true-blue disabled:bg-gray-100 disabled:cursor-not-allowed" 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />
        </div>
    );
};

export default Input;