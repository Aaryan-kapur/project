import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import "../styles/Main.scss";
// import a from "../assets/1.jpg"
import b from "../assets/2.png";
import c from "../assets/3.png";
import d from "../assets/4.png";

class Main extends Component {
  state = {};
  render() {
    return (
      <div id="#2">
        <React.Fragment>
          <div className="outerMain">
            <h1 className="mainHeading">Our Offerings</h1>
            <MDBContainer className="container1">
              <MDBRow className="cardRow">
                <MDBCol sm="12" md="4" className="cardDetails cardDetails1">
                  <div className="fadeInUp wow">
                    <MDBCard className="cardMain z-depth-4">
                      <MDBCardImage
                        className="img-fluid cardImage"
                        src={c}
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          In-house development and testing of parts
                        </MDBCardTitle>
                        <MDBCardText>
                          All vital components like Pistons, Set plate, Shoe
                          plate, Drive shaft, Rotor, Valve plate, Saddle
                          bearing, Lock plate etc; required to refurbish these
                          units are developed and manufactured in-house. We have
                          also developed a Versatile Test bench for testing all
                          our refurbished units.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </MDBCol>
                <MDBCol sm="12" md="4" className="cardDetails cardDetails2">
                  <div className="fadeInUp wow " data-wow-delay="0.1s">
                    <MDBCard className="cardMain z-depth-4">
                      <MDBCardImage
                        className="img-fluid cardImage"
                        src={d}
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          High quality manufacturing process
                        </MDBCardTitle>
                        <MDBCardText>
                          These services are rendered using high grade raw
                          material with the help of cutting edge technology
                          under the guidance of an experienced team of
                          professionals. Owing to swiftness, flawless execution,
                          reliability and timeliness, these services are
                          extensively demanded in the market.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>{" "}
                  </div>
                </MDBCol>
                <MDBCol sm="12" md="4" className="cardDetails cardDetails3">
                  <div className="fadeInUp wow" data-wow-delay="0.3s">
                    {" "}
                    <MDBCard className="cardMain z-depth-4">
                      <MDBCardImage
                        className="img-fluid cardImage"
                        src={b}
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          All services under one roof
                        </MDBCardTitle>
                        <MDBCardText>
                          Ours is the only company where we manufacture all
                          vital components for the unit we repair,we have developed an indigenous
                          and unique testing facility for our refurbished units.
                          It is been designed in a way that it can be made to
                          test a vast range of pumps.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>{" "}
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Main;
