import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { DiagnosticCategory } from 'typescript';
import { CategoryOne } from '../../category.one/category.one';

describe('Given Home component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <CategoryOne />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('Home', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
