import SubmitButton from "@/components/buttons/SubmitButton/SubmitButton";
import Input from "@/components/form/Input/Input";
import ModalStructure from "@/components/modal/ModalStructure/ModalStructure";
import SelectInput from "@/components/form/SelectInput/SelectInput";
import { createTask } from "@/services/tasks/createTask";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { TaskList } from "@/types/list.types";
import { Task } from "@/types/task.types";
import { priorityData } from "@/utils/const/priorityData";
import TextAreaInput from "@/components/form/TextAreaInput/TextAreInput";

interface CreateTaskModalProps {
    title: string;
    selectedList: TaskList;
    onTaskCreated?: () => void;
}

const CreateTaskModal = ({ title, selectedList, onTaskCreated }: CreateTaskModalProps) => {
    const { closeModal } = useModal();
    const [newTask, setNewTask] = useState<Partial<Task>>({
        title: "",
        description: "",
        priority: "low",
        dueDate: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!newTask.title?.trim()) {
            setError("The task title is required");
            return;
        }

        if (!newTask.dueDate) {
            setError("The due date is required");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await createTask({
                title: newTask.title.trim(),
                description: newTask.description?.trim() ?? "",
                todoListId: selectedList.id,
                priority: newTask.priority ?? "low",
                completed: false,
                dueDate: newTask.dueDate,
            });

            setNewTask({
                title: "",
                description: "",
                priority: "low",
                dueDate: "",
            });
            closeModal();

            if (onTaskCreated) {
                onTaskCreated();
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erreur lors de la création de la tâche");
            console.error("Error creating task:", err);
        } finally {
            setLoading(false);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <ModalStructure title={title}>
            <form
                className="flex flex-col border border-gray-outline rounded-md p-4 gap-4"
                onSubmit={handleSubmit}
            >
                <Input
                    label="Task Title"
                    placeholder="Frontend Refactoring"
                    type="text"
                    required
                    value={newTask.title ?? ""}
                    onChange={(e) => {
                        setNewTask({
                            ...newTask,
                            title: e.target.value,
                        });
                        setError(null);
                    }}
                />

                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 flex-1">
                        <SelectInput
                            label="Priority"
                            required
                            value={newTask.priority ?? "low"}
                            className="border border-gray-outline rounded-md h-full"
                            onChange={(e) => {
                                setNewTask({
                                    ...newTask,
                                    priority: e.target.value,
                                });
                                setError(null);
                            }}
                            options={priorityData}
                        />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="dueDate" className="text-base font-semibold">
                            Due Date <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            type="date"
                            id="dueDate"
                            className="w-full p-3 rounded-md border border-gray-outline focus:outline-none focus:border-2 focus:border-true-blue"
                            value={newTask.dueDate ?? ""}
                            min={today}
                            onChange={(e) => {
                                setNewTask({
                                    ...newTask,
                                    dueDate: e.target.value,
                                });
                                setError(null);
                            }}
                            required
                        />
                    </div>
                </div>

                <TextAreaInput
                    label="Description"
                    placeholder="Description of the task"
                    value={newTask.description ?? ""}
                    onChange={(e) => {
                        setNewTask({
                            ...newTask,
                            description: e.target.value,
                        });
                        setError(null);
                    }}
                />

                {error && (
                    <div className="text-red-font text-sm">
                        {error}
                    </div>
                )}

                <SubmitButton
                    loading={loading}
                    loadingText="Creating task..."
                    buttonText="Done"
                />
            </form>
        </ModalStructure>
    );
};

export default CreateTaskModal;