import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <MDBFooter className="font-small footer pt-4 mt-4">
      <div className="container">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="titleFooter">
                {" "}
                <b>About us</b>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                laborum asperiores neque autem voluptate. Ad, quia molestias?
                Soluta ex commodi perspiciatis deserunt, aperiam eum nihil autem
                asperiores obcaecati a placeat?
              </p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="titleFooter">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="titleFooter">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="perplexed.tech"> perplexed.tech </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
