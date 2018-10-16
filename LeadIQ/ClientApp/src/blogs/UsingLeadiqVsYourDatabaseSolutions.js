import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class UsingLeadiqVsYourDatabaseSolutions extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Using LeadIQ vs. Your Database Solutions"
                    description="There are plenty of sales prospecting tools to pick from. Everyday, there seems to be new data tools emerging with their own different ways of getting data."
                    author="Cody Stevens"
                    date="Aug 21, 2018"
                    imageUrl="/img/fishing.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>Some teams may even be using more than one source for data. A good way to think about Database solutions vs. LeadIQ is sort of like a fish market vs. a fishing rod.</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="/img/fish-market.jpg" className="img-fluied" alt="fish-market" />
                                        <small className="justify-content-center row">When you Google fish market, this is what comes up. So I guess this is what a fish market looks like.</small>
                                    </div>
                                </div>

                                <p className="mt-3">When you go to the fish market, you are there to buy fish. With database solutions, you are buying access to a large library of leads. Many tools out there will give you things like First Name, Last Name, Company, Org Charts, contact emails, and phone numbers.</p>

                                <p>When the data is there, it’s magical. You can write an email, call them, and attack your prospect right from the contact card you found.</p>

                                <p>While we like database tools, the big tragic flaw with them is they tend to create a workflow for sales reps where they think the information we mentioned above is enough for a rep to do an activity.<strong> It isn’t. </strong></p>

                                <p>This is a visual of the workflow of what we usually see when someone is using a database solution:</p>

                                <div className="text-center mt-3">
                                    <img src="/img/reps-prospect.png" className="img-fluied" alt="reps-prospect" />
                                </div>

                                <h3 className="mt-5">If you think this workflow is boring, just imagine your rep doing this 50  times a day.</h3>

                                <p>
                                    If the person you are looking for isn’t in their database, you can’t prospect them without guessing the contact information, and this can be really tedious and painful.
                                    Add in the fact that the average person changes jobs once every 18 months, data can get out of date very quickly.
                               </p>

                                <p>So how is LeadIQ different than a database solution?</p>

                                <p>Using this metaphor, when you buy LeadIQ, it’s more like you are buying a fishing rod to find your own fish.</p>

                                <div className="row">
                                    <div className="col-md-2" />
                                    <div className="card blog-card mt-3 col-md-8">
                                        <div className="card-body">
                                            <img src="/img/fishing.jpg" className="img-fluied" alt="fishing" />
                                            <small className="justify-content-center row">Ah…the great outdoors. You’ll get in touch with the wilderness when you demo LeadIQ. </small>
                                        </div>
                                    </div>
                                    <div className="col-md-2" />
                                </div>
                                <p className="mt-3">
                                    LeadIQ makes it easy for you to find contact information for your leads in real time. All you have to do is search for your prospects from across the web. Using first name, last name, and company name,
                                    we’ll do 100s of queries a second to find your prospect’s company data, email address, and direct phone number.
                                </p>

                                <p>
                                    Since we’re asking our users to find the prospect first on a company’s marketing materials, social media, or on a company team page, we can look up and verify the data in real time. We’ll will attempt
                                    to verify the contact information for you. If for someone reason we can’t verify it, we’ll tell you what our best guess is if the contact is unverified.
                                </p>

                                <p>Part of this look up will also allow you skip having to manual process of exporting or creating the contacts and leads in Salesforce.</p>

                                <p>This is a good visual of how we handle these things on the backend:</p>

                                <div className="text-center mt-3">
                                    <img src="/img/rep-dos.png" className="img-fluied" alt="rep-dos" />
                                </div>

                                <p className="mt-3">
                                    LeadIQ is all about trying to put research first. Since you are finding your prospect on the web, you can easily find things to bring up outside of their role and company. This makes personalization
                                    much easier, and much more scalable for those who want their reps personalizing without sacrificing their number of touches.
                                </p>

                                <p>Here’s table that compares purchasing from a B2B database vs. a real time data finder like LeadIQ:</p>

                                <div className="text-center">
                                    <img src="/img/b2b-database-pros.jpg" className="img-fluied" alt="b2b-database-pros" />
                                </div>

                                <p>So if you are prioritizing thoughtful research and outreach over mass messaging you will want to get in the habit of sourcing individual contacts because it becomes easier to discover things you can bring up from your research in your prospecting.</p>

                                <p>You are 11 times more likely to get a reply from a prospect if you mention something involving your research. Research based prospecting works.</p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Ok Cody...I'll try out 100 free leads!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Cody Stevens"
                            imageUrl="/img/cody-headshot.jpeg"
                            profile="Cody Stevens is a prospecting warrior, looking to join the likes of other LeadIQ greats. Some would say he is the Ash Ketchum of prospecting. He wants to be the very best, like no one ever was." />
                    </div>
                </div>
            </div>
        );
    }
}

export default UsingLeadiqVsYourDatabaseSolutions;