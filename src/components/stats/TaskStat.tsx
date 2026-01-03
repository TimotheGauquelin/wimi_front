import React from 'react';

interface TaskStatProps {
    value: number;
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
    className: string;
}

const TaskStat: React.FC<TaskStatProps> = ({ title, value, subtitle, icon, className }) => {
    return (
        <div className={`rounded-md p-4 flex items-start gap-2 ${className}`}>
            {icon && (
                <div className="w-15 h-15 rounded-full overflow-hidden flex items-center justify-center">
                    {icon}
                </div>
            )}
            <div className="flex flex-col">
                <span className="text-2xl font-bold">{value}</span>
                <span className="text-base font-bold">{title}</span>
                <span className="text-base font-light">{subtitle}</span>
            </div>
        </div>
    );
};

export default TaskStat;