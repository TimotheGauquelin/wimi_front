import { Task } from "@/types/task.types";

interface CheckboxTaskProps {
    task: Task;
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxTask: React.FC<CheckboxTaskProps> = ({ task, handleCheckboxChange }) => {
    return (
        <label htmlFor={`task-${task.id}`} className={`block cursor-pointer flex items-center gap-2 p-2 rounded-md font-semibold ${task.completed ? 'bg-light-green text-true-green' : 'bg-gray-background'}`}>
            <input
                id={`task-${task.id}`}
                type="checkbox"
                checked={task.completed}
                onChange={handleCheckboxChange}
                className="cursor-pointer"

                onClick={(e) => e.stopPropagation()}
            />
            <span className="text-sm">
                {task.completed ? 'Done' : 'Not Done'}
            </span>
        </label>
    )
}

export default CheckboxTask;