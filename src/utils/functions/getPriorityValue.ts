export const getPriorityValue = (priority: string): number => {
    const normalizedPriority = priority.toLowerCase();
    if (normalizedPriority === "high") return 3;
    if (normalizedPriority === "medium") return 2;
    if (normalizedPriority === "low") return 1;
    return 0;
};