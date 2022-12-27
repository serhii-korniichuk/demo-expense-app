import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterComponent } from './router';

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(<>
  <Provider store={store}>
    <RouterComponent />
  </Provider>
</>);
