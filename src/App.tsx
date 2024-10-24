import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './route'
import Theme from './theme/theme'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux'
import { notificaAirbrake } from './Airbrake'

function App() {

  useEffect(() => {
    notificaAirbrake()
  }, [])

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
