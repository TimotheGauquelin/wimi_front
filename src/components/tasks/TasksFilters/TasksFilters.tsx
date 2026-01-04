import SearchInput from "@/components/form/SearchInput/SearchInput";
import SelectInput from "@/components/form/SelectInput/SelectInput";

type PrioritySort = "none" | "asc" | "desc";
type DueDateSort = "none" | "asc" | "desc";
type CompletedSort = "none" | "asc" | "desc";

interface TasksFiltersProps {
    searchQuery: string;
    prioritySort: PrioritySort;
    dueDateSort: DueDateSort;
    completedSort: CompletedSort;
    onSearchChange: (value: string) => void;
    onPrioritySortChange: (value: PrioritySort) => void;
    onDueDateSortChange: (value: DueDateSort) => void;
    onCompletedSortChange: (value: CompletedSort) => void;
    onResetFilters: () => void;
}

const TasksFilters: React.FC<TasksFiltersProps> = ({
    searchQuery,
    prioritySort,
    dueDateSort,
    completedSort,
    onSearchChange,
    onPrioritySortChange,
    onDueDateSortChange,
    onCompletedSortChange,
    onResetFilters
}) => {
    return (
        <div className="p-3 rounded-md bg-black-gray">
            <div className="flex flex-row justify-between">
                <span className="text-base font-bold">Filters</span>
                <span
                    className="text-base text-true-blue cursor-pointer hover:underline"
                    onClick={() => {onResetFilters()}}
                >Reset Filters
                </span>
            </div>
            <div className="flex flex-row gap-2 grid grid-cols-5 mt-2">
                <SearchInput
                    placeholder="Search by title"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="col-span-2"
                />
                <SelectInput
                    value={prioritySort}
                    onChange={(e) => onPrioritySortChange(e.target.value as PrioritySort)}
                    options={[
                        { value: "none", label: "Sorting by priority" },
                        { value: "desc", label: "Most important first" },
                        { value: "asc", label: "Least important first" }
                    ]}
                    className="col-span-1"
                />
                <SelectInput
                    value={dueDateSort}
                    onChange={(e) => onDueDateSortChange(e.target.value as DueDateSort)}
                    options={[
                        { value: "none", label: "Sorting by due date" },
                        { value: "asc", label: "Nearest due date first" },
                        { value: "desc", label: "Earliest due date first" }
                    ]}
                    className="col-span-1"
                />
                <SelectInput
                    value={completedSort}
                    onChange={(e) => onCompletedSortChange(e.target.value as CompletedSort)}
                    options={[
                        { value: "none", label: "Sorting by status" },
                        { value: "desc", label: "Completed first" },
                        { value: "asc", label: "Not completed first" }
                    ]}
                    className="col-span-1"
                />
            </div>
        </div>
    );
};

export default TasksFilters;

