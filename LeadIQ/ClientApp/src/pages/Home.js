import React from 'react';
import Demo from '../components/buttons/Demo';
import FreeLeads from '../components/buttons/FreeLeads';
import WatchDemo from '../components/buttons/WatchDemo';
import PartnerCard from '../components/cards/PartnerCard';
import TestimonialCard from '../components/cards/TestimonialCard';
import CheckboxItem from '../components/CheckboxItem';

class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/home-bg-cover.png" className="img-fluied" alt="cover" />
                    </div>
                    <div className="cover-content">
                        <div className="container">
                            <section>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="mb-3 homepage-title">Prospect Smarter </p>
                                        <p className="mb-3">Find prospect data in real time, get it into your <br /> sales tools without doing a million clicks.</p>
                                        <div className="row pl-3">
                                            <FreeLeads size="lg" />
                                            <WatchDemo size="lg" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <section>
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="homeStepTitle">The new way to prospect</h1>
                                <p>Tierd of looking for your prospects in an old stale database? The mordern sales rep researches their prospects first. Find verified data in real time as you browse the web.</p>
                                <ul className="list-unstyled">
                                    <CheckboxItem text="Verified work emails and personal emails" />
                                    <CheckboxItem text="Cell phones(no gatekeepers)" />
                                    <CheckboxItem text="Firmographic data" />
                                    <CheckboxItem text="More juicy deets on your prospects." />
                                </ul>
                                <FreeLeads size="lg" />
                            </div>
                            <div className="col-sm-6 pt-4">
                                <img className="img-fluid" src="/img/home-feature-1.png" alt="Feature 1" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-sm-6">
                                <img className="img-fluid" src="/img/home-feature-2.png" alt="Feature 2" />
                            </div>
                            <div className="col-sm-6">
                                <h1 className="homeStepTitle">No more manual data entry.</h1>
                                <p>Detect existing prospects before you capture them to a prospect list. Simultaneously create new records into your favourite sale tools</p>
                                <ul className="list-unstyled">
                                    <CheckboxItem text="Detect duplicate leads and contacts." />
                                    <CheckboxItem text="See existing accounts and opportunities as your browse LinkedIn" />
                                    <CheckboxItem text="Create new leads, contacts and accounts into your CRM." />
                                    <CheckboxItem text="Add prospects into cadences and sequences from the web." />
                                </ul>
                                <FreeLeads size="lg" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="mt-5 homeStepTitle">Keep your CRM clean</h1>
                                <p className="mt-3">Sales reps spend 6 hours putting new prospect data into their CRM. Make it easy for your reps to add new prospects into your CRM, build prospecting lists, without compromising data cleanliness.</p>
                                <FreeLeads size="lg" />
                                <span>
                                    <Demo size="lg" />
                                </span>
                            </div>
                            <div className="col-sm-6">
                                <img className="img-fluid" src="/img/home-feature-3.png" alt="Feature 3" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-sm-6">
                                <img className="img-fluid" src="/img/home-feature-4.png" alt="Feature 4" />
                            </div>
                            <div className="col-sm-6">
                                <h1 className="mt-5 homeStepTitle">Sell More with less work.</h1>
                                <p className="mt-3">Sales reps aren't wizards. They shouldn't be guessing emails, and spending an average 6 hours a week putting new prospect data into theri CRM. Help reps buckle down and focus on executing quality outreach with one click prospecting.</p>
                                <FreeLeads size="lg" />
                            </div>

                        </div>
                    </section>
                </div>

                <div className="partner-section">
                    <div className="container">
                        <section>
                            <PartnerCard />
                        </section>
                    </div>
                </div>

                <div className="testimonial-section"></div>
                
                <div className="container">
                    <section>
                        <TestimonialCard />
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;