import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class WhatILearnedInterningAtLeadiqThisSummer extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="What I Learned Interning at LeadIQ This Summer"
                    author="Jack O’Hara"
                    date="Aug 15, 2018"
                    imageUrl="/img/leadiq-interning-summer.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.</p>
                              
                            </div>
                        </div>

                        <section className="text-center">
                            <p>Try 100 free leads that drove Jack into a constant state of delirium.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jack the Intern"
                            imageUrl="/img/real-headshot.jpeg"
                            profile="Jack the Intern interned like no intern has ever interned before. We'll miss him. Good bye old friend." />
                    </div>
                </div>
            </div>
        );
    }
}

export default WhatILearnedInterningAtLeadiqThisSummer;