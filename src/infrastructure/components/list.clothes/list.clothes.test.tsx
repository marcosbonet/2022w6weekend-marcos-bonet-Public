import { render, screen } from '@testing-library/react';
import { ClothesList } from './components';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given the Clothes list component', () => {
    describe('when we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <ClothesList></ClothesList>
                </Router>
            );
        });
        test('then it should display the article', () => {
            const article = new RegExp('Clothes');
            const element = screen.getByText(article);
            expect(element).toBeInTheDocument();
        });
    });
});
