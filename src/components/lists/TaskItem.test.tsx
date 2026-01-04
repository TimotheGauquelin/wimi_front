import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskItem from './TaskItem';
import { Task } from '@/types/task.types';

describe('TaskItem', () => {
  const mockTask: Task = {
    id: 1,
    title: 'Test Task',
    description: 'Test Description',
    completed: false,
    todoListId: 1,
    priority: 'high',
    dueDate: '2024-01-20',
    createdAt: '2024-01-15T09:00:00.000Z',
  };

  it('should display the task title', () => {
    render(<TaskItem task={mockTask} />);

    const title = screen.getByText('Test Task');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('SPAN');
    expect(title).toHaveClass('font-semibold', 'text-lg');
  });

  it('should display the due date correctly', () => {
    render(<TaskItem task={mockTask} />);

    const dueDateText = screen.getByText(/Due:/);
    expect(dueDateText).toBeInTheDocument();
    
    const dateText = new Date(mockTask.dueDate).toLocaleDateString();
    expect(screen.getByText(dateText)).toBeInTheDocument();
  });

  it('should display the priority tag', () => {
    render(<TaskItem task={mockTask} />);

    const priorityLabel = screen.getByText('Priority:');
    expect(priorityLabel).toBeInTheDocument();
    
    const priorityTag = screen.getByText('High');
    expect(priorityTag).toBeInTheDocument();
  });

  it('should render all task information correctly', () => {
    render(<TaskItem task={mockTask} />);

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText(/Due:/)).toBeInTheDocument();
    expect(screen.getByText(/Priority:/)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});

