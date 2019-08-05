import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import ContactPage from './pages/contactPage';
import ResumePage from './pages/resumePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="routes">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/resume" component={ResumePage} />
        </div>
      </Router>
    )
  }
}
export default App;