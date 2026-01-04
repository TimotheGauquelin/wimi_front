import { Task } from "@/types/task.types";
import PriorityTag from "../tag/PriorityTag/PriorityTag";

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    return (
        <div
            key={task.id}
            className="p-3 gap-2 rounded-md bg-white cursor-pointer hover:bg-gray-50"
        >
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={task.completed}
                    readOnly
                    className="cursor-pointer"
                />
                <span className={`font-semibold text-lg ${task.completed ? 'line-through' : ''}`}>
                    {task.title}
                </span>
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