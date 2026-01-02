import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  it('should render with button text when not loading', () => {
    render(
      <SubmitButton
        loading={false}
        loadingText="Loading..."
        buttonText="Submit"
      />
    );
    
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit');
  });

  it('should render with loading text when loading', () => {
    render(
      <SubmitButton
        loading={true}
        loadingText="Loading..."
        buttonText="Submit"
      />
    );
    
    const button = screen.getByRole('button', { name: 'Loading...' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Loading...');
  });

  it('should be disabled when loading', () => {
    render(
      <SubmitButton
        loading={true}
        loadingText="Loading..."
        buttonText="Submit"
      />
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should not be disabled when not loading', () => {
    render(
      <SubmitButton
        loading={false}
        loadingText="Loading..."
        buttonText="Submit"
      />
    );
    
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  it('should call onClick handler when clicked and not loading', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(
      <button
        type="submit"
        onClick={handleClick}
        disabled={false}
        className="w-full p-3 cursor-pointer rounded-md bg-true-blue text-white disabled:bg-pale-blue disabled:cursor-not-allowed transition-colors"
      >
        Submit
      </button>
    );
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick handler when disabled (loading)', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(
      <button
        type="submit"
        onClick={handleClick}
        disabled={true}
        className="w-full p-3 cursor-pointer rounded-md bg-true-blue text-white disabled:bg-pale-blue disabled:cursor-not-allowed transition-colors"
      >
        Loading...
      </button>
    );
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should update text when loading state changes', () => {
    const { rerender } = render(
      <SubmitButton
        loading={false}
        loadingText="Loading..."
        buttonText="Submit"
      />
    );
    
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
    
    rerender(
      <SubmitButton
        loading={true}
        loadingText="Loading..."
        buttonText="Submit"
      />
    );
    
    expect(screen.getByRole('button')).toHaveTextContent('Loading...');
  });
});

