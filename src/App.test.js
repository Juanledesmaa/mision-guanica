import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders welcome message', () => {
  render(<App />);
  const element = screen.getByText(/Welcome/i);
  expect(element).toBeInTheDocument();
});