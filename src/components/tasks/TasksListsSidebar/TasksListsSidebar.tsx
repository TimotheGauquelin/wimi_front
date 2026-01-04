import TaskListItem from "@/components/lists/TaskListItem";
import { useModal } from "@/hooks/useModal";
import CreateListModal from "@/modals/CreateListModal/CreateListModal";
import { TaskList } from "@/types/list.types";

interface TasksListsSidebarProps {
    lists: TaskList[];
    selectedList: TaskList | null;
    onListSelect: (list: TaskList) => void;
    onResetFilters: () => void;
    onListCreated?: () => void;
}

const TasksListsSidebar: React.FC<TasksListsSidebarProps> = ({
    lists,
    selectedList,
    onListSelect,
    onResetFilters,
    onListCreated
}) => {

    const { openModal } = useModal();

    const handleListClick = (item: TaskList) => {
        const list = lists.find(list => list.id === item.id);
        if (list) {
            onListSelect(list);
            onResetFilters();
        }
    };

    return (
        <div className="w-1/5 flex flex-col gap-4 border border-2 border-gray-outline rounded-md p-4">
            <p className="text-xl font-bold">Tasks Lists ({lists.length})</p>
            <button 
            className="w-fit cursor-pointer bg-true-blue text-white px-4 py-2 rounded-md"
            onClick={() => {
                openModal(<CreateListModal title="Create a list" onListCreated={onListCreated} />);
            }}
            >
                Create a list
            </button>
            <div className="flex flex-col gap-2 bg-gray-background h-full rounded-md p-2">
                {lists.length > 0 ? (
                    lists.map((item: TaskList) => (
                        <TaskListItem
                            key={item.id}
                            item={item}
                            onClick={() => handleListClick(item)}
                            isSelected={selectedList?.id === item.id}
                        />
                    ))
                ) : (
                    <p>No lists found</p>
                )}
            </div>
        </div>
    );
};

export default TasksListsSidebar;

