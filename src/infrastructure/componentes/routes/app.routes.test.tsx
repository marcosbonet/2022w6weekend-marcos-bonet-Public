import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

describe('Given AppRoutes component', () => {
    describe('When we render the component And the route is CategoryOne', () => {
        beforeEach(() => {
            render(
                <Router initialEntries={['/', '/todo']} initialIndex={0}>
                    <AppRoutes />
                </Router>
            );
        });
        test('Then it should display the CategoryOne', () => {
            const title = new RegExp('Category', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
