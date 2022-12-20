import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app';
import { store } from './core/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
