import React from 'react';
import { Link } from "react-router-dom";
import Demo from './buttons/Demo';
import FreeLeads from './buttons/FreeLeads';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div>
                                <img src="/img/logo.png" alt="LeadIQ" height="24" />
                            </div>
                            <div className="mt-4">
                                <small>
                                    1-888-6LEADIQ (1-888-6532347)
                                    <br />
                                    support@leadiq.com
                                </small>
                            </div>
                            <div className="mt-4">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/leadiqapp" target="_blank"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/leadiq" target="_blank"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://youtube.com/c/leadiq" target="_blank"><i className="fab fa-youtube" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/company/leadiq-inc" target="_blank"><i className="fab fa-linkedin" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://google.com/+leadiq" target="_blank"><i className="fab fa-google-plus" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-4 ">
                                <small>© 2018 LeadIQ, All rights reserved.</small>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link liq-footer-link" to="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link liq-footer-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://angel.co/leadiq/jobs" target="_blank" className="nav-link liq-footer-link">Careers</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link liq-footer-link" to="/customers">Customers</Link>
                                </li>
                            </ul>
                            <ul className="nav flex-column mt-3">
                                <li className="nav-item">
                                    <Link className="nav-link liq-footer-link-small" to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link liq-footer-link-small" to="/terms-of-use">Terms of Use</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link liq-footer-link-small" to="/faq">FAQs</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h6>Recent Blogs</h6>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link liq-footer-blog-link" to="/blog/blog-1">How to Identify your Team's Most Effective Prospectors</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link liq-footer-blog-link" to="/blog/blog-2">How to Get Prospects to Accept Your LinkedIn Connection Requests</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link liq-footer-blog-link" to="/blog/blog-3">How to set Outlook as Your Default Inbox</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h6>Prospect Smarter</h6>
                            <small>Use our powerful chrome extension to create prospect lists from across the web. Find contacts and accounts using advanced filters. Build a lead list in minutes, not days.</small>
                            <br />
                            <FreeLeads />
                            <br />
                            <Demo />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;