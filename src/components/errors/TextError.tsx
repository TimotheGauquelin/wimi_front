interface TextErrorProps {
    error: string | null;
}

const TextError: React.FC<TextErrorProps> = ({ error }) => {
    return (
        <>
            {error && (
                <div className="p-3 rounded-md text-red-font bg-light-red text-base font-semibold">
                    <p><span>Error: </span>{error}</p>
                </div>
            )}
        </>
    );
};

export default TextError;