import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { router } from './routes/router';

describe('portfolio app', () => {
  it('renders the hero and primary sections', () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByRole('heading', { name: /tyrese may portfolio/i })).toBeInTheDocument();
  });
});

