import { useAuth } from "@/stores/authStore";
import { getAllLists } from "@/services/lists/getAllLists";
import { getTasksByListId } from "@/services/tasks/getTasksByListId";
import { useEffect, useState, useMemo } from "react";
import { TaskList } from "@/types/list.types";
import { getPriorityValue } from "@/utils/functions/getPriorityValue";
import TasksListsSidebar from "@/components/tasks/TasksListsSidebar/TasksListsSidebar";
import TasksContainer from "@/components/tasks/TasksContainer/TasksContainer";

type PrioritySort = "none" | "asc" | "desc";
type DueDateSort = "none" | "asc" | "desc";

const TaskPage: React.FC = () => {

    const { user } = useAuth();
    const [lists, setLists] = useState<TaskList[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingTasks, setLoadingTasks] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedList, setSelectedList] = useState<TaskList | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [prioritySort, setPrioritySort] = useState<PrioritySort>("none");
    const [dueDateSort, setDueDateSort] = useState<DueDateSort>("none");

    useEffect(() => {
        if (user?.id) {
            setLoading(true);
            setError(null);
            getAllLists(user.id)
                .then((fetchedLists) => {
                    setLists(fetchedLists);
                    if (fetchedLists.length > 0) {
                        setSelectedList(fetchedLists[0]);
                    }
                })
                .catch((err) => {
                    setError(err instanceof Error ? err.message : 'An error occurred');
                    console.error('Error fetching lists:', err);
                })
                .finally(() => setLoading(false));
        }
    }, [user]);

    useEffect(() => {
        if (selectedList && selectedList.todos === undefined) {
            setLoadingTasks(true);
            getTasksByListId(selectedList.id)
                .then((tasks) => {
                    setLists(prevLists => 
                        prevLists.map(list => 
                            list.id === selectedList.id 
                                ? { ...list, todos: tasks }
                                : list
                        )
                    );
                    setSelectedList(prev => prev ? { ...prev, todos: tasks } : null);
                })
                .catch((err) => {
                    console.error('Error fetching tasks:', err);
                })
                .finally(() => setLoadingTasks(false));
        }
    }, [selectedList]);

    const filteredAndSortedTasks = useMemo(() => {
        if (!selectedList?.todos) return [];

        let tasks = [...selectedList.todos];

        if (searchQuery.trim()) {
            tasks = tasks.filter(task =>
                task.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (prioritySort !== "none") {
            tasks.sort((a, b) => {
                const priorityA = getPriorityValue(a.priority);
                const priorityB = getPriorityValue(b.priority);
                return prioritySort === "asc"
                    ? priorityA - priorityB
                    : priorityB - priorityA;
            });
        }

        if (dueDateSort !== "none") {
            tasks.sort((a, b) => {
                const dateA = a.dueDate ? new Date(a.dueDate).getTime() : 0;
                const dateB = b.dueDate ? new Date(b.dueDate).getTime() : 0;
                
                if (dateA === 0 && dateB === 0) return 0;
                if (dateA === 0) return 1;
                if (dateB === 0) return -1;
                
                return dueDateSort === "asc"
                    ? dateA - dateB
                    : dateB - dateA;
            });
        }

        return tasks;
    }, [selectedList?.todos, searchQuery, prioritySort, dueDateSort]);


    if (!user) {
        return (
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Tasks Page</h2>
                <div className="text-red-600">Please log in to view your Tasks</div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">My Tasks</h2>
                <div>Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">My Tasks</h2>
                <div className="text-red-600">{error}</div>
            </div>
        );
    }

    const handleResetFilters = () => {
        setSearchQuery("");
        setPrioritySort("none");
        setDueDateSort("none");
    };

    return (
        <div className="flex flex-col h-full gap-4">
            <h2 className="text-2xl font-bold">My Tasks</h2>

            <div className="flex flex-row gap-4 h-full min-h-0">
                <TasksListsSidebar
                    lists={lists}
                    selectedList={selectedList}
                    onListSelect={setSelectedList}
                    onResetFilters={handleResetFilters}
                />

                <TasksContainer
                    selectedList={selectedList}
                    filteredTasks={filteredAndSortedTasks}
                    loadingTasks={loadingTasks}
                    searchQuery={searchQuery}
                    prioritySort={prioritySort}
                    dueDateSort={dueDateSort}
                    onSearchChange={setSearchQuery}
                    onPrioritySortChange={setPrioritySort}
                    onDueDateSortChange={setDueDateSort}
                    onResetFilters={handleResetFilters}
                />
            </div>
        </div>
    );
};

export default TaskPage