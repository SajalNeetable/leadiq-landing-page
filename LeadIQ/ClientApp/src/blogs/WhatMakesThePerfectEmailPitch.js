import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class WhatMakesThePerfectEmailPitch extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="What Makes The Perfect Email Pitch?"
                    description="Email comes naturally to many because, let’s face it, many liveday in day out in their inbox. Its very easy to to shoot off an email response without thinking if it’ll get the point across the first time because you’re likely to email back and forth a number of times with your coworker until you both are on the same page. But what about when you are reaching out to someone new?"
                    author="Ryan O’Hara"
                    date="Aug 18, 2016"
                    imageUrl="/img/perfect-email.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>
                                    Say someone who you only know through their tweets, their LinkedIn profile, their business card. Sure when prospecting, you’ve likely done your homework on them and know the nature of their work and their interests.
                                    You may have had drinks with them at a conference and gotten to know them personally. But now you want to connect professionally and help solve their problems. This is a different beast, but you just have to take your
                                    time and you’ll be crafting the perfect pitch in no time.
                                </p>
                                <p>
                                    So what exactly does make the perfect pitch? We’ve been reviewing pitches for a while now using<a href="http://ratemypitch.com/"> RateMyPitch</a> and have noticed that there are four key questions your email should be answering.
                                    First, let’s take a look at an example pitch and then we can address those questions:
                               </p>

                                <div>
                                    <img src="img/meeting-mail.png" alt="meeting-mail" />
                                </div>

                                <h3 className="mt-5">Why are you emailing me?</h3>
                                <p>This one’s pretty straight-forward, or rather it should be pretty clear to you by now. You have a solution they need. However, you should consider making the “why” more focused on their company’s potential needs and problems. This is the most important part of your email (your entire relationship really).</p>
                                <p>
                                    Without it, your prospect won’t understand why they should even waste their time on you. If you are not clear with your intention then they may assume you are reaching out to them about something else. Simon Sinek gave a fantastic Ted
                                    Talk several years back on <a href="https://www.youtube.com/watch?v=IPYeCltXpxw">starting with Why</a> and is totally worth your time to watch.
                                </p>

                                <div>
                                    <img src="img/my-role-mail.png" alt="my-role-mail" />
                                </div>

                                <p className="mt-3">If we look at this part of the pitch, it suggests that we should talk to them because they are offering free consulting services. It should be made clear that while they offer this free service, they are emailing because they are interested in learning what they are doing for the next several years.</p>
                                <h3 className="mt-5">How am I special to you?</h3>
                                <p>In your email, you want to be entertaining to them, showing them something that delights them and shows you care. Let’s take a look at another example:</p>

                                <div>
                                    <img src="img/supporting-gumbo-mail.png" alt="supporting-gumbo-mail" />
                                </div>

                                <p>This person started great by mentioning Conan, but ultimately failed to execute this well. You wouldn’t go up to a stranger at work in the company break room and say “how about that episode of Conan last night?” Probably not.</p>
                                <p>Instead, find a funny clip online and share it in the email. Make sure the clip is entertaining to them and tie it back to your product/service/whatever. You want to be able to differentiate yourself from everyone else emailing them and get them to like you. People hate saying no to people they like.</p>

                                <h3 className="mt-5">Who are you?</h3>
                                <p>A common way to start off an email to someone new is introducing yourself right off the bat with who you are and what you do (see the example above). This should exclusively be answered in your email signature. Make certain it includes your company’s website, your social info, contact info etc.</p>
                                <p>Including it in the body of your email makes it too long and more focused on you. Try coming up with a one sentence pitch about what you/your company does and that’s all you say in the email. This is key if you have a large portfolio of services/products to offer.</p>

                                <h3 className="mt-5">What do you want me to do with this email?</h3>
                                <p>It’s important that you have a clear and concise outcome of your email. What is it that you want from them? Let’s take a look again at that email above, specifically their ask</p>

                                <div>
                                    <img src="img/depend-on-schedule.png" />
                                </div>

                                <p>They did a great job of clearly stating their intent that they would like to schedule a meeting. It is important to establish a relationship with your prospect, but if that isn’t the only goal of your email to them then make certain its primary goal is as clear as day when emailing them.</p>
                                <p>It doesn’t take much to get the perfect pitch. Just remember that when you are writing to make certain it answers why you matter to them, how you can help them, and what it is that you are looking for. If it can address these, then you’re golden.</p>
                                <p>This post first appeared on our <a href="https://blog.leadiq.com/what-makes-the-perfect-email-pitch-d99bdfa341d8#.h220mphae">Medium Publication</a>.</p>

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

export default WhatMakesThePerfectEmailPitch;