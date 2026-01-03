import { TaskList } from "@/types/list.types";

interface TaskListItemProps {
    item: TaskList;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ item }) => {
    const completedCount = item.todos?.filter(todo => todo.completed).length || 0;
    const totalCount = item.todos?.length || 0;

    return (
        <div
            key={item.id}
            className="p-3 rounded-md border cursor-pointer list-item-hover"
            style={{
                borderColor: item.color,
                '--item-color': item.color
            } as React.CSSProperties & { '--item-color': string }}
        >
            <h3 className="font-bold">{item.title}</h3>
            {item.todos && item.todos.length > 0 ? (
                <p className="text-base">
                    <span className="font-semibold">Done tasks: </span>
                    <span>{completedCount}/{totalCount}</span>
                </p>
            ) : (
                <p className="text-base">
                    There are no tasks in this list
                </p>
            )}
        </div>
    );
};

export default TaskListItem;