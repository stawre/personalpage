import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Card from 'react-bootstrap/Card'
import Navigation from '../headerComponents/navBar1';

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navigation active="profile"/>
                </div>
                <center>
                    <div 
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column"
                        }}
                    >
                        <h2 style={{fontFamily: "palatino", color: "black", margin: "1rem"}}>
                            iOS Applications
                        </h2>
                        <Card class="shadow-lg p-3 mb-5 bg-white rounded" 
                            style={{
                            width: "fit-content", 
                            margin: "2rem", 
                            alignSelf: "center", 
                            boxShadow: "0 0 25px hsla(0, 0%, 0%, 0.40)"
                            }}
                        >
                            <h4 style={{fontFamily: "palatino", color: "black", margin: "1rem"}}>
                            Tipster
                            </h4>
                            <p 
                                style={{
                                    fontFamily: "palatino",
                                    color: "gray",
                                    margin: "1rem",
                                    marginTop: "0rem"
                                }}
                            >
                                The first iOS application I ever built - a tip calculator.
                            </p>
                            <Figure id="tipster">
                                <FigureImage
                                    src="http://i.imgur.com/iSsoRD2.gif"
                                    style={{margin: "1rem"}}
                                />
                            </Figure>
                        </Card>
                        <Card class="shadow-lg p-3 mb-5 bg-white rounded" 
                            style={{
                            width: "fit-content", 
                            margin: "2rem", 
                            alignSelf: "center", 
                            boxShadow: "0 0 25px hsla(0, 0%, 0%, 0.40)"
                            }}
                        >
                            <h4 style={{fontFamily: "palatino", color: "black", margin: "1rem"}}>
                            Twitter Client
                            </h4>
                            <p 
                                style={{
                                    fontFamily: "palatino",
                                    color: "gray",
                                    margin: "1rem",
                                    marginTop: "0rem"
                                }}
                            >
                                My first experiment using a third party API - a Twitter client.
                            </p>
                            <Figure id="twitter">
                                <FigureImage
                                    src="http://imgur.com/3ly6EKN.gif"
                                    style={{margin: "1rem"}}
                                />
                            </Figure>
                        </Card>
                        <Card class="shadow-lg p-3 mb-5 bg-white rounded" 
                            style={{
                            width: "fit-content", 
                            margin: "2rem", 
                            alignSelf: "center", 
                            boxShadow: "0 0 25px hsla(0, 0%, 0%, 0.40)"
                            }}
                        >
                            <h4 style={{fontFamily: "palatino", color: "black", margin: "1rem"}}>
                                Flix
                            </h4>
                            <p 
                                style={{
                                    fontFamily: "palatino",
                                    color: "gray",
                                    margin: "1rem",
                                    marginTop: "0rem"
                                }}
                            >
                                An app that uses the MovieDB api.
                            </p>
                            <Figure id="movieviewer">
                                <FigureImage
                                    src="http://imgur.com/VVvDbM4.gif"
                                    style={{margin: "1rem"}}
                                />
                            </Figure>
                        </Card>
                        <Card class="shadow-lg p-3 mb-5 bg-white rounded" 
                            style={{
                            width: "fit-content", 
                            margin: "2rem", 
                            alignSelf: "center", 
                            boxShadow: "0 0 25px hsla(0, 0%, 0%, 0.40)"
                            }}
                        >
                            <h4 style={{fontFamily: "palatino", color: "black", margin: "1rem"}}>
                                Yelp Client
                            </h4>
                            <p 
                                style={{
                                    fontFamily: "palatino",
                                    color: "gray",
                                    margin: "1rem",
                                    marginTop: "0rem"
                                }}
                            >
                                A complex application that uses multiple APIs - the Yelp Api and Mapkit.
                            </p>
                            <Figure id="yelp">
                                <FigureImage
                                    src="http://i.imgur.com/U9LW1Og.gif"
                                    style={{margin: "1rem"}}
                                />
                            </Figure>
                        </Card>
                        <Card class="shadow-lg p-3 mb-5 bg-white rounded" 
                            style={{
                            width: "fit-content", 
                            margin: "2rem", 
                            alignSelf: "center", 
                            boxShadow: "0 0 25px hsla(0, 0%, 0%, 0.40)"
                            }}
                        >
                            <h4 style={{fontFamily: "palatino", color: "black", margin: "1rem"}}>
                                Github Client
                            </h4>
                            <p 
                                style={{
                                    fontFamily: "palatino",
                                    color: "gray",
                                    margin: "1rem",
                                    marginTop: "0rem"
                                }}
                            >
                                A Github repositories browser that uses the Github API.
                            </p>
                            <Figure id="github">
                                <FigureImage
                                    src="http://imgur.com/ITdu5Ef.gif"
                                    style={{margin: "1rem"}}
                                />
                            </Figure>
                        </Card>
                    </div>
                </center>
            </div>
        );
    }
}
export default ProfilePage;