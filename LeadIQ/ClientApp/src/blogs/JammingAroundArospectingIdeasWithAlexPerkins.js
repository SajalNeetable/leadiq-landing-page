import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class JammingAroundArospectingIdeasWithAlexPerkins extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Jamming Around Prospecting Ideas with Alex Perkins"
                    description="When it comes to prospecting, sometimes it can be tough to think of creative prospecting ideas. S today, Alex Perkins and I sat down and discussed some cool prospecting ideas Alex has tried at Bizible, and new ones that be worth trying.  We talk about using direct mail for prospects, following up when you try and something and don’t hear back, and also how to take things to the next level. Watch our brainstorm here:"
                    author="Ryan O’Hara and Alex Perkins"
                    date="Feb 20, 2018"
                    imageUrl=""
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-center mt-3">
                                    <iframe src="https://www.youtube.com/embed/SDJe-zBzyc8" scrolling="no" />
                                </div>
                                <h3 className="mt-3"><a href="https://www.linkedin.com/in/alex-perkins-a6b61613a/">More info about Alex.</a> </h3>
                            </div>
                        </div>

                        <section className="text-center">
                            <p>You could be prospecting 100 free leads right now...just hit the button.TRY IT NOW</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>

        );
    }
}

export default JammingAroundArospectingIdeasWithAlexPerkins;