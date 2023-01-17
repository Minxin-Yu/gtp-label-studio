import { render, screen } from '@testing-library/react';
import ServicesPage from './Services';

test('renders learn react link', () => {
  render(<ServicesPage />);
  const linkElement = screen.getByText(/loading/i);

  expect(linkElement).toBeInTheDocument();
});
