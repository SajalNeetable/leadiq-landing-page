﻿import React from 'react';
import Footer from './Footer';
import Helmet from 'react-helmet';

class LayoutFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeTitle: "sample leadIq pricing page"
        }
    }


    render() {
        let getTitle = "", getMeta = "";

        if (window.location.href) {

            {
                (() => {
                    switch (window.location.pathname.replace(/^\/([^\/]*).*$/, '$1')) {
                        case "":
                            getTitle = "LeadIQ -Sales Prospecting Tool for Lead Generation";
                            getMeta = "Find contact information for ideal prospects and create lead lists in minutues not days. The original deal finder."
                            return (getTitle, getTitle);
                        case "customers":
                            getTitle = "Sales Prospecting Tool for Leading Teams | LeadIQ";
                            getMeta = "Get to know how our customers are fueling their sales efforts with highly targeted prospecting. ";
                            return (getTitle, getTitle);
                        case "tripactions-case-study":
                            getTitle = "TripActions Uses LeadIQ to Book Sales Meetings ";
                            getMeta = "Learn how TripActions uses LeadIQ to book sales meetings. ";
                            return;
                        case "videolicious-case-study":
                            getTitle = "Videolicious Uses LeadIQ to Fuel Sales Growth";
                            getMeta = "Learn how Videolicious uses LeadIQ to fuel sales growth. ";
                            return;
                        case "pricing":
                            getTitle = "Pricing and Plans for Sales Prospecting Tool | LeadIQ ";
                            getMeta = "Pick the pricing plan for our sales prospecting tool that best fits your needs.";
                            return;
                        case "webinars":
                            getTitle = "B2B Sales Webinars | LeadIQ ";
                            getMeta = "In depth sales training and other B2B sales tips, expert intereviews and more. ";
                            return;
                        case "video":
                            getTitle = "Top B2B Sales Vidoes | LeadIQ ";
                            getMeta = "Watch our top B2B sales videos and get tips on how to move up in your sales career. ";
                            return;
                        case "podcasts":
                            getTitle = "Interviews with B2B Sales Leaders | LeadIQ ";
                            getMeta = "Listen to the top B2B sales leaders share their sales advice. Sales advice from the trenches, from sales managers, SDR's, founders and more. ";
                            return;
                        case "rate-my-pitch":
                            getTitle = "Rate Your Sales Pitch | LeadIQ ";
                            getMeta = "How good is your sales pitch? Let us rate it for you. We've rated over 500 pitches and can help improve yours. ";
                            return;
                        case "blog":
                            getTitle = "Top B2B Sales Blog | LeadIQ ";
                            getMeta = "Find articles to sharpen your sales skills on the LeadIQ blog.";
                            return;
                        default:
                            null
                    }
                })()
            }


            var getData = "";
            if (window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') === "blog" || window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') === "podcasts") {
                getData = window.location.pathname.split("/").slice(-1).join("/");
            }
            else if (window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') === "") {
                getData = "LeadIQ Prospect Smarter";
            }else {
                 getData = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
            }
        }
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{getTitle}</title>
                    <meta name="description" content={getMeta} />
                </Helmet>
                <div className="content">
                    
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default LayoutFooter;