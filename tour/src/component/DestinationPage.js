import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./css/Place.css";
import DestinationCard from "./DestinationCard";

function DestinationPage(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <>
        <div className="place_bg">
            <div className='container'>
                <h1 className="place_head">Chose your destination</h1>
                <Carousel  autoPlay={true} infinite={true} autoPlaySpeed={3000}  transitionDuration={500} responsive={responsive}>
                    <DestinationCard/>
                    <DestinationCard/>
                </Carousel>
            </div>
        </div>
        </>
      );
}

export default DestinationPage;