import { Task } from "@/types/task.types";
import PriorityTag from "../tag/PriorityTag/PriorityTag";
import CheckboxTask from "../tasks/CheckboxTask/CheckboxTask";

interface TaskItemProps {
    task: Task;
    onToggleComplete?: (taskId: number, completed: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete }) => {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onToggleComplete) {
            onToggleComplete(task.id, e.target.checked);
        }
    };

    return (
        <div
            key={task.id}
            className={`p-3 gap-2 rounded-md ${task.completed ? 'text-gray-outline' : ''} bg-white hover:bg-gray-50 cursor-pointer `}
        >
            <div className="flex items-center gap-2 justify-between">
                <span className={`font-semibold text-lg ${task.completed ? 'line-through' : ''}`}>
                    {task.title}
                </span>
               <CheckboxTask task={task} handleCheckboxChange={handleCheckboxChange} />

            </div>
            <p>
                <span className="font-bold">Due: </span>
                <span>{new Date(task.dueDate).toLocaleDateString()}</span>
            </p>
            <div className="flex items-center gap-2">
                <span className="font-bold">Priority: </span>
                <PriorityTag priority={task.priority} />
            </div>
        </div>
    );
};

export default TaskItem;