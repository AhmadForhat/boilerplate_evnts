import React, { Suspense, StrictMode } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import store from 'App/store'
import {
  getRoutes,
  RouterComponent
} from './Router'

const App = () => {
  const routes = getRoutes()

  return (
    <StrictMode>
      <Router>
        <Suspense fallback={<div />}>
          <Provider store={store}>
            <Switch>
              <RouterComponent routes={routes} />
              <Redirect
                from='*'
                to='/'
              />
            </Switch>
          </Provider>
        </Suspense>
      </Router>
    </StrictMode>
  );
}

export default App;
