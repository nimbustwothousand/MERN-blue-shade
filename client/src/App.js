import React from 'react';
import './App.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './auth/context';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Shop from './components/layout/Shop';
import Blog from './components/layout/Blog';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import Dashboard from './components/layout/admin/Dashboard';
import Login from './components/layout/admin/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import ROUTES from './utils/routes';

function App() {

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
