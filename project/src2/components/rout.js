import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

export default function Routerr(props) {
    return (
        <Router>
            <div>
                <Menu />
                <switch>
                    <Route path="/UserDetails">
                        <UserDetails />
                    </Route>
                    <Route path="/buyDetails">
                        <BuyDetails />
                    </Route>
                    <Route path="/paymentDetails">
                        <PaymentDetails />
                    </Route>
                </switch>
            </div>
        </Router>
    )
}
function Menu() {
    return (
        <>
            <nav>
                <div className="row">
                    <div className="col">
                        <Link to="/UserDetails">UserDetails</Link>
                    </div>
                    <div className="col">
                        <Link to="/buyDetails">buyDetails</Link>
                    </div>
                    <div className="col">
                        <Link to="/paymentDetails">paymentDetails</Link>
                    </div>
                </div>
            </nav>
            <footer style={{ marginTop: 500 }}>Thank You!!!</footer>


        </>
    );
}


export function UserDetails() {

    return (
        <h4>UserDetails</h4>
    )
}

export function BuyDetails() {

    return (
        <h4>buyDetails</h4>
    )
}
export function PaymentDetails() {

    return (
        <h4>paymentDetails</h4>
    )
}