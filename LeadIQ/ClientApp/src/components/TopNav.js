import React from 'react';
import { Link } from "react-router-dom";
import popupMenu from "./../data/popup-list.json";
import PopupCard from "./../components/cards/PopupCard.js";

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: popupMenu
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

                    <div className="collapse navbar-collapse" id="top-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/customers" className="nav-link liq-nav-link">CUSTOMERS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pricing" className="nav-link liq-nav-link">PRICING</Link>
                            </li>
                            <li className="nav-item">
                                
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/resources" className="nav-link liq-nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">RESOURCES</Link>
                                <div className="dropdown-menu  row popupCard" aria-labelledby="navbarDropdownMenuLink">
                                    <div className="row">
                                        <div className="pointerDesign"></div>
                                        {this.state.resources.map((data, index) => { return (<PopupCard data={data} />) })}
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link liq-nav-link">BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <a href="https://leadiqhelp.zendesk.com/hc/en-us" target="_blank" className="nav-link liq-nav-link">SUPPORT</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://account.leadiq.com/login" target="_blank" className="nav-link liq-nav-link">LOGIN</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://account.leadiq.com/app/get-started/" target="_blank" className="btn liq-btn-primary liq-nav-button">GET STARTED</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://account.leadiq.com/app/get-started/" target="_blank" className="btn liq-btn-secondary liq-nav-button">GET A DEMO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNav;