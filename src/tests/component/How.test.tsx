import { render, screen } from '@testing-library/react';
import HowItWorks from '@/app/how'; // Adjust the import path as necessary
import '@testing-library/jest-dom';
import React from 'react';

describe('HowItWorks Component', () => {
  it('renders the title correctly', () => {
    render(<HowItWorks />);
    const titleElement = screen.getByText(/How It Works/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders all sections with titles and descriptions', () => {
    render(<HowItWorks />);
    
    const sectionTitles = [
      'Share',
      'Get Started',
      'Markdown Support',
      'Select',
      'Search',
      'Sign Up'
    ];
    
    sectionTitles.forEach((title) => {
      const titleElement = screen.getByText(title);
      expect(titleElement).toBeInTheDocument();
    });

    const sectionDescriptions = [
      'Easily share hospital information with others.',
      'Quickly sign up and start exploring.',
      'Use markdown to format your notes and documents.',
      'Choose from a variety of options tailored to you.',
      'Search for preferred hospital name/address within your location or select from a list of nearby hospitals.',
      'Create an account to unlock full features.'
    ];

    sectionDescriptions.forEach((description) => {
      const descriptionElement = screen.getByText(description);
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});
