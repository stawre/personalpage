import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(key) {
    if (key === "home") {
      window.location.assign("/");
    }
    if (key === "profile") {
      window.location.assign("/profile");
    }
    if (key === "contact") {
      window.location.assign("/contact");
    }
    if (key === "resume") {
      window.location.assign("/resume");
    }
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={this.props.active} id="uncontrolled-tab-example" onSelect={this.redirect}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "0.5rem",
            fontFamily: "palatino"
          }}
        >
          <Tab eventKey="home" title="Home">
          </Tab>
          <Tab eventKey="profile" title="Profile">
          </Tab>
          <Tab eventKey="contact" title="Contact">
            {console.log("Hello")}
          </Tab>
          <Tab eventKey="resume" title="Resume/CV">
          </Tab>
        </Tabs>
      </div>
    )
  }
}
export default NavBar;
