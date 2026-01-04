export interface SelectOption {
    value: string;
    label: string;
}

interface SelectInputProps {
    label?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    className?: string;
    id?: string;
    disabled?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
    label,
    required = false,
    value,
    onChange,
    options,
    className = "",
    id,
    disabled = false
}) => {
    return (
        <div className="flex flex-col gap-2 flex-1">
            {label &&
                <label htmlFor="priority" className="text-base font-semibold">
                    {label} <span className="text-red-500 ml-1">{required ? "*" : ""}</span>
                </label>
            }
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
        </div>
    );
};

export default SelectInput;

