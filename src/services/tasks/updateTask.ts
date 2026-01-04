import { api } from '../api';
import { Task } from '@/types/task.types';

export const updateTask = async (taskId: number, data: Partial<Task>): Promise<Task> => {
  const updatedTask = await api.patch<Task>(`/todos/${taskId}`, data);
  return updatedTask;
};

