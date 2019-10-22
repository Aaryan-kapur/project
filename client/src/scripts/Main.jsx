import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import "../styles/Main.scss";
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
                      src="https://image.freepik.com/free-vector/industrial-robot-isometric-concept_1284-6047.jpg"
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle>Offerings</MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore a quaerat sed reiciendis rem similique
                     
                      </MDBCardText>
                      </MDBCardBody>
                  </MDBCard>
                      </div>
                </MDBCol>
                <MDBCol sm="12" md="4" className="cardDetails cardDetails2">
                <div className="fadeInUp wow " data-wow-delay='0.1s'>
                  <MDBCard className="cardMain z-depth-4">
                    <MDBCardImage
                      className="img-fluid cardImage"
                      src="https://image.freepik.com/free-vector/industrial-robot-isometric-concept_1284-6047.jpg"
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle>Offerings</MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore a quaerat sed reiciendis rem similique
                     
                      </MDBCardText>
                      </MDBCardBody>
                  </MDBCard>{" "}
                  </div>
                </MDBCol>
                <MDBCol sm="12" md="4" className="cardDetails cardDetails3">
                <div className="fadeInUp wow" data-wow-delay='0.3s'>

                  {" "}
                  <MDBCard className="cardMain z-depth-4">

                    <MDBCardImage
                      className="img-fluid cardImage"
                      src="https://image.freepik.com/free-vector/industrial-robot-isometric-concept_1284-6047.jpg"
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle>Offerings</MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore a quaerat sed reiciendis rem similique
                     
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
