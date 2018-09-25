import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';
import RyanOHara from '../components/RyanOHara';

class LookingAtSomeColdEmails extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="RateMyPitch: Looking at Some Cold Emails"
                    description="With the holiday season in full swing, I decided to go through some cold emails and post them on LinkedIn. If you are looking for the best cold email template, or trying to figure out how to get more responses on cold email, watch these videos (you’ll like want to full screen these):"
                    author="Ryan O’Hara"
                    date="Dec 22, 2017"
                    imageUrl="/img/fireplace.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe src="//play.vidyard.com/qsJgRmXWomZue76K9vw1qs.html?v=3.1.1" scrolling="no" />
                                </div>

                                <h3 className="mt-3">These next two are from the same cadence.</h3>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="//play.vidyard.com/jhX3TVLtRMiZ5KU2guyvDY.html?v=3.1.1" scrolling="no" />
                                </div>


                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-5">
                                    <iframe src="//play.vidyard.com/3DChbjANrMZXCYfS6RvEWA.html?v=3.1.1" scrolling="no" />
                                </div>

                                <h3 className="mt-3">These next two almost makes the grade for an A, but loses me midway through. Here’s why:</h3>


                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="//play.vidyard.com/svWGqxp7wWw5TLzkoj8GiX.html?v=3.1.1" scrolling="no" />
                                </div>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-5">
                                    <iframe src="//play.vidyard.com/zeJ25VgYVW7mSRChxfet9X.html?v=3.1.1" scrolling="no" />
                                </div>

                                <h3 className="mt-5">This is a good email, but misses out on the important “Why are you emailing me” part of the email:</h3>

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

export default LookingAtSomeColdEmails;