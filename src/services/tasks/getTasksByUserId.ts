import { api } from "../api";

export const getTasksByUserId = async (userId: number) => {
    const tasks = await api.get(`/tasks?userId=${userId}`);
    return tasks;
}