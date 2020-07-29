import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import Education from "./education.jsx";
import Contact from "./contact.jsx";
import About from "./about.jsx";
import NavBar from "./navbar/NavBar.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";

class HomeComponent extends Component {
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
    this.state = {
      redirect: <Redirect to="/"/>
    };
  }
  redirect(route){
    let state = "";
    switch(route){
      case "Home": state = <Redirect to="/"/>;break;
      case "About": state = <Redirect to="/about"/>;break;
      case "Education": state = <Redirect to="/education"/>;break;
      case "Projects": state = <Redirect to="/projects"/>;break;
      case "Contact": state = <Redirect to="/contact"/>;break;
    }
    if(state != ""){
      this.setState({redirect: state});
    }
  }
  render(){
    return(
      <div>

        <NavBar
          title="Garet Phelps"
          pages={
            ["Home", "About", "Education", "Projects", "Contact"]
          }
          disappearOnScroll={false}
          redirect={(route) => this.redirect(route)}
        />

        <div id="content">
          <Router>
          {this.state.redirect}
            <Switch>
              <Route exact path="/">
                <Home/>  
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/education">
                <Education/>
              </Route>
              <Route exact path="/projects">
                <Projects/>
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HomeComponent />, document.getElementById("root"));
