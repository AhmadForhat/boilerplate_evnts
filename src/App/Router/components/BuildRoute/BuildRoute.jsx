import { isAuthenticated } from 'App/utils/auth'
import { Route, Redirect } from 'react-router-dom'

const BuildRoute = ({
  component,
  path,
  routes,
  exact,
  isPrivate
}) => {
  const Component = component
  const hasAccess = !isPrivate ? true : isAuthenticated()

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => (
        hasAccess ? (
          <Component
            routes={routes}
            {...props}
          />
        ) : (
          <Redirect
            to='/login'
          />
        )
      )}
    />
  )
}

export default BuildRoute
