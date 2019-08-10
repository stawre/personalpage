import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Card from 'react-bootstrap/Card'
import Navigation from '../headerComponents/navBar1';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Navigation active="home"/>
        </div>
        <center>
          <Card class="shadow-lg p-3 mb-5 bg-white rounded" 
            style={{
              width: "fit-content", 
              margin: "2rem", 
              alignSelf: "center", 
              boxShadow: "0 0 25px hsla(0, 0%, 0%, 0.40)"
            }}
          >
            <div 
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem"
              }}
            >
              <Figure>
                <FigureImage
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://i.imgur.com/LF0La7b.jpg"
                  roundedCircle="true"
                />
              </Figure>
            </div>
            <div 
              style={{
                display: "flex",
                justifyContent: "center"
              }}>
              <h1 style={{fontFamily: "palatino"}}>
                Shreyas Sanjay Tawre
              </h1>
            </div>
            <div 
              style={{
                display: "flex",
                justifyContent: "center"
              }}>
              <h5 style={{fontFamily: "palatino", color: "gray", marginLeft: "1rem", marginRight: "1rem"}}>
                <center>
                Computer Science student at The University of Texas at Austin
                </center>
              </h5>
            </div>
            <div>
              <p 
                style={{
                  fontFamily: "palatino",
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem"
                }}
              >
                <center>
                  I am an experienced full stack iOS developer skilled in building native iOS applications.
                  <br/>
                  I am also a full stack web developer skilled in building dynamic web apps. 
                </center>
              </p>
            </div>
            <p 
              style={{
                fontFamily: "palatino",
                color: "gray",
                display: "flex",
                justifyContent: "center"
              }}
            >
              Reach me via:
            </p>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <OverlayTrigger placement="bottom" 
                    overlay={
                    <Tooltip>
                        Github
                    </Tooltip>
                    }
                >
                    <a href="https://github.com/stawre">
                    <Figure>
                        <FigureImage width={50} height={50} alt="30x30" src="https://i.imgur.com/vdU8YNT.png"
                            style={{margin: "1rem"}} />
                    </Figure>
                    </a>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" 
                    overlay={
                    <Tooltip>
                        LinkedIn
                    </Tooltip>
                    }
                >
                    <a href="https://linkedin.com/in/stawre">
                    <Figure>
                        <FigureImage width={40} height={40} alt="60x60" src="https://imgur.com/XE7rHdi.png"
                            style={{margin: "1rem"}} />
                    </Figure>
                    </a>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" 
                    overlay={
                    <Tooltip>
                        StackOverflow
                    </Tooltip>
                    }
                >
                    <a href="https://stackoverflow.com/users/10074332/stawre">
                    <Figure>
                        <FigureImage width={200} height={100} alt="60x60" src="https://imgur.com/Iam5nKn.png"
                            style={{margin: "1rem"}} />
                    </Figure>
                    </a>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" 
                    overlay={
                    <Tooltip>
                        Twitter
                    </Tooltip>
                    }
                >
                    <a href="https://twitter.com/_itsmeshreyas_">
                    <Figure>
                        <FigureImage width={40} height={40} alt="70x90" src="https://imgur.com/4dF48xQ.png"
                            style={{margin: "1rem"}} />
                    </Figure>
                    </a>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" 
                    overlay={
                    <Tooltip>
                        Send an email
                    </Tooltip>
                    }
                >
                    <a href="mailto:tawre.shreyas@gmail.com">
                    <Figure>
                        <FigureImage width={50} height={50} alt="70x90" src="https://imgur.com/07mwGoi.png"
                            style={{margin: "1rem"}} />
                    </Figure>
                    </a>
                </OverlayTrigger>
            </div>
            <div>
              <p 
                style={{
                  fontFamily: "palatino",
                  color: "gray",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem"
                }}
              >
                This website was built using the following tools
              </p>
            </div>
            <div 
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <OverlayTrigger placement="top" 
                overlay={
                  <Tooltip>
                    CSS 3
                  </Tooltip>
                }
              >
                <Figure>
                <FigureImage
                  width={30}
                  height={30}
                  alt="30x30"
                  src="https://i.imgur.com/16ud5Mt.png"
                  style={{margin: "1rem"}}
                />
              </Figure>
              </OverlayTrigger>
              <OverlayTrigger placement="top" 
                overlay={
                  <Tooltip>
                    Node JS
                  </Tooltip>
                }
              >
                <Figure>
                  <FigureImage
                    width={60}
                    height={60}
                    alt="60x60"
                    src="https://i.imgur.com/FgpWYE5.png"
                    style={{margin: "1rem"}}
                  />
                </Figure>
              </OverlayTrigger>
              <OverlayTrigger placement="top" 
                overlay={
                  <Tooltip>
                    React JS
                  </Tooltip>
                }
              >
                <Figure>
                  <FigureImage
                    width={60}
                    height={60}
                    alt="60x60"
                    src="https://i.imgur.com/mwkFnv6.png"
                    style={{margin: "1rem"}}
                  />
                </Figure>
              </OverlayTrigger>
              <OverlayTrigger placement="top" 
                overlay={
                  <Tooltip>
                    React Router
                  </Tooltip>
                }
              >
                <Figure>
                  <FigureImage
                    width={70}
                    height={90}
                    alt="70x90"
                    src="https://i.imgur.com/sLlFXJ4.png"
                    style={{margin: "1rem"}}
                  />
                </Figure>
              </OverlayTrigger>
              <OverlayTrigger placement="top" 
                overlay={
                  <Tooltip>
                    Webpack
                  </Tooltip>
                }
              >
                <Figure>
                  <FigureImage
                    width={50}
                    height={50}
                    alt="70x90"
                    src="https://i.imgur.com/axBs9DP.png"
                    style={{margin: "1rem"}}
                  />
                </Figure>
              </OverlayTrigger>
            </div>
          </Card>
        </center>
      </div>
    );
  }
}
export default HomePage;