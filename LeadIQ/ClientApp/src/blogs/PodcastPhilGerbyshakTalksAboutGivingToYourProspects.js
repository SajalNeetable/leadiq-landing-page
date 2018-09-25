import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class PodcastPhilGerbyshakTalksAboutGivingToYourProspects extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Podcast: Phil Gerbyshak talks about giving to your prospects."
                    description="In the latest episode of the Prospecting Podcast, we talk with everyone’s favorite social selling teacher, Phil Gerbyshak (more about Phil on his website)"
                    author="Ryan O’Hara"
                    date="Mar 19, 2018"
                    imageUrl="/img/phil-gerbyshak.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>Did you know that a ton of your LinkedIn connections may be getting scared away, just by your LinkedIn headline?</p>

                                <p>Here’s the Prospecting Podcast episode…take a listen:</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F416022570&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000" scrolling="no" />
                                </div>

                                <p className="mt-3">If you want to take a crack and prospecting some new leads, and are looking for the missing part of your sales stack….make sure you try out our 100 free leads we’re offering.</p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>I want 100 free leads. TAKE ME TO THERE!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
        );
    }
}

export default PodcastPhilGerbyshakTalksAboutGivingToYourProspects;