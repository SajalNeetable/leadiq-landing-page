import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class FiveTipsToConquerYourLeadiqTrial extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="5 Tips To Conquer Your LeadIQ Trial"
                    description="If you just downloaded a LeadIQ trial, you may be wondering what all this LeadIQ silly business is, and how it can help you with your lead generation. If you haven’t downloaded a trial yet, these tips are still worth skimming! We thought it’d be a good idea to put together some basic tips to help you get the most of your trial. Here are 5 tips to conquer your LeadIQ trial and get the most out of it."
                    author="Ryan O’Hara"
                    date="Jan 22, 2018"
                    imageUrl="/img/an-eagle.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h3 className="mt-3">Tip #1: Grab your prospects right off the web.</h3>

                                <p>
                                    Got a dream account you’ve been trying to break into. Visit their company page right on LinkedIn, and browse through their employees. As you are on the profile,
                                    open up LeadIQ and you can get your prospect’s phone number in in 1 easy click. We’ll save all your captures right into a campaign for you inside our web app.
                                </p>

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/leadIq-sales-navigator.gif" className="img-fluied" />
                                        <small className="justify-content-center row">Use LeadIQ to detect companies and names, then capture your leads as you browse the web.</small>
                                    </div>
                                </div>

                                <h3 className="mt-5">Tip #2: It’s all about the verifies baby!</h3>

                                <div className="text-center mt-3">
                                    <img src="/img/an-eagle-fly.gif" className="img-fluied" />
                                </div>

                                <p className="mt-3">
                                    If you find yourself quickly swooping down on your prospects like a eagle, you may get annoyed writing them a cold email and having it bounce. LeadIQ not only finds email addresses for you,
                                    it’ll verify whether the email address is active or not. Check marks mean it has a 95% chance of getting delivered.
                                </p>
                                <p>Remember, unverified emails don’t count toward your account’s demo credits. The best prospectors only hit up the verified emails.</p>

                                <h3 className="mt-5">Tip #3:  Connect LeadIQ to Salesforce.</h3>
                                <p>
                                    A true hunter is also a team player. That means not praying on your team member’s prospects, accounts, and opportunities. Connect Salesforce to LeadIQ, and we’ll detect existing records
                                    in Salesforce as you browse the web. This saves you LeadIQ credits, and also helps you and team members not fight over the same prospects. After connecting, look for the Salesforce cloud
                                    as you browse the web.
                                </p>

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/linkedin-terrance-knowk.gif" className="img-fluied" />
                                        <small className="justify-content-center row">Look for the Salesforce icon inside the app as you browse LinkedIn to see who is in your CRM already. Hover over the cloud to link right to the record.</small>

                                    </div>
                                </div>

                                <p className="mt-3">You didn’t think we were just going to tell you who is in Salesforce right? You can save prospects from the web right into Salesforce as leads, or contacts in accounts. You can even make a new account when you capture a prospect.</p>

                                <h3 className="mt-5">Tip #4: Use LeadIQ on other sites.</h3>

                                <p>If you find yourself visiting your prospect’s website, reading their blog posts, or visiting their exec team page, you can highlight a name, right click on it, and push it into LeadIQ to find and save their contact information.</p>

                                <div className="embed-responsive embed-responsive-16by9 text-center mt-3">
                                    <iframe src="//play.vidyard.com/T6PW3aEWwGgrfy1LYZ3nKT.html?v=3.1.1" scrolling="no" />
                                </div>

                                <h3 className="mt-5">Tip #5: Search for contacts right inside LeadIQ</h3>

                                <p>While prospecting off the web is great, LeadIQ has amassed over 10 million verified prospects you can browse right inside our web app. Search for your target accounts, and hand pick prospects you’d like to save.</p>

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/leadiq-search.gif" className="img-fluied" />
                                        <small className="justify-content-center row">You can search for prospects directly from LeadIQ’s community database.</small>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>

        );
    }
}

export default FiveTipsToConquerYourLeadiqTrial;