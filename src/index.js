import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root'),
);
