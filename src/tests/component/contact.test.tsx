// src/tests/component/contact.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '@/app/contact/page'; // Adjust path if necessary
import { ChakraProvider } from '@chakra-ui/react';

// Helper function to render components with ChakraProvider
const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ChakraProvider>{ui}</ChakraProvider>);
};

test('renders the Contact page with correct elements', () => {
  renderWithProviders(<Contact />);

  // Check if the heading is present
  expect(screen.getByText(/get in touch/i)).toBeInTheDocument();

  // Check if the introductory text is present
  expect(screen.getByText(/our team would love to hear from you/i)).toBeInTheDocument();

  // Check if the form fields are present
  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();

  // Check if the submit button is present
  expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();

  // Check if the image is present
  expect(screen.getByAltText(/carefinder/i)).toBeInTheDocument();
});
