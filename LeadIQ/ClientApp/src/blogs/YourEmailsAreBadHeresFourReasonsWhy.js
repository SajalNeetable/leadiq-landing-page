import React from 'react';
import BlogHeader from '../components/BlogHeader';
import GetTryFree from '../components/buttons/GetTryFree';
import RyanOHara from '../components/RyanOHara';

class YourEmailsAreBadHeresFourReasonsWhy extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Your Emails Are Bad. Here’s 4 Reasons Why."
                    author="Ryan O’Hara"
                    date="Jun 18, 2018"
                    imageUrl="/img/tony-hawk-skateboarding.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p><strong>Confession time — I haven’t always been amazing at writing emails.</strong></p>

                                <p>
                                    “But…but…but…Ryan, this can not be! You’re a humble genius. MX records look to you for direction”.
                                    I know it might seem like they are my little humble brag, but the truth is I’m just a guy who spent
                                    a lot of time email prospecting. Through trial and error, I’ve learned a few things along the way.
                                    I’ve heard it takes roughly 10,000 hours of practice to achieve mastery of a skill, though I don’t
                                    know if I’d agree with that. I mean, I’ve been skateboarding since I was eight and this is the only
                                    trick I have ever landed:
                               </p>

                                <div className="embed-responsive embed-responsive-16by9 mt-3">
                                    <iframe src="https://www.youtube.com/embed/XCCArevEIAY?feature=oembed&amp;amp;wmode=opaque" scrolling="no" />
                                </div>

                                <p className="mt-3">
                                    Regardless, honing your skills into something powerful takes considerable time. Over the years I
                                    have generated millions of dollars worth of pipeline with my old trusty Dell Inspiron 3000. I know
                                    what works and what doesn’t. So let’s take a closer look at why your emails might not be getting
                                    responded to.
                               </p>

                                <h3 className="mt-5">Reason 1 — you’re introducing yourself in your emails</h3>

                                <p>
                                    I’ve been asked to give feedback on people’s emails quite often, and one of the most common mistakes
                                    is that they are still introducing themselves in the body of an email. If you are a seasoned sales or bus-dev
                                    professional, you likely already know this but if you don’t, the best place to learn about a person is in
                                    their email signature. Doing this frees up so much space to talk about the person you are emailing, the problem
                                    they are facing, or just to <a href="https://leadiq.com/2016/09/why-you-should-use-humor-in-prospecting-emails/"> share a funny link to get a response.</a>
                                </p>

                                <p>
                                    Most introductions can be skipped entirely if you use the right links in your email signature. Including a personal
                                    or company website, your title, social media links and maybe a logo (tip — this makes the DISPLAY IMAGES to track
                                    opens seem less sketchy) helps paint the picture of who you are. This also can be a great place to plug an ongoing
                                    marketing campaign or big announcement from your company.
                                </p>

                                <h3 className="mt-5">Reason 2 — Your emails are selfish, and you sound like a machine</h3>

                                <p>In a previous life, I was a business development rep for Dyn, an Internet performance company, and used to send some pretty horrible emails:</p>

                                <div>
                                    <img src="/img/dyn.png" className="img-fluied" />
                                </div>

                                <p className="mt-5">
                                    This email breaks all the rules. Worst of all, it’s selfish. A good email should be about your prospect,
                                    their problems their interests and should entertain them. Anyone receiving that email would actually read
                                    it like this:
                               </p>

                                <div>
                                    <img src="/img/dyn1.png" className="img-fluied" />
                                </div>

                                <p className="mt-3">When you send an email, give them something they truly want. Ask questions that show you care. Do your research and find a way to differentiate yourself by being educated about them and their situation.</p>

                                <p>Kyle Welch, an experienced Sales Manager I used to work with would always preach one simple phrase to new reps as we trained them — “Do your presearch”.</p>

                                <p>Presearch is a made up word for the research you do BEFORE you email someone.</p>

                                <div className="text-center">
                                    <img src="/img/worry.gif" className="img-fluied" />
                                </div>

                                <p className="mt-3">
                                    Go find your prospect on Facebook and see what movies, tv shows, and music they like, perhaps you share a common
                                    interest there. Note — never mention you stalked them first…just make reference to something and it’ll come across
                                    as a coincidence. Check their Twitter account and see what they’ve been tweeting about. The information is out there
                                    and while it may slow down your email by a few minutes, your response rate will go up. Bonus: Your close rate will be
                                    higher if your prospect likes you.
                                </p>

                                <h3 className="mt-5">Reason 3 — Your emails are too long</h3>

                                <p>
                                    You’ve mastered the art of the subject line and can provide enough interest or curiosity to your
                                    prospect to open your email. They are immediately met with a wall of text that rivals those found in
                                    Westeros. You’ve come too far to let writing an email too long to be the problem. So write smarter and
                                    more direct. Cut out fluff and content that doesn’t need to be in your first email (or your second for that matter).
                                    You want to be able to craft your message that strikes home quickly and directly. Greet, relate, offer help to their problem, get out.
                               </p>

                                <p>You don’t need bulk to get your message or your point across. The Gettysburg Address was 271 words long. Your email offering a solution can be shorter than that.</p>

                                <h3 className="mt-5">Reason 4 — Your email doesn’t have a squeeze</h3>

                                <p>In the digital marketing world, “the squeeze” is an offer or something of value a prospect gets for interacting with you.It’s a metaphor for squeezing oranges. Basically if a prospect squeezes an orange, they better get juice out of it.</p>

                                <div className="text-center">
                                    <img src="/img/orange.gif" className="img-fluied" />
                                </div>

                                <p className="mt-5">A squeeze doesn’t have to be something free from within the product, though it can be. Here are a couple of clever squeezes I like to offer:</p>

                                <p>
                                    <ul>
                                        <li className="pb-2">
                                            Coffee or lunch (local only): If a person is looking to get out of the office for a few hours, offer to get coffee
                                            with them. Everyone is always looking for reasons to get out of the office for a little bit and clear their head.
                                            This only works with some companies, depending on their culture, so be careful.
                                </li>
                                        <li className="pb-2">
                                            Food Delivery: If someone is far away, order them pizza, pay with a credit card, and just call the office and make sure they are there that day.
                                </li>
                                        <li className="pb-2">
                                            Laser Tag: Sometimes it takes more than a demo or free stuff to win someone’s heart. It takes a fun experience.
                                            I’ve pitched playing laser tag, bowling, going to an arcade, and more to several prospects over the years, and
                                            they not only are caught off guard, but will actually say yes. People want to have fun, and everyone else is always
                                            offering free food. Do something different.
                                </li>
                                    </ul>
                                </p>

                                <p>As you can see, it doesn’t take much to improve your emails. In fact, they are all things that you likely knew already. Just remember to be human and selfless with your email. You will be surprised with the results.</p>
                            </div>
                        </div>
                        <section>
                            <div className="container">
                                <h3 className="justify-content-center d-flex font-weight-normal mb-5">Skate into your next meeting with 100 free leads</h3>
                                <div className="justify-content-center d-flex">
                                    <GetTryFree />
                                </div>
                            </div>
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
        );
    }
}

export default YourEmailsAreBadHeresFourReasonsWhy;