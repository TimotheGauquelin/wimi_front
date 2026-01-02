import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextError from './TextError';

describe('TextError', () => {
  it('should not render when error is null', () => {
    const { container } = render(<TextError error={null} />);
    
    expect(container.firstChild).toBeNull();
  });

  it('should not render when error is empty string', () => {
    const { container } = render(<TextError error="" />);
    
    expect(container.firstChild).toBeNull();
  });

  it('should render error message when error is provided', () => {
    render(<TextError error="Email and/or password are incorrect" />);
    
    const errorMessage = screen.getByText(/Email and\/or password are incorrect/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

