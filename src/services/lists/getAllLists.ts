import { TaskList } from '@/types/list.types';
import { api } from '../api';
import { getTasksByListId } from '../tasks/getTasksByListId';

export const getAllLists = async (userId: number): Promise<TaskList[]> => {
  const lists = await api.get<TaskList[]>(`/todoLists?userId=${userId}`);
  
  if (!lists || lists.length === 0) {
    return [];
  }
  const listsWithTodos = await Promise.all(
    lists.map(async (list) => {
      const tasks = await getTasksByListId(list.id);
      return { ...list, todos: tasks };
    })
  );

  return listsWithTodos;
};

