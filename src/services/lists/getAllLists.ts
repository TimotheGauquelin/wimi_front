import { api } from '@/services/api';
import { TodoList } from '@/types/list.types';

export const getAllLists = async (userId: number): Promise<TodoList[]> => {
  if (!userId || userId <= 0) {
    throw new Error('User ID is required and must be a positive number');
  }

  try {
    const todoLists = await api.get<TodoList[]>(`/todoLists?userId=${userId}`);
    return todoLists || [];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch todo lists: ${error.message}`);
    }
    throw new Error('Failed to fetch todo lists: Unknown error');
  }
};