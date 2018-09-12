import React, { Component } from 'react';
import EmailComponent from '../components/EmailComponent';
import GetNumber from '../components/GetNumber';
import GetSalesTalk from '../components/GetSalesTalk';
import GetSubscribe from '../components/GetSubscribe';
import partner from "./../data/leadPartner.json";
import leadsHelp from "./../data/leadsHelp.json";
import leadsTrust from "./../data/leadsTrust.json";

export default class GetLeads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getLeadDetails: leadsTrust,
            getHelpDetails: leadsHelp,
            getPartnerDetails: partner
        };
    }

    render() {
        return (
            <div>
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/free-leads-cover.jpg" className="img-fluied leads-cover" />
                    </div>
                    <div className="cover-content">
                        <div className="container">
                            <section><div className="row get-Touch"><GetNumber size="lg" /></div></section>
                            <section>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="/img/leadIq-white.png" className="img-fluied" />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h1 className="justify-content-center d-flex mt-3 mb-3 text-white">Where Your Next Deal Starts</h1>
                                <h3 className="justify-content-center d-flex mt-3 mb-3 text-white">The prospecting productivity suite that fills your pipeline.</h3>
                                <EmailComponent />
                                <h6 className="justify-content-center d-flex mt-3 text-white">No credit card required Sign up free today </h6>
                                <h6 className="justify-content-center d-flex mb-3 text-white">By signing up, you accept our Term of Service and Privacy Policy </h6>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <section>
                        <h1 className="justify-content-center d-flex mt-3 mb-3">Trusted By</h1>
                        <div className="container">
                            <div className="row mt-5">
                                {
                                    this.state.getLeadDetails.map((trust) => {
                                        return (
                                            <img className="col-6 col-xs-3 col-sm-3 col-md-3 col-ls-3 col-xl-3 mb-3 justify-content-center d-flex img-fluied" src={trust.imageUrl} alt={trust.title} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1 className="justify-content-center d-flex mt-3 mb-3 alignCenter">Sales Prospecting In Minutes Not Days</h1>
                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-12 col-xs-8 col-sm-8 col-md-8 col-ls-8 col-xl-8 laptop-screen mb-4">
                                    <img src="/img/laptop-image-cover.png" className="img-laptop " alt="image-screen" />
                                    <img src="/img/laptop-image.png" className="img-fluied" alt="laptop-screen" />
                                </div>
                                <div className="col-12 col-xs-4 col-sm-4 col-md-4 col-ls-4 col-xl-4 ">
                                    <h6 className="justify-content-center d-flex">Increase productivity with our powerful chrome extension. Build prospecting lists in minutes.</h6>
                                    <div className="mb-2"><span className="glyphicon glyphicon-one-fine-dot"><label className="list-text">Find contact information for prospects from across the web</label></span></div>
                                    <div><span className="glyphicon glyphicon-one-fine-dot"><label className="list-text">No long term contracts to sign</label></span></div>
                                    <div><span className="glyphicon glyphicon-one-fine-dot"><label className="list-text">Easily connect Salesforce and other tools your team uses</label></span></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h1 className="justify-content-center d-flex mt-3 mb-3 alignCenter">Increase efficiency for your entire sales team</h1>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://fast.wistia.net/embed/iframe/nzb9witd22" allowfullscreen></iframe>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1 className="justify-content-center d-flex mt-3 mb-3">Who We Help ?</h1>
                        <div className="container">
                            <div className="row mt-5">
                                {
                                    this.state.getHelpDetails.map((help) => {
                                        return (
                                            <div className="col-12 col-xs-3 col-sm-3 col-md-3 col-ls-3 col-xl-3 mb-3">
                                                <div className=" justify-content-center d-flex mb-3"><img className="img-fluied" src={help.imageUrl} alt={help.title} /></div>
                                                <h5 className="justify-content-center d-flex mb-3">{help.title}</h5>
                                                <label className="justify-content-center d-flex alignCenter helpDetails mb-3">{help.description}</label>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </div>
                <section className="clientFeddback justify-content-left d-flex">
                    <div className="container">
                        <h1 className="mt-3 mb-3 text-white">What Our Clients Say About Us</h1>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-sm-3  pl-4 pt-5 quoteUser">
                                <img src="/img/quotes.png" className="quotesDesign" alt="quotes" />
                                <label className="userQuoteText"><mark>Scott Smith</mark><br /> VP of Sales at CloudApp</label>
                            </div>
                            <div className="col-6 col-sm-3">
                                <img src="/img/avatar.png" className="img-fluid" alt="avatar" />
                            </div>
                            <div className="col-12 col-sm-6 pt-5">
                                <h4 className="commentText">“LeadIQ just gets it. They make outbound prospecting way less tedious for our SDR team, which makes them do it more. Their integration with Outreach saves our sales team so much time.”</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <section>
                        <div className="row mt-3">
                            <div className="col-12 col-xs-5 col-sm-5 col-md-5 col-ls-5 col-xl-5 mb-3">
                                <div className="justify-content-center d-flex"><img src="/img/leadIq-solo.png" alt="leadIq-solo" className="img-fluied mb-3" /></div> <br />
                                <h4 className="justify-content-center d-flex mb-4 alignCenter">Get more leads faster  <br /> $60/month</h4>
                                <div className="justify-content-center d-flex mb-3"><GetSubscribe size="lg" /></div>
                                <div className="pb-2"><img src="/img/tick-icon.png" /><label className="premium-list-text">Build campaigns of up to 300 prospects per month</label></div>
                                <div className="pb-2"><img src="/img/tick-icon.png" /><label className="premium-list-text">See millions of crowdsourced emails as you browse the web</label></div>
                                <div className="pb-2"><img src="/img/tick-icon.png" /><label className="premium-list-text">Detect existing prospects in Salesforce</label></div>
                                <div className="pb-2"><img src="/img/tick-icon.png" /><label className="premium-list-text">30 free premium credits per month</label></div>
                            </div>
                            <div className="col-12 col-xs-2 col-sm-2 col-md-2 col-ls-2 col-xl-2 mb-3">
                                <div class="splitter-line"></div>
                            </div>
                            <div className="col-12 col-xs-5 col-sm-5 col-md-5 col-ls-5 col-xl-5 mb-3">
                                <div className="justify-content-center d-flex"><img src="/img/leadIq-team.png" alt="leadIq-team" className="img-fluied mb-3" /></div> <br />
                                <h4 className="justify-content-center d-flex mb-4 alignCenter">Empower your sales team with  <br /> powerful collaboration tools</h4>
                                <div className="justify-content-center d-flex mb-3"><GetSalesTalk size="lg" /></div>
                                <h6 className="justify-content-center d-flex">Integrations</h6>
                                <div className="row justify-content-center d-flex mb-5">
                                    {
                                        this.state.getPartnerDetails.map((partner) => {
                                            return (
                                                <img src={partner.imageUrl} className="col-12 col-xs-12 col-sm-2 col-md-2 col-ls-2 col-xl-2 img-set" alt={partner.title} />
                                            )
                                        })
                                    }
                                </div>
                                <div className="pb-2"><img src="/img/tick-icon.png" /><label className="premium-list-text">All LeadIQ Solo features</label></div>
                                <div className="pb-2"><img src="/img/tick-icon.png" /><label className="premium-list-text">Unlimited Campaigns</label></div>
                                <div className="pb-2"><img src="/img/tick-icon.png" /><label className="premium-list-text">Get 100 free premium credits per month</label></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}