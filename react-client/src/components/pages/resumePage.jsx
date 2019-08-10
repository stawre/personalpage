import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Navigation from '../headerComponents/navBar1';

class ResumePage extends Component {
    render() {
        return (
            <div>
                <Navigation active="resume" />
                <div 
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10rem"
                    }}
                >
                    <p 
                        style={{
                            fontFamily: "palatino",
                            color: "gray",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <center>
                            Download my resume here:
                        </center>
                    </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <a href="https://www.dropbox.com/s/f27uq8e56tqudl8/Resume.pdf?dl=1">
                        <Figure>
                            <FigureImage
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://imgur.com/z1XtHQz.png"
                            />
                        </Figure>
                    </a>
                </div>
            </div>
        );
    }
}
export default ResumePage;

