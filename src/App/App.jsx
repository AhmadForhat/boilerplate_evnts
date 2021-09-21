import React, { Suspense, StrictMode } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import store from 'App/store'
import GlobalStyle from 'App/styles/Global'
import ThemesProviderUi from './styles/ThemeProviderUi'
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
            <ThemesProviderUi>
              <GlobalStyle />
              <Switch>
                <RouterComponent routes={routes} />
                <Redirect
                  from='*'
                  to='/'
                />
              </Switch>
            </ThemesProviderUi>
          </Provider>
        </Suspense>
      </Router>
    </StrictMode>
  );
}

export default App;
