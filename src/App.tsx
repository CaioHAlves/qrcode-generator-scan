import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './route'
import Theme from './theme/theme'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Theme>
      </PersistGate>
    </Provider>
  );
}

export default App;
