import { TaskList } from "@/types/list.types";
import { api } from "../api";

interface CreateListData {
    title: string;
    userId: number;
    color: string;
}

const createAList = async (data: CreateListData): Promise<TaskList> => {
    const response = await api.post<TaskList>("/todoLists", data);
    return response;
};

export default createAList;