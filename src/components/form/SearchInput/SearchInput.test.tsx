import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('should display the default placeholder when not provided', () => {
    render(<SearchInput value="" onChange={() => {}} />);

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });

  it('should display the custom placeholder when provided', () => {
    render(<SearchInput value="" onChange={() => {}} placeholder="Search by title" />);

    const input = screen.getByPlaceholderText('Search by title');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Search by title');
  });

  it('should display the value correctly', () => {
    render(<SearchInput value="test query" onChange={() => {}} />);

    const input = screen.getByDisplayValue('test query') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('test query');
  });

  it('should call onChange when typing', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<SearchInput value="" onChange={handleChange} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.type(input, 'test');

    expect(handleChange).toHaveBeenCalledTimes(4);
    expect(input).toHaveAttribute('type', 'text');
  });
});

