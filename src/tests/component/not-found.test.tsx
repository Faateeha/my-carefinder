import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundPage from '@/app/not-found';
import { ChakraProvider } from '@chakra-ui/react';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ChakraProvider>{ui}</ChakraProvider>);
};

describe('NotFoundPage Component', () => {
  beforeEach(() => {
    // Mock resize event
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024 // Default to larger screen size
    });
    global.dispatchEvent(new Event('resize'));
  });

  test('does not render the image on small screens', () => {
    // Simulate small screen size
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 480 // Set to small screen size
    });
    global.dispatchEvent(new Event('resize'));

    renderWithProviders(<NotFoundPage />);
    const image = screen.queryByAltText(/not found/i);
    expect(image).not.toBeInTheDocument(); // Image should not be in the document on small screens
  });

  test('renders the image on medium and larger screens', () => {
    // Simulate medium screen size
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024 // Set to larger screen size
    });
    global.dispatchEvent(new Event('resize'));

    renderWithProviders(<NotFoundPage />);
    const image = screen.queryByAltText(/not found/i);
    expect(image).toBeInTheDocument(); // Image should be in the document on larger screens
  });
});

