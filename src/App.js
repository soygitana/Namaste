  
import React from 'react';
import './App.scss';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from "./components/Home.jsx";
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Membership from './components/Membership.jsx';
import Classes from './components/Classes.jsx';
import ArticleItem from './components/ArticleItem.jsx';
import Schedule from './components/Schedule.jsx';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/membership' component={Membership} />
        <Route path='/classes' component={Classes} />
        <Route path="/articles/:id" component={ArticleItem} />
        <Route path='/schedule' component={Schedule} />
   
        {/* <Route component={NotFound} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}




export default App;