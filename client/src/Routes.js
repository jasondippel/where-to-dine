import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'components'
import Home from 'pages/Home'
import Places from 'pages/Places'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <PrivateRoute exact path="/my-places" component={Places} />
  </Switch>
)

export default Routes
