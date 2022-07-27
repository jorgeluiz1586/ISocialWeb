import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './WebUI/Pages/AppPage/App';
import 'normalize.css/normalize.css';
import './index.css';
import { Provider } from 'react-redux';
import store from './Infrastructure/Data/Store/Index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>,
)
