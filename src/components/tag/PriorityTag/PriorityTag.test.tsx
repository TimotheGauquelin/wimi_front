import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PriorityTag from './PriorityTag';

describe('PriorityTag', () => {
  it('should display the priority text with first letter capitalized', () => {
    render(<PriorityTag priority="high" />);

    const tag = screen.getByText('High');
    expect(tag).toBeInTheDocument();
  });

  it('should display "Medium" when priority is medium', () => {
    render(<PriorityTag priority="medium" />);

    const tag = screen.getByText('Medium');
    expect(tag).toBeInTheDocument();
  });

  it('should apply correct styles for high priority', () => {
    const { container } = render(<PriorityTag priority="high" />);

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveStyle({ backgroundColor: '#FFE0DB', color: '#FF383C' });
  });

  it('should apply default styles for unknown priority', () => {
    const { container } = render(<PriorityTag priority="unknown" />);

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveStyle({ backgroundColor: '#F2F2F2', color: '#2A3342' });
  });

  it('should handle case-insensitive priority (HIGH)', () => {
    const { container } = render(<PriorityTag priority="HIGH" />);

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveStyle({ backgroundColor: '#FFE0DB', color: '#FF383C' });
    expect(screen.getByText('HIGH')).toBeInTheDocument();
  });
});