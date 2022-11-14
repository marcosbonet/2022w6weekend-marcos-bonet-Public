import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { App } from './infrastructure/components/app/app';
import './index.css';
import { Provider } from 'react-redux';
import { appStore } from './redux/Store/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Provider store={appStore}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
