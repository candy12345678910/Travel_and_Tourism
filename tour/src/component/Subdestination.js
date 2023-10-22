import { Link } from "react-router-dom";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Navbar from "./Navbar";
import "./css/State.css";
import img1 from "./img/State/Wetbengal.png";
import img2 from "./img/State/rajasthan.png";
import img3 from "./img/State/Himachal.png";
import img4 from "./img/State/punjab.png";
import img5 from "./img/State/Mumbai.png";
function Subdestination(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <>
        <Navbar/>
        <div className="state_bg">
            <div className='container'>
                <h1 className="state_heading">Destinations</h1>
                <Carousel  autoPlay={false} autoPlaySpeed={3000}  transitionDuration={500} responsive={responsive}> 
                <div className='item'>
                    <Link><button className="state_button">
                        <div className="card border-0" style={{width: '13.5rem'}}>
                            <img className="card-img" style={{height: '22rem',width:'13.5rem', borderRadius: "10px"}} src={img1} alt="Card image cap"/>
                            <div className="card-body state_title">
                                <h5>West Bengal</h5>
                                <p>GRAB YOUR TICKETS</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                </Carousel>
            </div>
        </div>
        </>
      );
}

export default Subdestination;