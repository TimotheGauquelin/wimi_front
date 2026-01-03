import { TaskList } from '@/types/list.types';
import { api } from '../api';
import { Task } from '@/types/task.types';

export const getAllLists = async (userId: number): Promise<TaskList[]> => {
  const lists = await api.get<TaskList[]>(`/todoLists?userId=${userId}`);
  
  if (!lists || lists.length === 0) {
    return [];
  }

  const listsWithTodos = await Promise.all(
    lists.map(async (list) => {
      const todos = await api.get<Task[]>(`/todos?todoListId=${list.id}`);
      return {
        ...list,
        todos: todos || []
      };
    })
  );

  return listsWithTodos;
};

