
import { render, screen } from '@testing-library/react'; 
import Newsletter from '@/app/newsletter'; 
import '@testing-library/jest-dom';
import React from 'react';

describe('Newsletter Component', () => {
  it('renders the newsletter section correctly', () => {
    render(<Newsletter />);

    
    expect(screen.getByText('Newsletter')).toBeInTheDocument();

    
    expect(screen.getByText('Connecting You To Care!')).toBeInTheDocument();

    
    expect(screen.getByText('Subscribe to our newsletter to get updates on our latest news')).toBeInTheDocument();

   
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument();
  });

  it('applies AOS animation attributes', () => {
    render(<Newsletter />);

    
    const title = screen.getByText('Newsletter');
    expect(title).toHaveAttribute('data-aos', 'zoom-in');
  });
});
