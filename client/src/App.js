import React, { useContext } from 'react';
import './App.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { AuthContext } from './auth/context';
import PrivateRoute from './components/auth/PrivateRoute';
import PublicRoute from './components/auth/PublicRoute';
import ROUTES from './utils/routes';
import Loading from './components/Loading';
import Landing from './components/pages/public/landing';
import Shop from './components/pages/public/shop';
import Blog from './components/pages/public/blog';
import Contact from './components/pages/public/contact';
import Footer from './components/layout/Footer';
import Dashboard from './components/pages/admin/dashboard';
import Login from './components/pages/admin/login';

function App() {
  const auth = useContext(AuthContext); // auth = { state, dispatch, ACTIONS }
  if (auth.state.isLoading) return <Loading />
  return (
    <Router>
      <Helmet defaultTitle="Blue Shade Shoes" titleTemplate="%s | Blue Shade Shoes" />
      <Switch>
        <PublicRoute exact path={ROUTES.root} component={Landing} />
        <PublicRoute exact path={ROUTES.shop.root} component={Shop} />
        <PublicRoute exact path={ROUTES.blog.root} component={Blog} />
        <PublicRoute exact path={ROUTES.contact.root} component={Contact} />
        <Route exact path={ROUTES.admin.root} component={Login} />
        <PrivateRoute exact path={ROUTES.admin.dashboard} component={Dashboard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
