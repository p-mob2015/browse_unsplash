import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import HomePage from './pages/Home';
import Footer from './components/Footer';

import './styles/app.scss';

const App = () => (
  <Provider store={store}>
    <div id="app">
      <HomePage />
      <Footer />
    </div>
  </Provider>
);

export default App;
