import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainBlock from './MainBlock';

describe('MainBlock', () => {
  it('should render the main element', () => {
    render(
      <MemoryRouter>
        <MainBlock />
      </MemoryRouter>
    );
    
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});

