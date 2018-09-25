import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class VoteForJeremyLeveilleAsSdrOfTheYear extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Vote for Jeremy Leveille as SDR of the Year"
                    author="Ryan O'Hara"
                    date="Aug 23, 2018"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <strong>We love Jeremy. So should you. Here’s why:</strong>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-5">
                                    <iframe src="https://www.youtube.com/embed/zYfv1kVU7UQ" scrolling="no" />
                                </div>

                                <h3 className="mt-3"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfNTZ5CMvI47KINkaBxZb1tPDL1nIc_OU2531ug3J07dFpKBg/viewform">Vote for Jeremy as SDR of the year. They announce winners at the Sales Development Conference next week!</a></h3>
                            </div>
                        </div>

                        <section className="text-center">
                            <p>Nominate Jeremy to vote. Hit the button below to submit your vote.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default VoteForJeremyLeveilleAsSdrOfTheYear;