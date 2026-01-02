import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BsFillHouseFill } from 'react-icons/bs';
import AsideNavBarItem from './AsideNavBarItem';

describe('AsideNavBarItem', () => {
  const mockCategory = {
    url: '/home',
    title: 'Home'
  };

  it('should render the link with correct URL', () => {
    render(
      <MemoryRouter>
        <AsideNavBarItem category={mockCategory} active={false} Icon={BsFillHouseFill} />
      </MemoryRouter>
    );
    
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/home');
  });

  it('should display the category title', () => {
    render(
      <MemoryRouter>
        <AsideNavBarItem category={mockCategory} active={false} Icon={BsFillHouseFill} />
      </MemoryRouter>
    );
    
    const title = screen.getByText('Home');
    expect(title).toBeInTheDocument();
  });

  it('should render the icon', () => {
    const { container } = render(
      <MemoryRouter>
        <AsideNavBarItem category={mockCategory} active={false} Icon={BsFillHouseFill} />
      </MemoryRouter>
    );
    
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });
});

