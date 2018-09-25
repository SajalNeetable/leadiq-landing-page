import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingJamSessionWithMichaelPullmanFromZuusDynamicScheduling extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Jam Session with Michael Pullman from Zuus Dynamic Scheduling"
                    description="I remember when I first joined LeadIQ, I did a lot of prospecting to find early adopters for our product. This is how businesses are grown. It’s not about big wins, it’s about little wins everyday. Positive replies, positive phone calls, positive demoes, closed conversions, then customer referrals. If you can get enough of these, you may just figure out a way to stay around."
                    author="Ryan O’Hara"
                    date="Apr 12, 2018"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>
                                    One of the better friendships we’ve formed here has been with a creative, smart, and charismatic guy named<a href="https://www.linkedin.com/in/michaelpullman/"> Michael Pullman</a>,
                                    who works at<a href="https://www.zuusworkforce.com/"> Zuus Dynamic Scheduling</a>. They’ve been able to grow their team strictly with outbound. This prospecting jam session is a little
                                    bit more focused on using our product, but there are some cool ideas here about event prospecting, plus using social selling and connection data to break in.
                                 </p>
                                
                                <div className="text-center mt-3">
                                    <img src="/img/power-of-zuus.png" className="img-fluied" />
                                </div>

                                <p className="mt-3">And this was Michael’s awesome response:</p>

                                <p>This is what prospecting is about. Making a connection with someone, entertaining them, and demonstrating value. Let’s now dive into the our Prospecting Jam Session with MIchael…enjoy:</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe src="https://www.youtube.com/embed/VVHffIvUFLg" scrolling="no" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Feeling inspired? Try some of the things Ryan and Michael talk about with 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProspectingJamSessionWithMichaelPullmanFromZuusDynamicScheduling;