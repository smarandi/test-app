
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './app/Store';
import Splash from './app/component/Splash/Splash';

/**
 * Root component wrapped in <Provider>
 *   to access redux store
 */
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Splash />
      </Provider>
    );
  }
}

export default App;
