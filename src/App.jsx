import React, { Component } from "react";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (
    <>
    <Navbar/>
    <FrontPage/>

    </>
    )
  }
}
export default App;

//to have a situation where at first only the picture is displayed on the card and when you click on the card it displays additional info - (title and text), play with state and set state.  have teh statee - true/false and link in with that.