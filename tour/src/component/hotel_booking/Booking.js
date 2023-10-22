import React from "react";
import "../css/Booking.css";
import Navbar from "../Navbar";

function Booking()
{
    return(
        <>
        <Navbar/>
        <div className="booking_body">
        <div class="search-container">
            <h4>Find the Best Hotel Deals</h4>
            <form>
            <div class="form-row">
                <div class="col-md-3 form-group">
                <label for="location">Location</label>
                <input type="text" class="form-control" id="location" placeholder="Enter a city or destination"/>
                </div>
                <div class="col-md-2 form-group">
                <label for="check-in">Check-in</label>
                <input type="date" class="form-control" id="check-in"/>
                </div>
                <div class="col-md-2 form-group">
                <label for="check-out">Check-out</label>
                <input type="date" class="form-control" id="check-out"/>
                </div>
                <div class="col-md-2 form-group">
                <label for="guests">Guests</label>
                <select id="guests" class="form-control">
                    <option selected>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                </select>
                </div>
                <div class="col-md-2 form-group">
                <label for="room-type">Room Type</label>
                <select id="room-type" class="form-control">
                    <option selected>Any</option>
                    <option>Single</option>
                    <option>Double</option>
                    <option>Suite</option>
                </select>
                </div>
                <div class="col-md-1 form-group">
                <label>&nbsp;</label>
                <button type="submit" class="btn btn-success btn-search">Search</button>
                </div>
            </div>
            </form>
        </div>
        </div>
        </>
    );
}
export default Booking;