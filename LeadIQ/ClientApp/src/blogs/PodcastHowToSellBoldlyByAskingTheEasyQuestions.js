import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class PodcastHowToSellBoldlyByAskingTheEasyQuestions extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Podcast: How To Sell Boldly by Asking Easy Questions with Alex Goldfayn"
                    description="Today, we talked with Alex Goldfayn about his new book, Selling Boldly, and how you can get more meetings and close more deals by just tweaking a few things in your pitch."
                    author="Ryan O’Hara"
                    date="Apr 2, 2018"
                    imageUrl="/img/alex-goldfayn.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423832299&amp;color=%23414b5e&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" scrolling="no"/>
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Boldly get 100 new fresh leads. Sign up for a 7 day free trial by hitting this bold button!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
        );
    }
}

export default PodcastHowToSellBoldlyByAskingTheEasyQuestions;