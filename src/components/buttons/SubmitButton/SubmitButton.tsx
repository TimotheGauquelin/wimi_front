interface SubmitButtonProps {
    loading: boolean;
    loadingText: string;
    buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({loading, loadingText, buttonText}) => {
    return (
        <button
            type="submit"
            disabled={loading}
            className="w-full p-3 cursor-pointer rounded-md bg-true-blue text-white disabled:bg-pale-blue disabled:cursor-not-allowed transition-colors"
          >
            {loading ? loadingText : buttonText}
          </button>
    );
};

export default SubmitButton;