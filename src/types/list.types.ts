import { Task } from "./task.types";

export interface TaskList {
  id: number;
  title: string;
  userId: number;
  color: string;
  createdAt: string;
  todos?: Task[];
}

