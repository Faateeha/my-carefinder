import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '@/app/about/page';
import { ChakraProvider } from '@chakra-ui/react';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ChakraProvider>{ui}</ChakraProvider>);
};

describe('About Component', () => {
  test('renders the About heading', () => {
    renderWithProviders(<About />);
    const heading = screen.getByText(/About Carefinder/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the main description', () => {
    renderWithProviders(<About />);
    const description = screen.getByText(/Carefinder is a comprehensive platform designed to help users find,/i);
    expect(description).toBeInTheDocument();
  });

  test('renders the Purpose section', () => {
    renderWithProviders(<About />);
    const purposeHeading = screen.getByText(/Purpose/i);
    expect(purposeHeading).toBeInTheDocument();
    
    const purposeDescription = screen.getByText(/With the growing need for accessible healthcare information,/i);
    expect(purposeDescription).toBeInTheDocument();
  });

  test('renders the Features section with list items', () => {
    renderWithProviders(<About />);
    const featuresHeading = screen.getByText(/Features/i);
    expect(featuresHeading).toBeInTheDocument();
    
    const listItems = [
      '🔍 Search Hospitals:',
      '📄 Export Information:',
      '📤 Share:',
      '🗺️ Map View:'
    ];

    listItems.forEach(item => {
      const listItem = screen.getByText(new RegExp(item, 'i'));
      expect(listItem).toBeInTheDocument();
    });
  });

  test('renders the Contact Us section with a link', () => {
    renderWithProviders(<About />);
    const contactHeading = screen.getByText(/Contact Us/i);
    expect(contactHeading).toBeInTheDocument();
    
    const contactLink = screen.getByRole('link', { name: /contact us/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});

