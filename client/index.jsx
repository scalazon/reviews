import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reviews')
);
