import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class HowToUseYourProspectingListsOnSocialMedia extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How To Use Your Prospecting Lists on Social Media"
                    description="We come across and work with email prospect lists all the time from various sources. Sometimes from a sponsored event or a webinar we hosted, other times it might be from a list we exported from our CRM, or from when we use LeadIQ to build a list from across the web."
                    author="Ryan O’Hara"
                    date="Jul 17, 2018"
                    imageUrl="/img/landscape-terminator-time-travel-theories.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>What comes next however is critical. Sure you could do calling or emailing, but did you know you can put your prospect lists to work on social media with Twitter and Facebook. Let’s jump into two quick tips on how you can put your prospecting lists to work on social media.</p>

                                <h3 className="mt-5">Tip #1: Build a custom audience for social media ads</h3>

                                <p>Using social ads is a great way to get your message or your product in front of the right people. Maybe you want to get more impressions, or just remind a prospect that you exists? While every social network is different, they all allow for you to build an audience based on their location, interests and professions.</p>

                                <p>One secret weapon is uploading a custom CSV file full of emails into social sites, and creating ads around it.</p>

                                <p><a href="https://business.twitter.com/solutions/tailored-audiences">Twitter</a> and <a href="https://www.facebook.com/business/help/170456843145568">Facebook</a> allow you to create custom audiences based on email addresses, which allows you to target not only them, but lookalike audiences as well that match your prospects.</p>

                                <p>
                                    Setting up audiences on either network does require you to add payment options and may interfere with ongoing campaigns from your social media or marketing teams, so as an individual in a team
                                    it may be a good idea to connect with them before launching, however, the results can be super powerful. Imagine writing a cold email to a prospect, and then they see your face and ad right on their social media feed.
                                 </p>

                                <p>The way this works is Twitter and Facebook matching up your email data you’ve collected with a corresponding account. On LeadIQ, you can unlock personal email addresses with premium credits, and then match that up with your CSV upload.</p>

                                <p>We’re not going to tackle how to make a social ad today, but this tip works great for getting yourself out there in front of your prospects.</p>

                                <h3 className="mt-5">Tip #2: Follow your prospects on Twitter in bulk.</h3>

                                <p>You can import your lead lists to Twitter, however you can’t import thousands of contacts at once otherwise your account will be suspended. This tactic is best for smaller lists or batches of 100 at a time. Here’s how to do it.</p>

                                <p>First, upload your prospect lists into your Google or Outlook address book. Once this is complete, go to Twitter.</p>

                                <p>On the right of your Twitter homepage is a “Who to follow” section. Click “Find friends” toward the bottom</p>

                                <div className="text-center mt-3">
                                    <img src="/img/who-to-follow.png" className="img-fluied" />
                                </div>

                                <p className="mt-3">A list of networks will appear (Gmail, Outlook etc). Choose the network your contacts are stored in to search your contacts</p>

                                <div className="text-center mt-3">
                                    <img src="/img/find-friends.png" className="img-fluied" />
                                </div>

                                <p className="mt-3">A window will pop up asking you to authorize access (say “yes”)</p>

                                <p>Pick and choose which contacts you would like to follow. They will be notified that you are now following them. Remember, don’t choose more than 50-100 or you risk your account being suspended.</p>

                                <div className="text-center mt-3">
                                    <img src="/img/gmail-contacts.png" className="img-fluied" />
                                </div>


                                <p className="mt-3">Once this is done, you can shoot an email to the prospects you followed and mention that you just followed them on Twitter.</p>

                                <p>Now you have a trigger to get your foot in the door.</p>



                            </div>
                        </div>

                        <section className="text-center">
                            <p>100 free leads?! Go ahead and take 'em, we got plenty!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default HowToUseYourProspectingListsOnSocialMedia;