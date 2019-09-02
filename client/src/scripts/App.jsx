import React, { Component } from 'react';
import WOW from "wowjs";
import Nav from './Nav';
import Upper from './Upper';
import Main from './Main';
import Details from './Details';
import Data from './Data';
import UskeNeeche from './UskeNeeche';
import Footer from './Footer';
class App extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  state = {};
  render() {
    return (
      <React.Fragment className="outer">
      <Nav />
     <Upper />  
     <Main />
     <Details />
     <Data />
     <UskeNeeche />
     <Footer />
     </React.Fragment>
    );
  }
}

export default App;
