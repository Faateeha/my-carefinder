// src/tests/unit/GetStarted.test.tsx
import { render, screen } from '@testing-library/react';
import GetStarted from '@/app/getstarted/page';
import Hero from '@/app/hero';
import SearchComponent from '@/app/search';
import React from 'react';

jest.mock('@/app/hero', () => {
    const MockHero: React.FC = () => <div>Hero Component</div>;
    MockHero.displayName = 'Hero'; 
    return MockHero;
  });
  
  jest.mock('@/app/search', () => {
    const MockSearchComponent: React.FC = () => <div>Search Component</div>;
    MockSearchComponent.displayName = 'SearchComponent'; 
    return MockSearchComponent;
  });

describe('GetStarted Component', () => {
  it('renders GetStarted component and its children correctly', () => {
    render(<GetStarted />);

    
    expect(screen.getByText('Hero Component')).toBeInTheDocument();

    
    expect(screen.getByText('Search Component')).toBeInTheDocument();

    // Check for text content
    expect(screen.getByText('Care Finder')).toBeInTheDocument();
    expect(screen.getByText('Find the nearest hospital to you')).toBeInTheDocument();
    expect(screen.getByText('Easily search for hospitals based on location and other criteria.')).toBeInTheDocument();
  });
});
