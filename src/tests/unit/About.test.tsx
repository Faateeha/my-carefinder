import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '@/app/about/page'; // Adjust the import path as necessary

// Mock the Hero component
jest.mock('@/app/hero', () => {
  const MockHero: React.FC = () => <div>Hero Component</div>;
  MockHero.displayName = 'Hero';
  return MockHero;
});

describe('About Component', () => {
  it('renders About component and its children correctly', () => {
    render(<About />);

    // Check if Hero component is rendered
    expect(screen.getByText('Hero Component')).toBeInTheDocument();

    // Check for main headings and texts
    expect(screen.getByText('About Carefinder')).toBeInTheDocument();
    expect(screen.getByText(/Carefinder is a comprehensive platform/i)).toBeInTheDocument();
    expect(screen.getByText('Purpose')).toBeInTheDocument();
    expect(screen.getByText(/Carefinder was created to address the challenge/i)).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('User Benefits')).toBeInTheDocument();
    expect(screen.getByText(/Carefinder empowers users/i)).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText(/Carefinder is built using modern web technologies/i)).toBeInTheDocument();
    expect(screen.getByText('Future Plans')).toBeInTheDocument();
    expect(screen.getByText(/We are continuously working on improving Carefinder/i)).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText(/If you have any questions, feedback, or need support/i)).toBeInTheDocument();
  });
});
