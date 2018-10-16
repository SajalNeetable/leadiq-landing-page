import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class RyansPersonalPitchVideoForLeadiq extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Ryan’s Personal Pitch Video for LeadIQ"
                    description="When we’re prospecting at LeadIQ, rather than talk about us, we include a personal pitch video that shows a prospect my personality, my back story, and how the product may help. This is the video we use:"
                    author="Ryan O'Hara"
                    date="Aug 18, 2016"
                    imageUrl="/img/expainer-video-player.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-center mt-3">
                                    <iframe src="https://www.youtube.com/embed/HPxZuCYkgMk" title="video"  scrolling="no" />
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

export default RyansPersonalPitchVideoForLeadiq;