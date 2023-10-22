import { Link } from "react-router-dom";
import "./css/Place.css";

function DestinationCard(){
return(
    <>
        <div className='item'>
            <div className="card border-0" style={{width: '17rem'}}>
                <img className="card-img-top" style={{height: '12rem',width: '17rem'}} src="https://miro.medium.com/v2/resize:fit:720/1*r0gt1LNG9lYwcRU9bwSe7w.jpeg" alt="Card image cap"/>
                <div className="card-body place_heading">
                <p>Himachal Pradesh</p>
                <h5 className="card-title">Manali</h5>
                </div>
            </div>
        </div>
    </>
);
}
export default DestinationCard;