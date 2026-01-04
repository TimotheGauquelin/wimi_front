import { useModal } from "@/hooks/useModal";

interface ModalStructureProps {
    children: React.ReactNode;
    title: string;
}

const ModalStructure = ({ children, title }: ModalStructureProps) => {

    const { closeModal } = useModal();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
                <span className="text-2xl font-bold text-black-font">{title}</span>
                <span 
                className="text-sm text-black-font hover:underline cursor-pointer"
                onClick={() => {
                    closeModal();
                }}
                >
                    Go Back
                    </span>
            </div>
            {children}
        </div>
    );
};

export default ModalStructure;