import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class HowToSetOutlookAsYourDefaultInbox extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How to set Outlook as Your Default Inbox"
                    description="The year is 2040. As you combat sentient robots in full scale rebellion of their former human owners, you can only think of one thing"
                    author="Jack The Intern"
                    date="Jun 12, 2018"
                    imageUrl="/img/landscape-terminator-time-travel-theories.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h3>I never set a default email so I could email my prospects directly from the LeadIQ Chrome Extension…</h3>

                                <p>Your small group of survivors yell out to you until you come out of the trance of realization. The fighting continues. Mankind is doomed… You could have stopped this if you set Outlook as your default mail extension.</p>

                                <p>Check out our steps to defaulting the desktop or browser version of Outlook as your email.</p>

                                <h3 className="mt-5">Step #1: Open <strong>Outlook</strong> and click on the <strong>“File”</strong> tab</h3>

                                <div className="mt-3">
                                    <img src="/img/outlook.png" className="img-fluied" />
                                </div>

                                <h3 className="mt-3">Step #2: Go into <strong>“Account Settings”</strong> </h3>

                                <div className="mt-3">
                                    <img src="/img/outlook-account-information.png" className="img-fluied" />
                                </div>

                                <h3 className="mt-3">Step #3: Click on the option to Make Outlook the default email underneath the <strong>“Start-Up Options” </strong>tab</h3>

                                <div className="mt-3">
                                    <img src="/img/outlook-home-page.png" className="img-fluied" />
                                </div>

                                <h3 className="mt-3">Step #4: That’s it!!! Just make sure that the option for the default email provider is checked off and you’ll be all set!</h3>

                                <div className="mt-3">
                                    <img src="/img/outlook-home-options.png" className="img-fluied" />
                                </div>

                                <div className="text-center mt-3">
                                    <img src="/img/burn-hand.gif" className="img-fluied" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Want to Get some emails to test out with your newly defaulted Outlook? Here's 100 on us:</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jack The Intern"
                            profile="Working towards a career in the Marketing field where I hope to one day assist businesses and individuals with bettering how they do business. Refining the way that salespeople prospect and giving them the tools to better their reply rate is my current goal. Looking forward to seeing what LeadIQ can do as a company going forward!" />

                    </div>
                </div>
            </div>
        );
    }
}

export default HowToSetOutlookAsYourDefaultInbox;