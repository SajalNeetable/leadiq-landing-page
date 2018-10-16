import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class RyanOharaDiscussesCreativeProspectingPredictableRevenuePodcast extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Ryan O’Hara Discusses Creative Prospecting on the Predictable Revenue Podcast"
                    description="A few months ago, Ryan hopped on the Predictable Revenue Podcast with Aaron Ross and Collin Stewart. Ryan is a seasoned sales and marketing professional whose unique views on prospecting have been covered by Mashable, CNN Money and The Next Web. He’s also a popular keynote speaker and experienced startup mentor. Needless to say, Ryan is making some noise."
                    author="Ryan O’Hara"
                    date="Aug 16, 2017"
                    imageUrl="/img/predicated-revenue-podcast.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>Throughout the podcast, Collin, Aaron and Ryan dig deep into Ryan’s (and his team’s) creative prospecting style and how it results in a 30% (that’s right, 30%) response rate.</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/kAGHGZyUTn8" title="video"  scrolling="no" />
                                </div>

                                <p className="mt-3">
                                    Highlights include: Ryan’s thoughts on account-based marketing (<a href="https://www.youtube.com/watch?v=kAGHGZyUTn8#">4:36</a>), the benefits of working a small number of accounts
                                    (<a href="https://www.youtube.com/watch?v=kAGHGZyUTn8#">7:38</a>), LeadIQ’s hiring process (<a href="https://www.youtube.com/watch?v=kAGHGZyUTn8#">19:14</a>), and some of  the ‘crazy stuff’
                                    Ryan has done (<a href="https://www.youtube.com/watch?v=kAGHGZyUTn8#">33:27</a>).
                                 </p>

                                <p><strong>You can get some cool highlights and thoughts from <a href="http://predictablerevenue.com/blog/creativity-is-key-leadiqs-ryan-ohara-shares-his-thoughts-on-the-future-of-prospecting">Collin here</a>.</strong></p>

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

export default RyanOharaDiscussesCreativeProspectingPredictableRevenuePodcast;