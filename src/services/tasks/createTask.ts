import { api } from '../api';
import { Task } from '@/types/task.types';

interface CreateTaskData {
  title: string;
  description?: string;
  todoListId: number;
  priority: string;
  dueDate: string;
  completed: boolean;
}

export const createTask = async (data: CreateTaskData): Promise<Task> => {
  const response = await api.post<Task>('/todos', data);
  return response;
};

