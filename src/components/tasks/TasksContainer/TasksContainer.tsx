import { TaskList } from "@/types/list.types";
import { Task } from "@/types/task.types";
import TasksFilters from "../TasksFilters/TasksFilters";
import TasksContent from "../TasksContent/TasksContent";

type PrioritySort = "none" | "asc" | "desc";
type DueDateSort = "none" | "asc" | "desc";
type CompletedSort = "none" | "asc" | "desc";

interface TasksContainerProps {
    selectedList: TaskList | null;
    filteredTasks: Task[];
    loadingTasks: boolean;
    searchQuery: string;
    prioritySort: PrioritySort;
    dueDateSort: DueDateSort;
    completedSort: CompletedSort;
    onSearchChange: (value: string) => void;
    onPrioritySortChange: (value: PrioritySort) => void;
    onDueDateSortChange: (value: DueDateSort) => void;
    onCompletedSortChange: (value: CompletedSort) => void;
    onResetFilters: () => void;
    onToggleTaskComplete?: (taskId: number, completed: boolean) => void;
}

const TasksContainer: React.FC<TasksContainerProps> = ({
    selectedList,
    filteredTasks,
    loadingTasks,
    searchQuery,
    prioritySort,
    dueDateSort,
    completedSort,
    onSearchChange,
    onPrioritySortChange,
    onDueDateSortChange,
    onCompletedSortChange,
    onResetFilters,
    onToggleTaskComplete
}) => {
    const completedTasks = selectedList?.todos?.filter(task => task.completed).length || 0;
    const totalTasks = selectedList?.todos?.length || 0;

    if (!selectedList) {
        return (
            <div className="flex items-center justify-center h-full py-16">
                <p className="text-lg">
                    Please select a list to view its tasks
                </p>
            </div>
        );
    }

    return (
        <div className="w-4/5 h-full flex flex-col gap-4 bg-gray-background rounded-md p-4 overflow-hidden">
            <h3 className="text-xl font-bold" style={{ color: selectedList.color }}>
                {selectedList.title} ({completedTasks}/{totalTasks})
            </h3>

            <TasksFilters
                searchQuery={searchQuery}
                prioritySort={prioritySort}
                dueDateSort={dueDateSort}
                completedSort={completedSort}
                onSearchChange={onSearchChange}
                onPrioritySortChange={onPrioritySortChange}
                onDueDateSortChange={onDueDateSortChange}
                onCompletedSortChange={onCompletedSortChange}
                onResetFilters={onResetFilters}
            />

            <TasksContent
                selectedList={selectedList}
                filteredTasks={filteredTasks}
                loadingTasks={loadingTasks}
                onToggleTaskComplete={onToggleTaskComplete}
            />
        </div>
    );
};

export default TasksContainer;

