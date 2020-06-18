import React, { useContext } from 'react';
import './App.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './auth/context';
import Loading from './components/Loading';
import Header from './components/layout/Header';
import Landing from './components/pages/public/Landing';
import Shop from './components/pages/public/shop/Shop';
import Blog from './components/pages/public/Blog';
import Contact from './components/pages/public/Contact';
import Footer from './components/layout/Footer';
import Dashboard from './components/pages/admin/Dashboard';
import Login from './components/pages/admin/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import ROUTES from './utils/routes';

function App() {
  const auth = useContext(AuthContext); // auth = { state, dispatch, ACTIONS }
  if (auth.state.isLoading) return <Loading />
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.root}>
          <Header />
          <Landing />
        </Route>
        <Route exact path={ROUTES.shop.root}>
          <Header />
          <Shop />
        </Route>
        <Route exact path={ROUTES.blog.root}>
          <Header />
          <Blog />
        </Route>
        <Route exact path={ROUTES.contact.root}>
          <Header />
          <Contact />
        </Route>
        <Route exact path={ROUTES.admin.root}>
          <Login />
        </Route>
        <PrivateRoute exact path={ROUTES.admin.dashboard} component={Dashboard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
