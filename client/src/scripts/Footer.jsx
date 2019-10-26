import React, { Component } from 'react';
import "../styles/Footer.scss";
class Footer extends Component {
  state = {  }
  render() { 
    return (
      <div className="footerMain">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="footer_heading">
                  <span className="textHeading">
                    Our Office
                  </span>
                </div>
              <img
                className="image_footer"
                src={require("../assets/image_footer.png")}
                alt=""
              />        
              <span className="text_Footer">
                address, address field , addresss <br />
                pincode
              </span>
              </div>
              <div className="col-sm-12 col-md-4">
              <span className="textHeading">
                    Say Hello<br />
                  </span>
                  <span className="text_Footer">
                        if you are interested in working with us or <br /> just want to say hello, just drop a line!
                  </span>
                  <br />
                  <span className="emailFooter">
                    hdhddh@dhdhdh.com
                  </span>
              </div>
              <div className="col-sm-12 col-md-4">
              <span className="textHeading">
Find Us                  </span>
<br />
<span className="text_Footer">
social media                  </span>
              </div>
            </div>
          </div>
      </div>
      );
  }
}
 
export default Footer;
