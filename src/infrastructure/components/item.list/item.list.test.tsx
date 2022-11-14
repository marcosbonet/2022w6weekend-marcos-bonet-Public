import { render, screen } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';
import { ClothesType } from '../../../types/types';
import { ClothesList } from '../list.clothes/list.clothes';

describe('When we render the Item.list', () => {
    beforeEach(() => {
        const mockClothes: ClothesType = {
            id: '1',
            article: 'article',
            price: 1,
            size: 1,
            offers: true,
        };
        render(
            <Router>
                <ClothesList clothes={[mockClothes]} />
            </Router>
        );
    });
    test('then it should display the ProductListItem', () => {
        const element = screen.getByAltText(/article/i);
        expect(element).toBeInTheDocument();
    });
});
