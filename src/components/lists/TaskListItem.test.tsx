import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskListItem from './TaskListItem';
import { TaskList } from '@/types/list.types';
import { Task } from '@/types/task.types';

describe('TaskListItem', () => {
  const mockTaskList: TaskList = {
    id: 1,
    title: 'Test List',
    userId: 1,
    color: '#3b82f6',
    createdAt: '2024-01-15T09:00:00.000Z',
  };

  it('should display the list title', () => {
    render(<TaskListItem item={mockTaskList} />);

    const title = screen.getByText('Test List');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H3');
    expect(title).toHaveClass('font-bold');
  });

  it('should display "Done tasks: 0/5" when no tasks are completed', () => {
    const tasks: Task[] = [
      { id: 1, title: 'Task 1', description: 'Desc 1', completed: false, todoListId: 1, priority: 'high', dueDate: '2024-01-20', createdAt: '2024-01-15' },
      { id: 2, title: 'Task 2', description: 'Desc 2', completed: false, todoListId: 1, priority: 'medium', dueDate: '2024-01-21', createdAt: '2024-01-16' },
      { id: 3, title: 'Task 3', description: 'Desc 3', completed: false, todoListId: 1, priority: 'low', dueDate: '2024-01-22', createdAt: '2024-01-17' },
      { id: 4, title: 'Task 4', description: 'Desc 4', completed: false, todoListId: 1, priority: 'high', dueDate: '2024-01-23', createdAt: '2024-01-18' },
      { id: 5, title: 'Task 5', description: 'Desc 5', completed: false, todoListId: 1, priority: 'medium', dueDate: '2024-01-24', createdAt: '2024-01-19' },
    ];

    const listWithTasks = { ...mockTaskList, todos: tasks };
    render(<TaskListItem item={listWithTasks} />);

    expect(screen.getByText(/Done tasks:/)).toBeInTheDocument();
    expect(screen.getByText('0/5')).toBeInTheDocument();
  });

  it('should display "Done tasks: 5/5" when all tasks are completed', () => {
    const tasks: Task[] = [
      { id: 1, title: 'Task 1', description: 'Desc 1', completed: true, todoListId: 1, priority: 'high', dueDate: '2024-01-20', createdAt: '2024-01-15' },
      { id: 2, title: 'Task 2', description: 'Desc 2', completed: true, todoListId: 1, priority: 'medium', dueDate: '2024-01-21', createdAt: '2024-01-16' },
      { id: 3, title: 'Task 3', description: 'Desc 3', completed: true, todoListId: 1, priority: 'low', dueDate: '2024-01-22', createdAt: '2024-01-17' },
      { id: 4, title: 'Task 4', description: 'Desc 4', completed: true, todoListId: 1, priority: 'high', dueDate: '2024-01-23', createdAt: '2024-01-18' },
      { id: 5, title: 'Task 5', description: 'Desc 5', completed: true, todoListId: 1, priority: 'medium', dueDate: '2024-01-24', createdAt: '2024-01-19' },
    ];

    const listWithTasks = { ...mockTaskList, todos: tasks };
    render(<TaskListItem item={listWithTasks} />);

    expect(screen.getByText(/Done tasks:/)).toBeInTheDocument();
    expect(screen.getByText('5/5')).toBeInTheDocument();
  });

  it('should apply the correct border color from item.color', () => {
    const customColor = '#10b981';
    const listWithColor = { ...mockTaskList, color: customColor };
    const { container } = render(<TaskListItem item={listWithColor} />);

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveStyle({ borderColor: customColor });
  });
});

