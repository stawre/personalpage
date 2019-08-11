import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends Component {
    render() {
        return(
            <Navbar bg="light" expand="lg"
                style={{
                    // display: "flex",
                    margin: "0.5rem",
                    fontFamily: "palatino",
                    borderRadius: "8px"
                    // flexDirection: "row",
                    // justifyContent: "flex-end"
                }}
            >
                {   this.props.active !== "home"
                    ? <Navbar.Brand href="/">Shreyas Tawre</Navbar.Brand>
                    : null
                }
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">Portfolio</Nav.Link>
                        <Nav.Link href="/resume">Resume/CV</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navigation;