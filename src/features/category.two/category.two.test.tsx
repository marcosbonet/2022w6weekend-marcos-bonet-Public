import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { CategoryTwo } from './category.two';

describe('Given Home component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <CategoryTwo />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('Category', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
