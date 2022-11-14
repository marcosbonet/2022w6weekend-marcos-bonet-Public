import { render, screen } from '@testing-library/react';
import { ClothesList } from './list.clothes';
import { MemoryRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { appStore } from '../../../redux/Store/store';

describe('Given the Clothes list component', () => {
    describe('when we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <ClothesList clothes={[]} />
                    </Provider>
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
