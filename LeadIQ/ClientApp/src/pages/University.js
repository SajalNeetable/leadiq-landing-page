﻿import React from 'react';
import GetAccessUniversity from '../components/GetAccessUniversity';

class University extends React.Component {
    render() {
        return (
            <div>
                <div className="imageDesignUniversityHeader">
                    <section className="universityHeaderMain">
                        <div className="container mt-5">
                            <div className="row mb-5">
                                <div className="col-12 col-xs-3 col-sm-3 col-md-3 col-ls-3 col-xl-3">
                                    <img src="/img/logo-university.png" alt="art board" className="img-fluied justify-content-center d-flex" />
                                </div>
                                <div className="col-12 col-xs-9 col-sm-9 col-md-9 col-ls-9 col-xl-9">
                                    &nbsp;
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <h1 className="liq-text-primary">Ditch the Database - Close Deals faster</h1>
                                    Start closing deals faster with thoughtful prospecting and campaign-based outreach. We wrote these guides to walk you through using LeadIQ (and other tools) to get things done. Follow these workflows, and you will be successful.
                                    <div className="mt-5">
                                        <GetAccessUniversity size="lg" />
                                    </div>
                                    <p className="mt-5">Already have a LeadIQ account .<mark className="hightlightText"> Login here.</mark></p>
                                </div>
                                <div className="col-md-1" />
                                <div className="col-md-5">
                                    <img src="/img/artBoard.png" alt="art board" className="img-fluied" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container mt-5">
                    <section>
                        <div className="row mb-4">
                            <div className="col-12 col-xs-3 col-sm-3 col-md-3 col-ls-3 col-xl-3 accountTextTitle">
                                <h3>Lessons</h3>
                                <p>The ultimate <br /> sales prospecting toolkit</p>
                            </div>
                            <div className="col-12 col-xs-9 col-sm-9 col-md-9 col-ls-9 col-xl-9 justify-content-end d-flex">
                                <label className="accountLogin">To get access, <mark className="highlightText">create a free account.</mark><br />if you already have a leadIQ account ,<mark className="highlightText">click here to login</mark></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-xs-4 col-sm-4 col-md-4 col-ls-4 col-xl-4 mb-3">
                                <img src="/img/why-leadIq.png" className="img-fluied" alt="" />
                                <p className="justify-content-center d-flex mt-3 mb-3"><mark className="highlightText">Why LeadIQ</mark></p>
                            </div>
                            <div className="col-12 col-xs-4 col-sm-4 col-md-4 col-ls-4 col-xl-4 mb-3">
                                <img src="/img/list-building.png" className="img-fluied" alt="" />
                                <p className="justify-content-center d-flex mt-3 mb-3"><mark className="highlightText">List Building</mark></p>
                            </div>
                            <div className="col-12 col-xs-4 col-sm-4 col-md-4 col-ls-4 col-xl-4 mb-3">
                                <img src="/img/sales-outreach.png" className="img-fluied" alt="" />
                                <p className="justify-content-center d-flex mt-3 mb-3"><mark className="highlightText">Sales Outreach</mark></p>
                            </div>
                        </div>
                    </section>
                </div>
                <section>
                    <div className="container">
                        <h1 className="text-center">What's Included</h1>
                        <div className="row">
                            <div className="col-md-3" />
                            <div className="col-md-6">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://fast.wistia.net/embed/iframe/nzb9witd22" allowFullScreen />
                                </div>
                                <div className="mt-5 text-center">
                                    <GetAccessUniversity size="lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default University;