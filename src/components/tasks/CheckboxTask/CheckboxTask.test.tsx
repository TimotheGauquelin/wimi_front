import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckboxTask from './CheckboxTask';
import { Task } from '@/types/task.types';

describe('CheckboxTask', () => {
  const mockTask: Task = {
    id: 1,
    title: 'Test Task',
    description: 'Test description',
    completed: false,
    todoListId: 1,
    priority: 'high',
    dueDate: '2024-03-10',
    createdAt: '2024-01-15T08:00:00.000Z'
  };

  it('should render the checkbox', () => {
    const handleCheckboxChange = vi.fn();
    render(<CheckboxTask task={mockTask} handleCheckboxChange={handleCheckboxChange} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('should display "Not Done" when task is not completed', () => {
    const handleCheckboxChange = vi.fn();
    render(<CheckboxTask task={mockTask} handleCheckboxChange={handleCheckboxChange} />);

    expect(screen.getByText('Not Done')).toBeInTheDocument();
  });

  it('should display "Done" when task is completed', () => {
    const completedTask = { ...mockTask, completed: true };
    const handleCheckboxChange = vi.fn();
    render(<CheckboxTask task={completedTask} handleCheckboxChange={handleCheckboxChange} />);

    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('should have unchecked checkbox when task is not completed', () => {
    const handleCheckboxChange = vi.fn();
    render(<CheckboxTask task={mockTask} handleCheckboxChange={handleCheckboxChange} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('should have checked checkbox when task is completed', () => {
    const completedTask = { ...mockTask, completed: true };
    const handleCheckboxChange = vi.fn();
    render(<CheckboxTask task={completedTask} handleCheckboxChange={handleCheckboxChange} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('should call handleCheckboxChange when checkbox is clicked', async () => {
    const user = userEvent.setup();
    const handleCheckboxChange = vi.fn();
    render(<CheckboxTask task={mockTask} handleCheckboxChange={handleCheckboxChange} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(handleCheckboxChange).toHaveBeenCalledTimes(1);
  });
});

