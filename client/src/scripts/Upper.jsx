import React, { Component } from "react";
import "../styles/Upper.scss";
// import {mainUpper} from "../assets/Upper.png";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const logo = require("../assets/Upper.png");
class Upper extends Component {
  state = {};
  render() {
    return (
      <div id="#1">
        <React.Fragment>
          <div className="outer_Upper">

          <MDBContainer>
            <MDBRow className="row1 rowUpper ">
              <MDBCol sm="12" md="6" className="leftUpper">
                <div className="title">
                  <p className="titlename">
                    {" "}
                    <span>UltraTech Engineering </span>{" "}
                  </p>
                </div>
              </MDBCol>
              <MDBCol sm="12" md="6" className="rightUpper">
                <img className="image" src={logo} alt="" />
              </MDBCol>
            </MDBRow>

            <MDBRow className="row2 rowUpper">
              <MDBCol sm="12" md="6" className="rightUpper">
                <img className="image" src={logo} alt="" />
              </MDBCol>
              <MDBCol sm="12" md="6" className="leftUpper">
                <div className="title">
                  <p className="titlename">
                    {" "}
                    <span>UltraTech Engineering </span>
                  </p>
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

export default Upper;
