import React, { Component } from "react";
import "../styles/Data.scss";
import { MDBRow, MDBCol } from "mdbreact";

class Data extends Component {
  render() {
    return (
      <div id="#4">
        <React.Fragment>
          <div className="dataBox">
            <div className="container dabbaData">
              <span className="dataTitle">Details Cards</span>
              <MDBRow>
                <MDBCol sm="12" md="6" className="dataDabba">
                  <div className="wow fadeInUp">
                    <div className="dataCards z-depth-2 card11">
                      <span className="dataText">Title for Card</span>
                      <br />
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius sed asperiores dolorem in rem, numquam totam
                        incidunt nisi culpa harum corrupti, perferendis fugiat,
                        ullam quia amet facilis! Reiciendis, veniam atque?
                      </span>
                    </div>
                  </div>
                </MDBCol>

                <MDBCol sm="12" md="6" className="dataDabba">
                  <div className="wow fadeInUp">
                    <div className="dataCards z-depth-2 card12">
                      <span className="dataText">Title for Card</span>
                      <br />
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius sed asperiores dolorem in rem, numquam totam
                        incidunt nisi culpa harum corrupti, perferendis fugiat,
                        ullam quia amet facilis! Reiciendis, veniam atque?
                      </span>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="6" className="dataDabba">
                  <div className="wow fadeInUp" data-wow-delay='0.2s'>
                    <div className="dataCards z-depth-2">
                      <span className="dataText">Title for Card</span>
                      <br />
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius sed asperiores dolorem in rem, numquam totam
                        incidunt nisi culpa harum corrupti, perferendis fugiat,
                        ullam quia amet facilis! Reiciendis, veniam atque?
                      </span>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol sm="12" md="6" className="dataDabba">
                  <div className="wow fadeInUp"  data-wow-delay='0.2s'>
                    <div className="dataCards z-depth-2">
                      <span className="dataText">Title for Card</span>
                      <br />
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius sed asperiores dolorem in rem, numquam totam
                        incidunt nisi culpa harum corrupti, perferendis fugiat,
                        ullam quia amet facilis! Reiciendis, veniam atque?
                      </span>
                    </div>
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

export default Data;
