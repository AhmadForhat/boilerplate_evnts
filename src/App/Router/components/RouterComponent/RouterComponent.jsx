import React from 'react'

import BuildRoute from 'App/Router/components/BuildRoute'

const RouterComponent = ({routes}) => (
  routes.map(route => (
    <BuildRoute
      key={route.name}
      component={route.component}
      path={route.path}
      exact={route.exact}
      routes={routes}
      isPrivate={route.isPrivate}
    />
  ))
)

export default RouterComponent
