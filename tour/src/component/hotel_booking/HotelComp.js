import "../css/HotelComp.css";
function HotelComp(){
    return(
        <>
            <div className="container">
            <div className="hotel_body">
            <div class="row">
                <div className="col-sm-3">
                    <div className="hotel_detail">
                        <img className="hotel_image" src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels-listing/hotels-listing-card/itc-royal-bengal.png" alt="Card image cap"/>
                    </div>
                </div>

                <div className="col-sm-5">
                    <div className="box1">
                        <h5 className="hotel_name">ITC Royal Bengal</h5>
                        <h6 className="hotel_location">Kolkata</h6>
                        <div className="rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                                
                            <span>&nbsp;&nbsp;Rating</span>
                            </div>
                        <span><pre>7.7- Good</pre></span>
                    </div>
                </div>

                <div className="col-sm-4">     
                    <div className="box2">
                        <h6>Indian Epic</h6>
                        <p>&#8377;8000</p>
                        <h5>&#10004;Free cancelation</h5>
                        <button type="button" className="btn btn-success">Book Now&nbsp;&nbsp;&#10093;</button>
                    </div>
                </div>   
            </div>
            </div>
            </div>
        </>
    );
}
export default HotelComp;