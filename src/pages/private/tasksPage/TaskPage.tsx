import { useAuth } from "@/stores/authStore";
import { getAllLists } from "@/services/lists/getAllLists";
import { useEffect, useState } from "react";
import TaskListItem from "@/components/lists/TaskListItem";
import { TaskList } from "@/types/list.types";
import { Task } from "@/types/task.types";
import TaskItem from "@/components/lists/TaskItem";

const TaskPage: React.FC = () => {

    const { user } = useAuth();
    const [lists, setLists] = useState<TaskList[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedList, setSelectedList] = useState<TaskList | null>(null);

    useEffect(() => {
        if (user?.id) {
            setLoading(true);
            setError(null);
            getAllLists(user.id)
                .then(setLists)
                .catch((err) => {
                    setError(err instanceof Error ? err.message : 'An error occurred');
                    console.error('Error fetching lists:', err);
                })
                .finally(() => setLoading(false));
        }
    }, [user]);

    useEffect(() => {
        if (lists.length > 0 && !selectedList) {
            setSelectedList(lists[0]);
        }
    }, [lists]);

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

    return (
        <div className="flex flex-col h-full gap-4">
            <h2 className="text-2xl font-bold">My Tasks</h2>

            <div className="flex flex-row gap-4 h-full min-h-0">
                <div className="w-1/5 flex flex-col gap-4 border border-2 border-gray-outline rounded-md p-4">
                    <p className="text-xl font-bold">Tasks Lists ({lists.length})</p>
                    <button className="w-fit cursor-pointer bg-true-blue text-white px-4 py-2 rounded-md">Create a list</button>
                    <div className="flex flex-col gap-2 bg-gray-background h-full rounded-md p-2">
                        {lists.length > 0
                            ? lists.map((item: TaskList) => (
                                <TaskListItem
                                    key={item.id}
                                    item={item}
                                    onClick={() => setSelectedList(item)}
                                    isSelected={selectedList?.id === item.id}
                                />
                            ))
                            : (
                                <p>
                                    No lists found
                                </p>
                            )}
                    </div>
                </div>

                <div className="w-4/5 h-full flex flex-col gap-4 bg-gray-background rounded-md p-4 overflow-hidden">
                    {selectedList ? (
                        <>
                            <h3 className="text-xl font-bold" style={{ color: selectedList.color }}>
                                {selectedList.title} ({selectedList.todos?.filter(task => task.completed).length}/{selectedList.todos?.length})
                            </h3>

                            {selectedList.todos && selectedList.todos.length > 0 ? (
                                <div className="flex flex-col gap-2 min-h-0 overflow-y-auto overflow-x-hidden">
                                    {selectedList.todos.map((task: Task) => (
                                        <TaskItem key={task.id} task={task} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    No tasks in this list
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full py-16">
                            <p className="text-lg">
                                Please select a list to view its tasks
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskPage