import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../sections/Hero';

// Mock Framer Motion to avoid animation complexity in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
        h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
        p: ({ children, ...props }) => <p {...props}>{children}</p>,
        span: ({ children, ...props }) => <span {...props}>{children}</span>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

describe('Hero Section', () => {
    it('renders the correct name from resumeData', () => {
        render(<Hero />);
        expect(screen.getByText(/Aman Sharma/i)).toBeInTheDocument();
    });

    it('renders the call to action button', () => {
        render(<Hero />);
        const linkElement = screen.getByText(/Check out my work!/i);
        expect(linkElement).toBeInTheDocument();
    });
});
