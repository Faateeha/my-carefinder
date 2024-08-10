import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Hero from '@/app/hero';

describe('Hero Component', () => {
  it('renders the hero image correctly', () => {
    const { getByAltText } = render(<Hero />);
    const image = getByAltText('carefinder');
    expect(image).toBeInTheDocument();
  });

  it('applies the AOS animation attribute', () => {
    const { container } = render(<Hero />);
    const divElement = container.querySelector('div[data-aos="zoom-out"]');
    expect(divElement).toBeInTheDocument();
  });
});

