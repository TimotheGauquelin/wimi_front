export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  todoListId: number;
  priority: string;
  dueDate: string;
  createdAt: string;
}

