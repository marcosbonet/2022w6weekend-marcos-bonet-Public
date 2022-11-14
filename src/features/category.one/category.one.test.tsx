import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../redux/Store/store';
import { CategoryOne } from './category.one';

describe('Given Home component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <CategoryOne></CategoryOne>
                        </Router>
                    </Provider>
                </>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByRole('banner');
            expect(element).toBeInTheDocument();
        });
    });
});
