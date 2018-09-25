import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastWithTitoBohrt extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast with Tito Bohrt"
                    description="Ryan O’Hara sits down with Tito Bohrt, CEO of AltiSales and talks about prospecting, how to structure SDR teams, and the future of researching prospects."
                    author="Ryan O'Hara"
                    date="Jun 20, 2018"
                    imageUrl="/img/Tito_Bohrt.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461068527&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"  scrolling="no"/>
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>We should really create a cookie-monster esque character to represent LeadIQ that loves leads just like the other loves cookies. Here's 100 on us.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default ProspectingPodcastWithTitoBohrt;