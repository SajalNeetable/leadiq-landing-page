import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class ColdCallingTheDosAndTheDonts extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Cold Calling: The Do’s and The Don’ts"
                    description="The art of cold calling takes a minute to learn and a lifetime to master.Although cold emailing has taken place as the norm for cracking into a prospect’s account, cold calling is still as valuable a skill as it used to be."
                    author="Jack O’Hara"
                    date="Jul 23, 2018"
                    imageUrl="/img/exiting-call.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>
                                    Throughout my internship this summer, I have seen some very carefully crafted cold emails that happened to convert prospects to opportunities. Sales is often times too automated.
                                    With cadences being sent out by the thousands, and call centers spamming decision makers all the time, to get a phone call that is actually full of consideration is refreshing.
                                </p>

                                <p>
                                    There’s one problem with cold calling however… Instead of being left on read, or having the prospect get cold, the prospect will give every objection in the book to try and avoid the phone call.
                                    Ryan O’Hara and Jeremy Leveille give a good demonstration on objections in cold calls in this mock call. They give some valuable commentary at the end about how each could have improved.
                                </p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-5">
                                    <iframe  src="https://www.youtube.com/embed/2596VfhQwb0" scrolling="no" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Wanna learn how to do more organized prospecting? Get the Campaign Based Prospecting Cheat Sheet below!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jack the Intern"
                            imageUrl="/img/jack-the-intern.jpg"
                            profile="Working towards a career in the Marketing field where I hope to one day assist businesses and individuals with bettering how they do business. Refining the way that salespeople prospect and giving them the tools to better their reply rate is my current goal. Excited to see what LeadIQ can do as a company going forward!" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ColdCallingTheDosAndTheDonts;