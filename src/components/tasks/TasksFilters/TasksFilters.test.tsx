import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TasksFilters from './TasksFilters';

describe('TasksFilters', () => {
  const mockOnSearchChange = vi.fn();
  const mockOnPrioritySortChange = vi.fn();
  const mockOnDueDateSortChange = vi.fn();
  const mockOnResetFilters = vi.fn();

  const defaultProps = {
    searchQuery: '',
    prioritySort: 'none' as const,
    dueDateSort: 'none' as const,
    onSearchChange: mockOnSearchChange,
    onPrioritySortChange: mockOnPrioritySortChange,
    onDueDateSortChange: mockOnDueDateSortChange,
    onResetFilters: mockOnResetFilters
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the Filters title', () => {
    render(<TasksFilters {...defaultProps} />);

    expect(screen.getByText('Filters')).toBeInTheDocument();
  });

  it('should render the Reset Filters button', () => {
    render(<TasksFilters {...defaultProps} />);

    const resetButton = screen.getByText('Reset Filters');
    expect(resetButton).toBeInTheDocument();
  });

  it('should call onResetFilters when Reset Filters is clicked', async () => {
    const user = userEvent.setup();
    render(<TasksFilters {...defaultProps} />);

    const resetButton = screen.getByText('Reset Filters');
    await user.click(resetButton);

    expect(mockOnResetFilters).toHaveBeenCalledTimes(1);
  });

  it('should render SearchInput with correct props', () => {
    render(<TasksFilters {...defaultProps} searchQuery="test query" />);

    const searchInput = screen.getByPlaceholderText('Search by title') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toBe('test query');
  });

  it('should render both SelectInput components', () => {
    render(<TasksFilters {...defaultProps} />);

    const selects = screen.getAllByRole('combobox');
    expect(selects).toHaveLength(2);
  });

  it('should display correct priority sort value', () => {
    render(<TasksFilters {...defaultProps} prioritySort="desc" />);

    const prioritySelect = screen.getAllByRole('combobox')[0] as HTMLSelectElement;
    expect(prioritySelect.value).toBe('desc');
  });

  it('should display correct due date sort value', () => {
    render(<TasksFilters {...defaultProps} dueDateSort="asc" />);

    const dueDateSelect = screen.getAllByRole('combobox')[1] as HTMLSelectElement;
    expect(dueDateSelect.value).toBe('asc');
  });
});

