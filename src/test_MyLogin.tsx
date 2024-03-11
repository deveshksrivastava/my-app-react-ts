import { render, screen, fireEvent } from '@testing-library/react';
import MyLogin from './MyLogin';

test('handleLogin should save token to localStorage and navigate to home page', async () => {
  // Mock the loginPopup function
  const mockLoginPopup = jest.fn().mockResolvedValueOnce({ token: 'mockToken' });
  const mockInstance = { loginPopup: mockLoginPopup };
  jest.spyOn(window, 'localStorage', 'get').mockReturnValueOnce(null);
  jest.spyOn(window, 'localStorage', 'set');

  render(<MyLogin instance={mockInstance} />);

  const loginButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(mockLoginPopup).toHaveBeenCalledTimes(1);
    expect(window.localStorage.getItem('token')).toBe(JSON.stringify({ token: 'mockToken' }));
    expect(navigate).toHaveBeenCalledWith('/', { replace: true });
  });
});
