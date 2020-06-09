import React from 'react';
import './App.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from './utils/axios';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Shop from './components/layout/Shop';
import Blog from './components/layout/Blog';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="" id="wrapper">

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
