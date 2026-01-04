import { api } from '../api';
import { Task } from '@/types/task.types';

export const getTasksByListId = async (listId: number): Promise<Task[]> => {
  const tasks = await api.get<Task[]>(`/todos?todoListId=${listId}`);
  return tasks || [];
};

