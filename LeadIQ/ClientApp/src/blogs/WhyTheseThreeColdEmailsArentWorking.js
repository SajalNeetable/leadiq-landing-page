import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class WhyTheseThreeColdEmailsArentWorking extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="VIDEOS: Why These 3 Cold Emails Aren’t Working"
                    description="Today I decided to go through some of the cold emails folks have sent me and give feedback on how to make them better. Let’s jump right in."
                    author="Ryan O’Hara"
                    date="May 23, 2018"
                    imageUrl="/img/ryan-scooter.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                              <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe  src="//play.vidyard.com/EFDbhSqiGdNeWxjRarWFXZ.html?v=3.1.1"  scrolling="no" />
                                </div>

                                <h4 className="mt-4">Here’s another one that is hard to read. The content isn’t very engaging or entertaining:</h4>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-4">
                                    <iframe src="//play.vidyard.com/JgmDgQgi5unojJneHk6o6J.html?v=3.1.1" scrolling="no" />
                                </div>

                                <h4 className="mt-3">This one may be one of the toughest ones I have ever done. Trying to be helpful for this person. Never give out pricing in a cold email! EVER!</h4>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-4">
                                    <iframe src="//play.vidyard.com/MBvwrC4V9RhF2Fjub5BCiP.html?v=3.1.1" scrolling="no" />
                                </div>

                                <h4 className="mt-3">Hope these are helpful for everyone!</h4>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Want to write some cold emails to some fresh leads? Try 100 free leads of LeadIQ.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
        );
    }
}

export default WhyTheseThreeColdEmailsArentWorking;