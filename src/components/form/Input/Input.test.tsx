import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input', () => {
  it('should display the label correctly', () => {
    render(<Input label="Email" placeholder="email@example.com" type="email" />);
    
    const label = screen.getByText('Email');

    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('LABEL');
  });

  it('should display the placeholder correctly', () => {
    render(<Input label="Email" placeholder="email@example.com" type="email" />);
    
    const input = screen.getByPlaceholderText('email@example.com');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'email@example.com');
  });

  it('should allow typing text', async () => {
    const user = userEvent.setup();
    render(<Input label="Email" placeholder="email@example.com" type="email" />);
    
    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.type(input, 'test@example.com');
    
    expect(input.value).toBe('test@example.com');
  });

  it('should associate the label to the input correctly', () => {
    render(<Input label="Email" placeholder="email@example.com" type="email" />);
    
    const label = screen.getByText('Email');
    const input = screen.getByRole('textbox');
    
    expect(label).toHaveAttribute('for', 'email');
    expect(input).toHaveAttribute('id', 'email');
    
    const inputByLabel = screen.getByLabelText('Email');
    expect(inputByLabel).toBe(input);
  });
});

