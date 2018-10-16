import React from 'react';
import { Link } from "react-router-dom";
import popupMenu from "./../data/popup-list.json";
import popupCustomerMenu from "./../data/popup-list-customers.json";
import PopupCard from "./../components/cards/PopupCard.js";
import GetStarted from '../components/buttons/GetStarted';
import Demo from '../components/buttons/Demo';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: popupMenu,
            customers: popupCustomerMenu
        };
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg sticky-top liq-navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src="/img/logo.png" alt="LeadIQ" height="32" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-nav" aria-controls="top-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="top-nav" style={{fontSize: "16px"}}>
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active dropdown pt-2">
                                <a href="/customers" className="nav-link liq-nav-link ml-2 mr-2 mb-2">CUSTOMERS</a>
                                <span className=" " aria-labelledby="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
                                <div className="dropdown-menu  row popupCard">
                                    <div className="row">
                                        <div className="pointerDesign"></div>
                                        {this.state.customers.map((data, index) => { return (<PopupCard data={data} key={index} />) })}
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item pt-2">
                                <Link to="/pricing" className="nav-link liq-nav-link">PRICING</Link>
                            </li>

                            <li className="nav-item dropdown pt-2">
                                <a href="/" className="nav-link liq-nav-link ml-2 mr-2 mb-2">RESOURCES</a>
                                <span  aria-labelledby="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
                                <div className="dropdown-menu row popupCard">
                                    <div className="row">
                                        <div className="pointerDesign"></div>
                                        {this.state.resources.map((data, index) => { return (<PopupCard data={data} key={index}  />) })}
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item pt-2 mr-3">
                                <Link to="/blog" className="nav-link liq-nav-link">BLOG</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <GetStarted />
                            </li>
                            <li className="nav-item">
                                <Demo  />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNav;