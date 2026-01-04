export interface SelectOption {
    value: string;
    label: string;
}

interface SelectInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    className?: string;
    id?: string;
    disabled?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ 
    value, 
    onChange, 
    options, 
    className = "",
    id,
    disabled = false
}) => {
    return (
        <select
            id={id}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`bg-white rounded-md p-2 ${className}`}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectInput;

