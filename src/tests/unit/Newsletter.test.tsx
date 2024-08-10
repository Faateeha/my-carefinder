// src/tests/unit/Newsletter.test.tsx
import { render, screen } from '@testing-library/react'; // Adjust the import path if necessary
import Newsletter from '@/app/newsletter'; // Adjust the import path if necessary
import '@testing-library/jest-dom';
import React from 'react';

describe('Newsletter Component', () => {
  it('renders the newsletter section correctly', () => {
    render(<Newsletter />);

    // Check for the presence of the "Newsletter" header
    expect(screen.getByText('Newsletter')).toBeInTheDocument();

    // Check for the presence of the "Connecting You To Care!" text
    expect(screen.getByText('Connecting You To Care!')).toBeInTheDocument();

    // Check for the subscription instructions text
    expect(screen.getByText('Subscribe to our newsletter to get updates on our latest news')).toBeInTheDocument();

    // Check for the input field and button
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument();
  });

  it('applies AOS animation attributes', () => {
    render(<Newsletter />);

    // Check for the AOS attribute on the title
    const title = screen.getByText('Newsletter');
    expect(title).toHaveAttribute('data-aos', 'zoom-in');
  });
});
