import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { Sales } from './sales';

describe('Given TodoPage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Sales />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('Sales', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
