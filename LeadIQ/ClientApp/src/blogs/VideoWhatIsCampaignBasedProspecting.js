import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class VideoWhatIsCampaignBasedProspecting extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Video: What is Campaign Based Prospecting?"
                    description="You’ve probably heard a lot of people talk about Account Based Selling. Today, I’m going to talk about something a little different. It’s called Campaign Based Selling. Learn how it ramp up your prospecting significantly in this video:"
                    author="Ryan O’Hara"
                    date="Jan 26, 2018"
                    
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe src="//play.vidyard.com/S2YErxh8bz8N2tuJoZPVSa.html?v=3.1.1" scrolling="no" />
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

export default VideoWhatIsCampaignBasedProspecting;