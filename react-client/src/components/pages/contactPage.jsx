import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import NavBar from '../headerComponents/navBar';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar active="contact" />
                </div>
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
            </div>
        );
    }
}
export default ContactPage;