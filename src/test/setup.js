import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Lenis since it depends on browser scroll and window object
vi.mock('@studio-freight/lenis', () => ({
    default: vi.fn().mockImplementation(() => ({
        raf: vi.fn(),
        destroy: vi.fn(),
    })),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));
