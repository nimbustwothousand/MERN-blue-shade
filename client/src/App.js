import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './components/auth'
import { Helmet } from 'react-helmet'
import { AuthContext } from './auth/context'
import ROUTES from './utils/routes'
import Loading from './components/Loading'
import { Landing, Shop, Blog, Contact } from './components/pages'
import { Login, Dashboard } from './components/pages'

const App = () => {
  const auth = useContext(AuthContext); // auth = { state, dispatch, ACTIONS }
  if (auth.isLoading) return <Loading />
  return (
    <Router>
      <Helmet defaultTitle="Blue Shade Shoes" titleTemplate="%s | Blue Shade Shoes" />
      <Switch>
        <PublicRoute exact path={ROUTES.root} component={Landing} />
        <PublicRoute exact path={ROUTES.shop.root} component={Shop} />
        <PublicRoute exact path={ROUTES.blog.root} component={Blog} />
        <PublicRoute exact path={ROUTES.contact.root} component={Contact} />
        <PublicRoute exact path={ROUTES.admin.root} component={Login} />
        <PrivateRoute exact path={ROUTES.admin.dashboard} component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
