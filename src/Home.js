import React from 'react';
import './index.css';
import NavBar from "./NavBar";
import Footer from "./Footer";

function Home() {
  
    return (
      <div className="h-100">
        <div id="nav">
         <NavBar/>
        </div>

        <div className="container-fluid d-flex align-items-center flex-column justify-content-between" id="main">
          <div id="central">       
          <div className="d-flex align-items-center justify-content-center flex-column col-md-8 m-auto h-100">
            <h1>Welcome to Cloudy!</h1>
              <a href="/weather"><button className="checkButton">Check Weather!</button></a>
          </div>
          </div>
          <Footer/>
        </div>

      </div>
      
    );
  }
  
  export default Home;
  