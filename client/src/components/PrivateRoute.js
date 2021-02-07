import { func } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useAuthState } from 'helpers/firebase'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, isLoading] = useAuthState()
  const isAuthenticated = user !== null

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoading) return null
        return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: func,
}

export default PrivateRoute
