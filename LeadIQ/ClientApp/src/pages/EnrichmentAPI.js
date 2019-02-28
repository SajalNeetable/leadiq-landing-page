import React, { Component, Fragment } from "react";
import AOS from 'aos';
import TwentyTwenty from 'react-twentytwenty';
import Helmet from 'react-helmet';
class EnrichmentAPI extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }

    render() {
        let enrichmentpagetitle = "LeadIQ for Developers - Data APIs"; 
        return (
            <Fragment>
                <Helmet>
                    <title>{enrichmentpagetitle}</title>
                    <meta name="description" content={enrichmentpagetitle} />
                </Helmet>
                <div className="App">
                    <div className="enrichment-api-maincont">
                        <div className="enrichment-api-bannercontainer enrichment-api-cent">
                            <div className="enrichment-api-cover">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="enrichment-api-bannercontent">
                                                <h3>Conquer the world with<br /> a few lines of code.</h3>
                                                <p>Access one of the world’s largest B2B datasets of propect data via our business intelligence API.</p>
                                                <ul>
                                                    <li><a href="">Get Started</a></li>
                                                    <li><a href="https://developer.leadiq.com/" target="_blank">View the Docs</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="enrichment-api-animationimg">
                                                <img src="/img/enrichment-api/home-cover.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cover-clipper"><img src="/img/enrichment-api/wavy.png" sizes="100vw" alt="" className="cover-wavy" /></div>
                        </div>
                        <div className="enrichment-api-contactcontent">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-10">
                                        <div className="enrichment-api-contactmain" data-aos="fade-up" >
                                            <ul>
                                                <li><img src="/img/enrichment-api/icon-contact-data.png" width="50" alt="" className="icon-contact" /></li>
                                                <li><h3> Contact Data</h3></li>
                                            </ul>
                                            <p>Look up information in LeadIQ’s vast database of over 100 million professionals and growing - query for information like work emails, phone number, job titles, company, seniority, and more.  Fill in the blanks in your internal data, or give your customers access to this data right inside your application.</p>
                                        </div>
                                        <div className="enrichment-api-contactmain" data-aos="fade-up" >
                                            <ul>
                                                <li><img src="/img/enrichment-api/icon-contact-data.png" width="50" alt="" className="icon-contact" /></li>
                                                <li><h3>Company Data</h3></li>
                                            </ul>

                                            <p>With millions of companies and counting, look up details - such as industry, location, website, and more. Use this information to change the way your business approaches prospects internally, find new target accounts, or enrich information inside your customer facing applications.  </p>
                                        </div>
                                        <div className="enrichment-api-contactmain" data-aos="fade-up" >

                                            <ul>
                                                <li><img src="/img/enrichment-api/icon-contact-data.png" width="50" alt="" className="icon-contact" /></li>
                                                <li><h3>Timestamp Information</h3></li>
                                            </ul>
                                            <p>Data is not binary. We all know data can get stale over time. LeadIQ uses advance technology to lookup and verify data in real time. Get the most current B2B contact data using our last verified timestamp data.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="enrichment-api-intelligencecontainer">
                            <div className="intelligence-clipper1"><img src="/img/enrichment-api/wavy_top.png" sizes="100vw" alt="" className="intelligence-wavy" /></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-5 col-xs-12">
                                        <div className="enrichment-api-bannercontent enrichment-api-intelligencecontain" data-aos="fade-up" >
                                            <h3>Sales Intelligence</h3>
                                            <p>Leverage our Data APIs to find your target customer’s email and phone contacts. We automatically update contact data to provide you with the most accurate data for your sales needs, saving your time and effort on data entry.</p>
                                            <a href="https://developer.leadiq.com/" target="_blank">View the Docs</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 col-xs-12">
                                        <div className="enrichment-api-intelligenceimg">
                                            <img src="/img/enrichment-api/bubble.png" className="img-responsive enrichment-api-animationicon" alt="" />
                                            <img src="/img/enrichment-api/screen.png" className="img-responsive" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-7 col-xs-12">
                                        <div className="enrichment-api-intelligenceimg">
                                            <TwentyTwenty
                                                left={<img src="/img/enrichment-api/part1.png" />}
                                                right={<img src="/img/enrichment-api/part2.png" className="iconimgmove"/>}
                                                slider={<div className="slider" />}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-sm-5 col-xs-12">
                                        <div className="enrichment-api-bannercontent enrichment-api-intelligencecontain" data-aos="fade-up" >
                                            <h3>Marketing Intelligence</h3>
                                            <p>Enrich missing profile information for your inbound B2B customers. We combine dozens of data sources to keep tabs on current and past employment information, social profiles, and more, making it easier to segment your inbound customers.</p>
                                            <a href="https://developer.leadiq.com/" target="_blank">View the Docs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intelligence-clipper"><img src="/img/enrichment-api/wavy_bottom.png" sizes="100vw" alt="" className="intelligence-wavy" /></div>
                        </div>
                        <div className="enrichment-api-usecontainer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="enrichment-api-usehead">
                                            <h2>Where can you use this data?</h2>
                                            <p>With millions of records, there are hundreds of ways to use the API.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="enrichment-api-usemain" data-aos="fade-right" data-aos-anchor-placement="right-center">
                                                <img src="/img/enrichment-api/icon-data.png" className="img-responsive" alt="" />
                                                <h3>Enrich your company’s internal prospect data.</h3>
                                                <p>Missing contact information?  What about enriching old data? Fill in the blanks on your existing prospects, leads, and companies. Update your existing database with current data.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12" data-aos="fade-right" data-aos-anchor-placement="right-center">
                                            <div className="enrichment-api-usemain">
                                                <img src="/img/enrichment-api/icon-app.png" className="img-responsive" alt="" />
                                                <h3>Improve your customer facing applications.</h3>
                                                <p>Want to make your product better for your customers? If your product or application has any piece of B2B prospect data involved in it, use the API to complete the information and delivery contacts or company data to your customers.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12" data-aos="fade-right" data-aos-anchor-placement="right-center">
                                            <div className="enrichment-api-usemain">
                                                <img src="/img/enrichment-api/icon-chart.png" className="img-responsive" alt="" />
                                                <h3>Increase conversion on lead forms.</h3>
                                                <p>Every data point you ask a prospect for could be hurting your conversion. Collect less information from your cutomers and let LeadIQ’s API fill in the blanks after conversion.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="enrichment-api-emailercontainer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="enrichment-api-emailmain">
                                            <h3>Thousands of companies use LeadIQ.</h3>
                                            <h4>Get started for free.</h4>
                                            <p>Enjoy 15 contact search credits in risk free 7 days trial</p>
                                            <div className="enrichment-api-input-group">

                                                <input id="msg" type="text" className="form-control" name="msg" placeholder="Additional Info" />
                                                <span className="input-group-addon">Start for Free</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="enrichment-api-footer-clipper"><img src="/img/enrichment-api/wavy-email.png" sizes="100vw" alt="" /></div>

                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default EnrichmentAPI;
