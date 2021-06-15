import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders Login Page', () => {
  const { getByText } = render(<LoginPage />);
  const linkElement = getByText(/Project System/i);
  expect(linkElement).toBeInTheDocument();
});