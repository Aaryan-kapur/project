import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import "../styles/Details.scss";
class Details extends Component {
  state = {};
  render() {
    return (
      <div id="#3">
        <React.Fragment>
          <div className="mainDetails">
            <div className="container">
              <div className="titleDetails">
                <h2 className="detailsText">Title Should be here</h2>
              </div>

              <MDBRow className="rowDetails onPC">
                <MDBCol className="leftDetails" sm="12" md="6">
                  <div className="wow fadeInUp">
                    <p className="DetailsTitle">
                      High Powered testing Facility
                    </p>
                    <br />
                    <p>
                      This is a 370hp, very large and versatile and unique
                      hydraulic test bench that can be altered to test each and
                      every type of hydraulic pump of vast range of capacity.
                      Such exhaustive tests give us confidence of guaranteed
                      performance for due life span for every unit refurbished
                      here. We offer these services in different specifications
                      and also customize the same as per the needs of the
                      clients within promised time frame.
                    </p>
                  </div>
                </MDBCol>
                <MDBCol className="rightDetails" sm="12" md="6">
                  <div className="wow fadeInRight">
                    <img
                      className=" z-depth-4 imageDetails"
                      src="https://image.freepik.com/free-vector/mining-infographic-set_1284-16816.jpg"
                      alt=""
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="rowDetails onPhone">
                <MDBCol className="rightDetails" sm="12" md="6">
                  <div className="wow fadeInUp">
                    <img
                      className=" z-depth-4 imageDetails"
                      src="https://image.freepik.com/free-vector/mining-infographic-set_1284-16816.jpg"
                      alt=""
                    />
                  </div>
                </MDBCol>
                <MDBCol className="leftDetails" sm="12" md="6">
                  <div className="wow fadeInUp">
                    <p className="DetailsTitle">
                      {" "}
                      High Powered testing Facility
                    </p>
                    <br />
                    <p>
                      This is a 370hp, very large and versatile and unique
                      hydraulic test bench that can be altered to test each and
                      every type of hydraulic pump of vast range of capacity.
                      Such exhaustive tests give us confidence of guaranteed
                      performance for due life span for every unit refurbished
                      here. We offer these services in different specifications
                      and also customize the same as per the needs of the
                      clients within promised time frame.
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="rowDetails onPC">
                <MDBCol className="rightDetails" sm="12" md="6">
                  <div className="wow fadeInLeft">
                    <img
                      className=" z-depth-4 imageDetails"
                      src="https://image.freepik.com/free-vector/mining-infographic-set_1284-16816.jpg"
                      alt=""
                    />
                  </div>
                </MDBCol>

                <MDBCol className="leftDetails" sm="12" md="6">
                  <div className="wow fadeInUp">
                    <p className="DetailsTitle">Unmatched Reliability and Customizability</p>
                    <br />
                    <p>
                      Details for tab 1 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate, temporibus saepe! Asperiores
                      placeat, harum reprehenderit odit nesciunt magni, facere
                      voluptates animi amet aspernatur ipsum? Doloremque
                      deserunt quibusdam aut facere veritatis?
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="rowDetails onPhone">
                <MDBCol className="rightDetails" sm="12" md="6">
                  <div className="wow fadeInUp">
                    <img
                      className=" z-depth-4 imageDetails"
                      src="https://image.freepik.com/free-vector/mining-infographic-set_1284-16816.jpg"
                      alt=""
                    />
                  </div>
                </MDBCol>

                <MDBCol className="leftDetails" sm="12" md="6">
                  <div className="wow fadeInUp">
                    <p className="DetailsTitle">Details</p>
                    <br />
                    <p>
                      Details for tab 1 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate, temporibus saepe! Asperiores
                      placeat, harum reprehenderit odit nesciunt magni, facere
                      voluptates animi amet aspernatur ipsum? Doloremque
                      deserunt quibusdam aut facere veritatis?
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="rowDetails onPC">
                <MDBCol className="leftDetails" sm="12" md="6">
                  <div className="wow fadeInUp">
                    <p className="DetailsTitle">Details</p>
                    <br />
                    <p>
                      Details for tab 1 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate, temporibus saepe! Asperiores
                      placeat, harum reprehenderit odit nesciunt magni, facere
                      voluptates animi amet aspernatur ipsum? Doloremque
                      deserunt quibusdam aut facere veritatis?
                    </p>
                  </div>
                </MDBCol>
                <MDBCol className="rightDetails" sm="12" md="6">
                  <div className="wow fadeInRight">
                    <img
                      className=" z-depth-4 imageDetails"
                      src="https://image.freepik.com/free-vector/mining-infographic-set_1284-16816.jpg"
                      alt=""
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="rowDetails onPhone">
                <MDBCol className="rightDetails" sm="12" md="6">
                  <div className="wow fadeInUp">
                    <img
                      className=" z-depth-4 imageDetails"
                      src="https://image.freepik.com/free-vector/mining-infographic-set_1284-16816.jpg"
                      alt=""
                    />
                  </div>
                </MDBCol>
                <MDBCol className="leftDetails" sm="12" md="6">
                  <div className="wow fadeInUp">
                    <p className="DetailsTitle">Details</p>
                    <br />
                    <p>
                      Details for tab 1 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate, temporibus saepe! Asperiores
                      placeat, harum reprehenderit odit nesciunt magni, facere
                      voluptates animi amet aspernatur ipsum? Doloremque
                      deserunt quibusdam aut facere veritatis?
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Details;
