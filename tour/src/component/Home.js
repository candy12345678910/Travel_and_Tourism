import React from "react";
import Navbar from "./Navbar";
import Place from "./Place";
import State from "./State";
import Season from "./Season";
import Events from "./Events";

function Home(){
      return(
        <>
        <Navbar/>
        <Place/>
        <State/>
        <Season/>
        <Events/>
        </>
      );
}

export default Home;