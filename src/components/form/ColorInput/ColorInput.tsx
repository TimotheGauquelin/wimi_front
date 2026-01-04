interface ColorInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    required?: boolean;
}

const ColorInput: React.FC<ColorInputProps> = ({ value, onChange, label, required = false }) => {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <label htmlFor={label.toLowerCase()} className="text-base font-semibold">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input type="color" value={value} onChange={onChange} />
        </div>
    );
};

export default ColorInput;