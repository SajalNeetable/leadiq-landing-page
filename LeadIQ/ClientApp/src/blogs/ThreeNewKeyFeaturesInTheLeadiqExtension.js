import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class ThreeNewKeyFeaturesInTheLeadiqExtension extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="3 New Key Features in the LeadIQ Extension"
                    author="Jim Morris"
                    date="Nov 2, 2017"
                    imageUrl="/img/Ben-Parr-Laptop.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h3>Brace yourself for the next evolution of LeadIQ!</h3>
                                <p>Evolution is usually slow. But every so often it takes a big leap forward. Behold! The new LeadIQ. Let’s take a look at three cool new features that we think you’re going to like.</p>

                                <div className="text-center">
                                    <img src="/img/Mazza-Laptop-Example.png" className="img-fluied" alt="Mazza-Laptop-Example" />
                                </div>

                                <h3 className="mt-5">#1. See emails BEFORE CAPTURING!</h3>
                                <p>In the old LeadIQ, you had to visit the web application and view your lists to see the contact information LeadIQ found.</p>

                                <div className="text-center">
                                    <img src="/img/cole-leadiq.png" className="img-fluied" alt="cole-leadiq" />
                                </div>
                                <p className="mt-3">Now you don’t have to capture prospects to see their emails. You’ll see emails sourced from our community appear automatically right in the extension.</p>

                                <h3 className="mt-5">#2. Salesforce features right in the extension!</h3>
                                <p>Now you can associate your prospect with a Salesforce account right from the capture tool.</p>
                                <div className="text-center">
                                    <img src="/img/kip-bodnar.png" className="img-fluied" alt="kip-bodnar" />
                                </div>
                                <p className="mt-3">Just start typing the account name for your prospect and we’ll do a live Salesforce lookup to help you find the correct one and avoid duplicates. Or create a new account!</p>

                                <h3 className="mt-5">#3. Account-based prospecting with 1 click!</h3>
                                <p>Now you can click a prospect’s company name in the extension to instantly see all of our verified emails from that account.</p>
                                <div>
                                    <img src="/img/hubspot-leadiq.png" className="img-fluied" alt="hubspot-leadiq" />
                                </div>

                                <h3 className="mt-5">So how do I upgrade?</h3>
                                <p>All you have to do is right click the extension icon in the top right and select “Use the new LeadIQ” and then launch the extension as normal.</p>
                                <div className="text-center">
                                    <img src="/img/leadiq-settings.png" className="img-fluied" alt="leadiq-settings" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jim Morris"
                            profile="Jim Morris runs Customer Success and Support at LeadIQ. If you ever need anything, just shoot an email over to support@leadiq.com." />

                    </div>
                </div>
            </div>
        );
    }
}

export default ThreeNewKeyFeaturesInTheLeadiqExtension;