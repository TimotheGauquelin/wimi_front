import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectInput from './SelectInput';

describe('SelectInput', () => {
  const mockOptions = [
    { value: 'none', label: 'Sorting by priority' },
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' }
  ];

  it('should render all options correctly', () => {
    render(<SelectInput value="none" onChange={() => {}} options={mockOptions} />);

    expect(screen.getByText('Sorting by priority')).toBeInTheDocument();
    expect(screen.getByText('Ascending')).toBeInTheDocument();
    expect(screen.getByText('Descending')).toBeInTheDocument();
  });

  it('should display the selected value', () => {
    render(<SelectInput value="asc" onChange={() => {}} options={mockOptions} />);

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('asc');
  });

  it('should call onChange when selecting a different option', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<SelectInput value="none" onChange={handleChange} options={mockOptions} />);

    const select = screen.getByRole('combobox');
    await user.selectOptions(select, 'desc');

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should disable the select when disabled is true', () => {
    render(<SelectInput value="none" onChange={() => {}} options={mockOptions} disabled={true} />);

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toHaveAttribute('disabled');
  });
});

