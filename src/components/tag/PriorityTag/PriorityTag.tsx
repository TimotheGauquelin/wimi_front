import React from 'react';

interface PriorityTagProps {
    priority: string;
    className?: string;
}

const PriorityTag: React.FC<PriorityTagProps> = ({ priority, className = '' }) => {
    const getPriorityStyles = (priority: string) => {
        const normalizedPriority = priority.toLowerCase();
        
        switch (normalizedPriority) {
            case 'high':
                return {
                    backgroundColor: '#FFE0DB',
                    color: '#FF383C'
                };
            case 'medium':
                return {
                    backgroundColor: '#FFF7D3',
                    color: '#D97706'
                };
            case 'low':
                return {
                    backgroundColor: '#DEF5FF',
                    color: '#2F65DB'
                };
            default:
                return {
                    backgroundColor: '#F2F2F2',
                    color: '#2A3342'
                };
        }
    };

    const styles = getPriorityStyles(priority);

    return (
        <div
            className={`px-2 py-1 rounded-md text-sm font-semibold inline-block ${className}`}
            style={styles}
        >
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </div>
    );
};

export default PriorityTag;

