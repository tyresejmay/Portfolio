import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('portfolio app', () => {
  it('renders the hero and primary sections', async () => {
    window.history.pushState({}, '', import.meta.env.BASE_URL);
    const { router } = await import('./routes/router');

    render(<RouterProvider router={router} />);

    expect(screen.getByRole('heading', { name: /tyrese may/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /project work/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /computer science foundation/i })).toBeInTheDocument();
  });
});

