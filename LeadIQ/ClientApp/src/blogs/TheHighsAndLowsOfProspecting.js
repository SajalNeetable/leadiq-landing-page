import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class TheHighsAndLowsOfProspecting extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="The Highs and Lows of Prospecting"
                    description="Prospecting can be hard for anyone. I’ve been doing sales since 2011, and after a while you develop a strategy to cope with rejection from a prospect. My strategy:"
                    author="Jeremy Leveille"
                    date="Aug 10, 2018"
                    imageUrl="/img/maxresdefault-leadiq.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>I prospect more… (kind of)</p>
                                <p>I deal with rejection weekly. In this video, I talk about the ups and downs of prospecting, and give a little advice on how to deal with rejection or rude prospects.</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/Vy4viGAJ9BQ" title="video" scrolling="no" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're here for you. That's why we're giving you 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jeremy Leveille"
                            imageUrl=" /img/Jeremy-Leveille.png"
                            profile="Choose a job you love, and you will never have to work a day in your life -ConfuciusMy goal with every call I make, every e-mail or InMail I send is to be 'helping' rather than 'annoying'. I treat everyone I interact with like a person - not a commission check.I'm passionate about helping people, about technology and about consultative selling. I love to be challenged, I love to learn and I love being around positive people!" />

                    </div>
                </div>
            </div>
        );
    }
}

export default TheHighsAndLowsOfProspecting;