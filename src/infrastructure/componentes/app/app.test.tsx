import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { App } from './app';
import { Provider } from 'react-redux';
import { appStorel } from '../../Store/store';

interface CryptoPlus extends Crypto {
    randomBytes: (arr: number) => void;
    subtle: SubtleCrypto;
}

Object.defineProperty(global.self, 'crypto', {
    value: {
        getRandomValues: (arr: number) =>
            (crypto as CryptoPlus).randomBytes(arr),
    },
});
(global.crypto as CryptoPlus).subtle = {} as SubtleCrypto; // this gets around the 'auth0-spa-js must run on a secure origin' error

describe('Given App component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={appStorel}>
                        <App />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('layout', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
