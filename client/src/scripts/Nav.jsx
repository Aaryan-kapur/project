import React, { Component } from "react";
import "../styles/Nav.scss";
import SmoothScrolling from "./smoothScrolling";
export default class Nav extends Component {
  constructor(props) {
    super();
    this.scroll1 = this.scroll1.bind(this);
    this.scroll2 = this.scroll2.bind(this);
    this.scroll3 = this.scroll3.bind(this);
    this.scroll4 = this.scroll4.bind(this);
  }
  scroll1() {
    SmoothScrolling.scrollTo("#1");
  }
  scroll2() {
    SmoothScrolling.scrollTo("#2");
  }
  scroll3() {
    SmoothScrolling.scrollTo("#3");
  }
  scroll4() {
    SmoothScrolling.scrollTo("#4");
  }
  render() {
    return (
      <nav className="Nav sticky-top">
        <div className="mobile">
          <div className="inner">
            <aside className="left col-12">
              <p>
                <span>UltraTech Engineering </span>
              </p>
            </aside>
          </div>
        </div>
        <div className="tablet">
          <aside className="row col-12 subNav"></aside>
        </div>

        <div className="desktop">
          <div className="inner row">
            <aside className="left col-3">
              <p>
                <span>UltraTech Engineering </span>
              </p>
            </aside>
            <aside className=" center col-8 row menu">
              <div className="col-3">
                <div className="menu-content">
                  <p>
                    <span
                      id="active"
                      className="hover-area noSelect"
                      onClick={this.scroll1}
                    >
                      Home
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="menu-content">
                  <p>
                    {" "}
                    <span
                      className="hover-area noSelect"
                      onClick={this.scroll2}
                    >
                      Strategy
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="menu-content">
                  <p>
                    {" "}
                    <span
                      className="hover-area noSelect"
                      onClick={this.scroll3}
                    >
                      About
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="menu-content">
                  <p>
                    {" "}
                    <span
                      className="hover-area noSelect"
                      onClick={this.scroll4}
                    >
                      Client
                    </span>
                  </p>
                </div>
              </div>
            </aside>
            <aside className="right signUp col-1">
              <p>Sign up</p>
            </aside>
          </div>
        </div>
      </nav>
    );
  }
}
