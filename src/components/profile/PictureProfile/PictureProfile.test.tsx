import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PictureProfile from './PictureProfile';

describe('PictureProfile', () => {
  it('should display image with required src attribute', () => {
    render(<PictureProfile src="/test-avatar.jpg" alt="Test Avatar" />);

    const image = screen.getByAltText('Test Avatar');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-avatar.jpg');
  });

  it('should display image with required alt attribute', () => {
    render(<PictureProfile src="/test-avatar.jpg" alt="User Profile Picture" />);

    const image = screen.getByAltText('User Profile Picture');
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
  });

  it('should apply default width and height when not provided', () => {
    render(<PictureProfile src="/test-avatar.jpg" alt="Test Avatar" />);

    const container = screen.getByAltText('Test Avatar').parentElement;
    expect(container).toHaveStyle({ width: '80px', height: '80px' });
  });

  it('should apply custom width when provided as number', () => {
    render(<PictureProfile src="/test-avatar.jpg" alt="Test Avatar" width={120} />);

    const container = screen.getByAltText('Test Avatar').parentElement;
    expect(container).toHaveStyle({ width: '120px' });
  });

  it('should apply custom height when provided as number', () => {
    render(<PictureProfile src="/test-avatar.jpg" alt="Test Avatar" height={150} />);

    const container = screen.getByAltText('Test Avatar').parentElement;
    expect(container).toHaveStyle({ height: '150px' });
  });

  it('should apply default border width when not provided', () => {
    render(<PictureProfile src="/test-avatar.jpg" alt="Test Avatar" />);

    const image = screen.getByAltText('Test Avatar');
    expect(image).toHaveStyle({ border: '4px solid #2F65DB' });
  });

  it('should apply custom border width when provided', () => {
    render(<PictureProfile src="/test-avatar.jpg" alt="Test Avatar" borderWidth={6} />);

    const image = screen.getByAltText('Test Avatar');
    expect(image).toHaveStyle({ border: '6px solid #2F65DB' });
  });

  it('should apply default border color when not provided', () => {
    render(<PictureProfile src="/test-avatar.jpg" alt="Test Avatar" />);

    const image = screen.getByAltText('Test Avatar');
    expect(image).toHaveStyle({ border: '4px solid #2F65DB' });
  });

  it('should apply custom border color when provided', () => {
    render(<PictureProfile src="/test-avatar.jpg" alt="Test Avatar" borderColor="#FF383C" />);

    const image = screen.getByAltText('Test Avatar');
    expect(image).toHaveStyle({ border: '4px solid #FF383C' });
  });

  it('should apply all custom dimensions and border properties together', () => {
    render(
      <PictureProfile
        src="/test-avatar.jpg"
        alt="Test Avatar"
        width={100}
        height={100}
        borderWidth={8}
        borderColor="#DEF5FF"
      />
    );

    const container = screen.getByAltText('Test Avatar').parentElement;
    const image = screen.getByAltText('Test Avatar');

    expect(container).toHaveStyle({ width: '100px', height: '100px' });
    expect(image).toHaveStyle({ border: '8px solid #DEF5FF' });
  });
});

