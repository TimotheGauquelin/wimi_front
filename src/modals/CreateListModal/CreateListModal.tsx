import SubmitButton from "@/components/buttons/SubmitButton/SubmitButton";
import Input from "@/components/form/Input/Input";
import ModalStructure from "@/components/modal/ModalStructure/ModalStructure";
import createAList from "@/services/lists/createAList";
import { useAuth } from "@/stores/authStore";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { TaskList } from "@/types/list.types";
import ColorInput from "@/components/form/ColorInput/ColorInput";

interface CreateListModalProps {
    title: string;
    onListCreated?: () => void;
}

const CreateListModal = ({ title, onListCreated }: CreateListModalProps) => {
    const { user } = useAuth();
    const { closeModal } = useModal();
    const [newList, setNewList] = useState<Partial<TaskList>>({
        title: "",
        color: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!newList.title?.trim()) {
            setError("Le titre de la liste est requis");
            return;
        }

        if (!newList.color) {
            setError("La couleur de la liste est requise");
            return;
        }

        if (!user?.id) {
            setError("Vous devez être connecté pour créer une liste");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await createAList({
                title: newList.title.trim(),
                userId: user.id,
                color: newList.color,
            });
            
            setNewList({
                title: "",
                color: "",
            });
            closeModal();
            
            if (onListCreated) {
                onListCreated();
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erreur lors de la création de la liste");
            console.error("Error creating list:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ModalStructure title={title}>
            <form
                className="flex flex-col border border-gray-outline rounded-md p-4 gap-4"
                onSubmit={handleSubmit}
            >
                <Input
                    label="List Title"
                    placeholder="Frontend Refactoring"
                    type="text"
                    required
                    value={newList.title}
                    onChange={(e) => {
                        setNewList({
                            ...newList,
                            title: e.target.value,
                        });
                        setError(null);
                    }}
                />

                <ColorInput
                    label="List Color"
                    value={newList.color ?? ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewList({
                            ...newList,
                            color: e.target.value,
                        });
                    }}
                    required
                />

                {error && (
                    <div className="text-red-font text-sm">
                        {error}
                    </div>
                )}
                <SubmitButton 
                    loading={loading} 
                    loadingText="Creating list..." 
                    buttonText="Done" 
                />
            </form>
        </ModalStructure>
    );
};

export default CreateListModal;