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
import Admin from './components/layout/Admin';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header />
          <main id="wrapper">

            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/admin" component={Admin} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
