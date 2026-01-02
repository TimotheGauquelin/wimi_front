import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import AsideNavBar from './AsideNavBar';
import { useAuth } from '@/stores/authStore';

// Mock du store auth
vi.mock('@/stores/authStore', () => ({
  useAuth: vi.fn(),
}));

const mockNavigate = vi.fn();
const mockLocation = { pathname: '/home' };

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
  };
});

describe('AsideNavBar', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const mockLogout = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useAuth as any).mockReturnValue({
      user: mockUser,
      logout: mockLogout,
    });
  });

  it('should display user name when user is logged in', () => {
    render(
      <MemoryRouter>
        <AsideNavBar />
      </MemoryRouter>
    );
    
    const userName = screen.getByText('John Doe');
    expect(userName).toBeInTheDocument();
  });

  it('should render profile image', () => {
    render(
      <MemoryRouter>
        <AsideNavBar />
      </MemoryRouter>
    );
    
    const profileImage = screen.getByAltText('Profile');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', '/assets/images/pp.jpg');
  });

  it('should render all navigation items', () => {
    render(
      <MemoryRouter>
        <AsideNavBar />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Tasks')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('should render logout button', () => {
    render(
      <MemoryRouter>
        <AsideNavBar />
      </MemoryRouter>
    );
    
    const logoutButton = screen.getByRole('button', { name: /log out/i });
    expect(logoutButton).toBeInTheDocument();
  });

  it('should call logout and navigate when logout button is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <MemoryRouter>
        <AsideNavBar />
      </MemoryRouter>
    );
    
    const logoutButton = screen.getByRole('button', { name: /log out/i });
    await user.click(logoutButton);
    
    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});

