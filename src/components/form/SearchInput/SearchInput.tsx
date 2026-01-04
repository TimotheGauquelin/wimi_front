interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    id?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
    placeholder = "Search...", 
    value, 
    onChange, 
    className = "",
    id 
}) => {
    return (
        <input
            type="text"
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`bg-white rounded-md p-2 ${className}`}
        />
    );
};

export default SearchInput;

