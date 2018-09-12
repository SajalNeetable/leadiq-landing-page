import React from 'react';
import CheckboxItem from '../components/CheckboxItem';
import GetDemoButton from '../components/GetDemoButton';
import GetFreeLeadsButton from '../components/GetFreeLeadsButton';
//import Partners from '../components/Partners';
import PartnerCard from '../components/PartnerCard';
import TestimonialCard from '../components/TestimonialCard';
import UniversityCard from '../components/UniversityCard';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/home-cover.png" className="img-fluied" />
                    </div>
                    <div className="cover-content">
                        <div className="container">
                            <section>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>Prospect Smarter </h1>
                                        <p>Our mission at LeadIQ is to empower sales teams to prospect smarter. Build lead lists in minutes, not days. Ditch the old database and researchprospects first to build a more meaningful connection and close more deals.</p>
                                        <GetFreeLeadsButton size="lg" />
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
                                <h1>Search the web for new contacts</h1>
                                <p>Research prospects like you normally would and grab their contact information from across the web. Pull in multiple contacts at once from </p>
                                <ul className="list-unstyled">
                                    <CheckboxItem text="Powerful Chrome Extension" />
                                    <CheckboxItem text="Verified Emails" />
                                    <CheckboxItem text="Direct Dial Numbers" />
                                    <CheckboxItem text="And Mode ..." />
                                </ul>
                                <GetFreeLeadsButton size="lg" />
                            </div>
                            <div className="col-sm-6">
                                <img className="img-fluid" src="/img/feature-1.png" alt="Feature 1" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-sm-6">
                                <img className="img-fluid" src="/img/feature-2.png" alt="Feature 2" />
                            </div>
                            <div className="col-sm-6">
                                <h1>Advanced search filters</h1>
                                <p>Use powerful filters to find company and contact information. Account-based prospecting has never been easier.</p>

                                <strong>Search by</strong>
                                <ul className="list-unstyled">
                                    <CheckboxItem text="Job Title" />
                                    <CheckboxItem text="Company Size" />
                                    <CheckboxItem text="Description" />
                                    <CheckboxItem text="Technologies used" />
                                    <CheckboxItem text="And Mode ..." />
                                </ul>
                                <GetFreeLeadsButton size="lg" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="mt-5">Invite your team</h1>
                                <p className="mt-3">No one likes to prospect alone. Invite your team to use LeadIQ and get a high level overview of team performance.</p>
                                <GetFreeLeadsButton size="lg" />
                                <GetDemoButton size="lg" />
                            </div>
                            <div className="col-sm-6">
                                <img className="img-fluid" src="/img/feature-3.png" alt="Feature 3" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-sm-6">
                                <img className="img-fluid" src="/img/feature-4.png" alt="Feature 4" />
                            </div>
                            <div className="col-sm-6">
                                <h1 className="mt-5">Integrate With Your Favorite Sales Tools</h1>
                                <p className="mt-3">Push data from LeadIQ to your other sales tools. Easily send contact details to CRM or email outreach tools.</p>
                                <GetFreeLeadsButton size="lg" />
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
                <div className="imageDesignTestimonals">
                    <div className="container">
                        <section className="testimonalSection">
                            <TestimonialCard />
                        </section>
                    </div>
                </div>
                <div className="university-section">
                    <div className="container">
                        <section>
                            <UniversityCard />
                        </section>
                    </div>
                </div>


            </div>
        );
    }
}

export default Home;
