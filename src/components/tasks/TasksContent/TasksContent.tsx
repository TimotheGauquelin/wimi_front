import TaskItem from "@/components/lists/TaskItem";
import { Task } from "@/types/task.types";
import { TaskList } from "@/types/list.types";

interface TasksContentProps {
    selectedList: TaskList;
    filteredTasks: Task[];
    loadingTasks: boolean;
    onToggleTaskComplete?: (taskId: number, completed: boolean) => void;
}

const TasksContent: React.FC<TasksContentProps> = ({
    selectedList,
    filteredTasks,
    loadingTasks,
    onToggleTaskComplete
}) => {
    if (loadingTasks) {
        return (
            <div className="text-center py-8">
                Loading tasks...
            </div>
        );
    }

    if (filteredTasks.length > 0) {
        return (
            <div className="flex flex-col gap-2 min-h-0 overflow-y-auto overflow-x-hidden">
                {filteredTasks.map((task: Task) => (
                    <TaskItem 
                        key={task.id} 
                        task={task} 
                        onToggleComplete={onToggleTaskComplete}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="text-center py-8">
            {selectedList.todos && selectedList.todos.length > 0
                ? "No tasks match your search criteria"
                : "No tasks in this list"}
        </div>
    );
};

export default TasksContent;

