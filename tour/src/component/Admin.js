import React from "react";
import "./css/Admin.css";
function Admin(){
    return(
        <>
        <div className="admin_body">
            <div className="admin_container">
                <div className="main">
                    {/* ======================= Cards ================== */}
                    <div className="cardBox ">
                        <div className="card">
                            <div>
                                <div className="numbers">100</div>
                                <div className="cardName">Total User</div>
                            </div>

                            <div className="iconBx">
                                <ion-icon name="people-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className="numbers">96</div>
                                <div className="cardName">Ticket Booking</div>
                            </div>

                            <div className="iconBx">
                                <ion-icon name="ticket-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className="numbers">80</div>
                                <div className="cardName">Hotel Booking</div>
                            </div>

                            <div className="iconBx">
                                <ion-icon name="bed-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className="numbers">17,269</div>
                                <div className="cardName">Total Earning</div>
                            </div>

                            <div className="iconBx">
                                <ion-icon name="cash-outline"></ion-icon>
                            </div>
                        </div>
                    </div>

                    {/* ================ Order Details List ================= */}
                    <div className="details">
                        <div className="recentOrders">
                        <table>
                                <thead>
                                    <tr>
                                        <td>Booking Id</td>
                                        <td>Customer Name</td>
                                        <td>Destination</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Suraj Kumar</td>
                                        <td>Delhi</td>
                                        <td><span className="status delivered">Delivered</span></td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Avik Roy</td>
                                        <td>Maharashtra</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Sneha Pal</td>
                                        <td>Manali</td>
                                        <td><span className="status return">Return</span></td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>Manish Das</td>
                                        <td>Punjab</td>
                                        <td><span className="status inProgress">In Progress</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Admin;