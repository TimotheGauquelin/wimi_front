import { useAuth } from "@/stores/authStore";
import { getAllLists } from "@/services/lists/getAllLists";
import { useEffect, useState } from "react";
import TaskListItem from "@/components/lists/TaskListItem";
import { TaskList } from "@/types/list.types";

const TaskPage: React.FC = () => {

    const { user } = useAuth();
    const [lists, setLists] = useState<TaskList[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

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
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">My Tasks</h2>
            {lists.length === 0 
            ? (
                <div>No lists found</div>
            ) 
            : (
                <div className="flex flex-col gap-4 border border-2 border-gray-outline rounded-md p-4">
                    <p className="text-xl font-bold">Tasks Lists ({lists.length})</p>
                    <button className="w-fit cursor-pointer bg-true-blue text-white px-4 py-2 rounded-md">Create a list</button>
                    {lists.map((item) => (
                        <TaskListItem key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskPage