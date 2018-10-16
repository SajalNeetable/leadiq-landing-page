import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class TheFlawsWithAMeFirstMentalityInSales extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="The Flaws With A Me First Mentality in Sales"
                    description="As many of you know, we do a ton of RateMyPitch events throughout the year where we look at cold emails, and coach thousands of sales reps on how to get prospects to respond to your cold emails."
                    author="Ryan O’Hara"
                    date="Jan 16, 2018"
                    imageUrl="/img/bear-fights.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>Today I want to focus on the most frequent trait that makes my RateMyPitch judges mark down emails : <strong>“the me first” email.</strong></p>
                                <p>I’d call “me first emails” the nail in the coffin that kills the potential for your prospect to respond, but unfortunately, it’s actually the first thing that turns someone off of your cold email.</p>
                                <p>If you are sending this type of email (and I know most of you are because I get emails all the time) your email is dead on arrival the second it gets read.</p>

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/bear-fights.jpg" className="img-fluied" alt="bear-fights" />
                                        <small className="justify-content-center row">Similar to fighting a bear, your selfish emails are dead the moment the fight starts.</small>
                                    </div>
                                </div>

                                <h4 className="mt-3">Many people think that  a cold email’s purpose is to get someone excited about talking about your product or service… the true purpose of a cold email is to get someone excited about starting a relationship with you.</h4>

                                <p>
                                    Think about cold email for a second. It’s whole purpose is to simulate walking up to someone in person, and trying to start a conversation with them. I’m not exactly sure how we got so bad at this.
                                    I think since inside reps adopted cold email first, it created this idea to have cold email emulate a call script (which are also bad by the way).
                                </p>

                                <p>When you are sending a cold email to someone, you need to have charisma. You need to show that you’re willing to do anything for the person you don’t know, and you need to focus on why YOU ARE INTERESTED IN THEM more than why your company’s product or service is interesting.</p>
                                <p>
                                    Spouting off a hundred different things about your company’s service or product isn’t going to excite more than a small handful of prospects. The opportunities you get from doing that are great,
                                    but let’s be honest: most of them are pure luck. Sales definitely needs some luck, but as a Sales Development Rep, or Account Executive, your job with prospecting shouldn’t rely only on luck.
                                </p>

                                <p>I had a LeadIQ customer tell me the other day they send out 1100 emails a day, and hear back from maybe 1-2 people a day. Their unsubscribe rate was almost 7%, and their reply rate was less than .5%.</p>

                                <p>They asked me for advice.  I asked them to send me their emails, and I died a little inside reading them. All of their emails were too long. They were templated, and they spouted off 3-4 reasons why
                                   I should look at their company, a few companies they work with, and then it asked me when would be a good time to talk.
                                </p>

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/chat-about-EH&S.png" className="img-fluied" alt="chat-about-EH&S" />
                                        <small className="justify-content-center row">The most selfless email I have ever read.</small>
                                    </div>
                                </div>
                                <p>Think of it like this: most of your prospects don’t know what value your product brings. Telling them about it is great, but wouldn’t you rather go over the majority value on a scheduled meeting as opposed to a cold email?</p>

                                <p>I love comparing prospecting to dating. If you went up and approached someone, and just starting talking about yourself, what would they do?</p>

                                <h3 className="mt-5">That’s some Gaston bullshit (yes I’m referencing Gaston from Beauty and the Beast… you all know who I’m talking about):</h3>

                                <div className="embed-responsive embed-responsive-16by9 text-center mt-3">
                                    <iframe src="https://www.youtube.com/embed/VuJTqmpBnI0" title="video"  scrolling="no" />
                                </div>
                                <p>You’d be laughed out of a room. Yet…so many sales reps do this.</p>

                                <h3 className="mt-5">I try to get my company’s WHY statement out of the way in one or two sentences tops. </h3>
                                <p>This not only will help you with personalization, but also make it a lot more fun to write cold emails. When your prospect responds, you’ll have way more things to talk about on a call that aren’t being repeated from your cold email.</p>
                                <p>This approach also works great for a cold call as well. If you are having trouble getting people to agree to book a meeting off your cold call, you likely are being too selfish with your phone call.</p>
                                <p>
                                    I remember when I first purchased <a href="http://vidyard.com">Vidyard</a> for our marketing and sales team.<a href="https://www.linkedin.com/in/thomas-loepp-thiessen-b1744282/"> Thomas Thiessen</a>,
                                    one of their BDRs,  pitch me over a phone call. He opened up his call telling me how he read about a <a href="https://thenextweb.com/shareables/2012/02/17/now-this-is-how-to-pitch-for-business-from-your-dream-clients/#gref">cool video prospecting campaign</a>
                                    I had done, and how he thought we could do some cool things with Vidyard. Instantly he had my attention.
                                </p>

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/pitch-for-business-deram-client.png" alt="pitch-for-business-deram-client" className="img-fluied" />
                                        <small className="justify-content-center row">The article Vidyard’s BDR referenced</small>
                                    </div>
                                </div>

                                <p className="mt-3">He didn’t tell me about their features, or their great client lists. He talked about possibility, and about why I was his chosen prospect. He earned my attention, and earned the next call.
                                   Then Shikha Bindra earned my account by not selling me, but helping me decide whether I should buy.
                                </p>
                                <p>All of this was done because of the way they approached me.  I want to talk about one last thing: removing the “me first” mentality from sales altogether.</p>
                                <p>
                                    I hate getting on vendor calls and just listening to them go through slides, and screencast of their product in action. So many sales reps get on the first phone call,
                                    and it turns into me getting guided on their “selling process”. <strong>The best sales calls are when someone asking me questions about problems we may be facing, and
                                    guiding me through their buying process.</strong>
                                </p>
                                <p>
                                    Step back for a second. Today when you prospect…I want you to write your cold emails and make you cold call content focused more on your prospect than your product or service.
                                    Focus on them on a human level, then on the account level if you can’t find anything on them individually.
                                </p>
                                <p>I guarantee you’ll see your positive reply rate or conversation rate go up, and your unsubscribes/take me off your lists responses go down.</p>

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

export default TheFlawsWithAMeFirstMentalityInSales;