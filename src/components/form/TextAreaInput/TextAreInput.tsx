interface TextAreaInputProps {
    label?: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaInput = ({ label, placeholder, required = false, value, onChange }: TextAreaInputProps) => {
    return (
        <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="description" className="text-base font-semibold">
                            {label} <span className="text-red-500 ml-1">{required ? "*" : ""}</span>
                    </label>
                    <textarea
                        id="description"
                        className="w-full p-3 rounded-md border border-gray-outline focus:outline-none focus:border-2 focus:border-true-blue resize-none"
                        placeholder={placeholder ?? ""}
                        rows={3}
                        value={value ?? ""}
                        onChange={onChange}
                        required={required}
                    />
                </div>
    );
};

export default TextAreaInput;