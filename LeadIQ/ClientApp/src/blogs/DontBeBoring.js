import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class DontBeBoring extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Video: Don’t Be Boring"
                    description="You’ve probably heard a lot of people talk about Account Based Selling. Today, I’m going to talk about something a little different. It’s called Campaign Based Selling. Learn how it ramp up your prospecting significantly in this video:"
                    author="Ryan O’Hara"
                    date="Jan 18, 2018"
                    imageUrl="/img/Peacock_Plumage.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe  src="//play.vidyard.com/4WKkyMCkp27xviGPV7uP6A.html?v=3.1.1" wscrolling="no" />
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

export default DontBeBoring;