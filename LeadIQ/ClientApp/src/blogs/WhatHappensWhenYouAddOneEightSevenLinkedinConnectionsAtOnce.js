import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class WhatHappensWhenYouAddOneEightSevenLinkedinConnectionsAtOnce extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="What Happens When You Add 187 LinkedIn Connections at Once"
                    description="A few weeks back, I asked followers what I should do with the 187 LinkedIn connection requests that I’ve had. Some folks asked me to add them all,
                                    and report my findings.  Here’s what happened, and some commentary on how to do well with LinkedIn Connection Requests:"
                    author="Ryan O’Hara"
                    date="Apr 19, 2018"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe src="https://www.youtube.com/embed/2cIeTiHDWzk" title="video" scrolling="no" /></div>
                                </div>
                        </div>

                        <section className="text-center">
                            <p>Try 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
               );
    }
}

export default WhatHappensWhenYouAddOneEightSevenLinkedinConnectionsAtOnce;