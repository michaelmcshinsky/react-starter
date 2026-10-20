import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
  it('renders the about heading and feature list', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'About', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText('Vite 6')).toBeInTheDocument();
    expect(screen.getByText('React 19')).toBeInTheDocument();
  });
});
