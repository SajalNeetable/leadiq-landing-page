import React, { Component, Fragment } from "react";
import Helmet from 'react-helmet';
class ThankYouSuccess extends Component {
    render() {
        let ThankYouSuccessTitle = "LeadIQ | Thank You Success";
        return (
            <Fragment>
                <Helmet>
                    <title>LeadIQ | Thank You Success</title>
                    <meta name="description" content="Thank You Success" />
                    <meta name="keywords" content="Thank You Success" />
                    <meta name="author" content="LeadIQ" />
                </Helmet>
                <div className="App">
                    <div className="leadiq-sales-demo">
                        <div className="leadiq-sales-demo-innerbanner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="leadiq-sales-demo-leftcont thank-you-success-content">
                                            <h1>We look forward to chatting soon!</h1>
                                            <p>If not in a hurry, you can check out how pumped we are for being named a leader on G2Crowd.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="leadiq-sales-demo-requestform leadiq-sales-demo-thankyousuccess">
                                            <iframe src="https://www.youtube.com/embed/yyDwkkeJu4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default ThankYouSuccess;
