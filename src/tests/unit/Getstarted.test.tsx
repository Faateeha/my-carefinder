// src/tests/unit/GetStarted.test.tsx
import { render, screen } from '@testing-library/react';
import GetStarted from '@/app/getstarted/page'; // Adjust the import path as necessary
import Hero from '@/app/hero';
import SearchComponent from '@/app/search';
import React from 'react';

jest.mock('@/app/hero', () => {
    const MockHero: React.FC = () => <div>Hero Component</div>;
    MockHero.displayName = 'Hero'; // Add this line
    return MockHero;
  });
  
  jest.mock('@/app/search', () => {
    const MockSearchComponent: React.FC = () => <div>Search Component</div>;
    MockSearchComponent.displayName = 'SearchComponent'; // Add this line
    return MockSearchComponent;
  });

describe('GetStarted Component', () => {
  it('renders GetStarted component and its children correctly', () => {
    render(<GetStarted />);

    // Check if Hero component is rendered
    expect(screen.getByText('Hero Component')).toBeInTheDocument();

    // Check if SearchComponent is rendered
    expect(screen.getByText('Search Component')).toBeInTheDocument();

    // Check for text content
    expect(screen.getByText('Care Finder')).toBeInTheDocument();
    expect(screen.getByText('Find the nearest hospital to you')).toBeInTheDocument();
    expect(screen.getByText('Easily search for hospitals based on location and other criteria.')).toBeInTheDocument();
  });
});
