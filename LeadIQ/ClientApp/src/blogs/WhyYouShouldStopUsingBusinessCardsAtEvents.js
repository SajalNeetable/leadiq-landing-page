import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class WhyYouShouldStopUsingBusinessCardsAtEvents extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Why You Should Stop Using Business Cards at Events"
                    description="A drawer full of business cards you never followed up on… Your flashy, super fancy $3 business card is a wasted effort. I know that might sting a bit, but let me explain. How many people actually follow-up after a networking event? How many people put that business card to use? My guess, less than 5%."
                    author="Kyle J. Burt"
                    date="Feb 21, 2018"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>Follow-up is crucial to <a href="https://www.linkedin.com/in/juddborakove/">Judd Borakove</a>’s<a href="https://www.linkedin.com/search/results/content/?keywords=%234C%E2%80%99s&origin=HASH_TAG_FROM_FEED"> #4C’s</a>, but not many people do it well, let alone at all.</p>

                                <p>Here’s something you can try to increase engagement, follow-up, and commitment to growing your network. Make a switch to digital business cards. Save your prospective connection a ton of work, and hopefully make a lasting impression.</p>

                                <h3 className="mt-5">Let me show you how it’s done:</h3>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe  src="https://www.youtube.com/embed/9N1s-2qkNHE" scrolling="no" />
                                </div>
                            </div>
                        </div>

                        <section className="text-center">
                            <p>Did you know you can upload a CSV of event attendees and get their contact data? Try 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Kyle J. Burt"
                            profile="Kyle J. Burt is passionate about technology, educating others about technology, and watching businesses grow as a result of dominating technology. He is a founder and at Catch Solutions. Email Kyle: Kyle@Catchcloud.Com Call/Text me, you know you want to: 214-865-6918" />
                    </div>
                </div>
            </div>
        );
    }
}

export default WhyYouShouldStopUsingBusinessCardsAtEvents;