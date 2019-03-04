import React, { Component, Fragment } from "react";
import Helmet from 'react-helmet';

class SalesDemo extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://js.chilipiper.com/marketing.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        let salesdemoTitle = "LeadIQ | Sales Demo";
        return (
            <Fragment>
                <Helmet>
                    <title>{salesdemoTitle}</title>
                    <meta name="description" content={salesdemoTitle} />
                </Helmet>
                <div className="App">
                    <div className="leadiq-sales-demo">
                        <div className="leadiq-sales-demo-innerbanner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="leadiq-sales-demo-leftcont">
                                            <h1>See how Lead IQ works<br /> for your entire sales team </h1>
                                            <p>Cut through the clutter with LeadlQ. Research-based prospecting is on the rise and your team should be on board. Let us show you how you can use LeadlQ to increase sales pipeline with the right prospects. </p>
                                            <div className="row">
                                                <div className="col-lg-4 col-xs-12">
                                                    <img src="/img/sales-demo1/bitmap@3x.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <div className="col-lg-8 col-xs-12">
                                                    <blockquote>
                                                        “LeadIQ saves us three or four steps per new prospect. This allows us to prospect faster and more efficiently.”
                                                    </blockquote>
                                                    <span>Charles Moreton, Head of Sales, Videolicious </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="leadiq-sales-demo-requestform">
                                            <form>
                                                <div className="leadiq-sales-demo-from-group">
                                                    <input placeholder="First Name" className="leadiq-sales-demo-form-control" />
                                                </div>
                                                <div className="leadiq-sales-demo-from-group">
                                                    <input placeholder="Last Name" className="leadiq-sales-demo-form-control" />
                                                </div>
                                                <div className="leadiq-sales-demo-from-group">
                                                    <input placeholder="Email" className="leadiq-sales-demo-form-control" />
                                                </div>
                                                <div className="leadiq-sales-demo-from-group">
                                                    <input placeholder="Phone" className="leadiq-sales-demo-form-control" />
                                                </div>
                                                <div className="leadiq-sales-demo-from-group">
                                                    <input placeholder="Company Name" className="leadiq-sales-demo-form-control" />
                                                </div>
                                                <div className="leadiq-sales-demo-from-group">
                                                    <select className="leadiq-sales-demo-form-control">
                                                        <option value="">Employee Count</option>
                                                        <option value="0-50">0-50</option>
                                                        <option value="51-200">51-200</option>
                                                        <option value="201+">201+</option>
                                                    </select>
                                                </div>
                                                <div className="leadiq-sales-demo-from-group leadiq-sales-demo-submit">
                                                    <a href="/thank-you-success">See it in action</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default SalesDemo;
