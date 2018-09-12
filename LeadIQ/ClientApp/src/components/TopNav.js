import React from 'react';
import { Link } from "react-router-dom";

class TopNav extends React.Component {

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
                                <Link to="/blog" className="nav-link liq-nav-link">BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/support" className="nav-link liq-nav-link">SUPPORT</Link>
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