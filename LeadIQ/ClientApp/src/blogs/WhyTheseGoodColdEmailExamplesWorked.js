import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class WhyTheseGoodColdEmailExamplesWorked extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Why These Good Cold Email Examples Worked."
                    description="Last week I asked some folks on LinkedIn to send me some cold emails that actually worked. I thought today we’d go through them, and deep dive into why they worked. So here are some actual cold emails sent by real sales reps that actually turned into meetings."
                    author="Ryan O’Hara"
                    date="Jun 11, 2018"
                    imageUrl="/img/apples.gif"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h3>Example #1: Personalized Video using a Personalized Trigger</h3>

                                <p>
                                    So the email below was sent by Gunjan Marwah, one of the Video Specialists at Vidyard. Vidyard is currently doing a cool campaign called
                                    <a href="https://storiesinfocus.hubs.vidyard.com/">Stories in Focus</a>with the help of sales thought leader,<a href="https://www.linkedin.com/in/salesnerdo/"> Chris Ortolano.</a>
                                </p>

                                <p>Using the trigger of Steve Richard from ExecVision being featured, Marwah was smart enough to focus on Steve’s Call Camps he does, and also references the video he did for the campaign. It obviously worked.</p>

                                <div className="text-center mt-3">
                                    <img src="/img/Screen-Shot1.png" alt="data" className="img-fluied" />
                                </div>

                                <div className="text-center mt-3">
                                    <a href="https://www.linkedin.com/in/gmphotography/">Gunjan Marwah</a> at<a href="https://www.vidyard.com/"> Vidyard</a>
                                </div>

                                <h3 className="mt-3">Here’s the video:</h3>

                                <div className="text-center mt-5">
                                    <iframe className="vidyard_iframe" title="video" src="//play.vidyard.com/eW3AqNo8cUuKXEuuJPKZzC.html?v=3.1.1" scrolling="no" /><br />
                                </div>

                                <div className="text-center mt-3">
                                    <p>Video link: <a href="https://share.vidyard.com/watch/eW3AqNo8cUuKXEuuJPKZzC">https://share.vidyard.com/watch/eW3AqNo8cUuKXEuuJPKZzC</a></p>
                                </div>

                                <p>Marwah brilliantly used triggers and didn’t ignore the information she had in front of her. So many emails get sent, and if she had just sent Steve Richard a video pitching Vidyard, the whole thing would have fallen apart.</p>

                                <p>Instead, she focused on him, and even framed the value prop around ExecVision’s potential use case. Remember, you aren’t always selling bells and whistles. Sometimes you are selling possibility.</p>

                                <h3 className="mt-5">Example # 2: Give before you take works.</h3>

                                <div className="text-center">
                                    <img src="/img/Screen-Shot2.png" alt="data" className="img-fluied" />
                                </div>

                                <div className="text-center mt-3">
                                    <a href="https://www.linkedin.com/in/taylorkpyle/">Taylor Pyle</a> at <a href="https://www.g2crowd.com/"> G2 Crowd</a>
                                </div>

                                <p className="mt-3">
                                    Pyle decided it’d be a good idea to dig into the data they had available at G2Crowd, and give it away to drive a conversation. Whenever you prospect, not only should you personalize,
                                    but you should always offer to be a resource by giving more than taking. Give before you ask for a meeting. Maybe you can give some intel you have, or share a prospect’s job post.
                                </p>

                                <p>
                                    I usually argue to only have one call to action (CTA) in a cold email, but the data is being given away to drive a conversation. Pyle didn’t pitch off about G2Crowd’s features.
                                    He didn’t ignore the intel he had, and as a result he got the meeting.
                                </p>

                                <h3 className="mt-5">Example # 3: Put your personal interests into your emails.</h3>

                                <p>
                                    In this email from Kelly Hayes, Hayes focused on her personal life to infuse her personality into the email. She tells the prospect that her fiancee wants her to buy something
                                    off this prospect’s site for Christmas. I used to do this all time with prospects. Find real life interactions with a target account, and lead my cold email with it.
                                </p>

                                <div className="text-center">
                                    <img src="/img/Screen-Shot7.png" alt="data" className="img-fluied" />
                                </div>


                                <div className="text-center mt-3">
                                    <a href="https://www.linkedin.com/in/kelly-hayes-bb9a0a7a/">Kelly Hayes</a> at <a href="https://www.oracle.com/index.html">Oracle</a>
                                </div>

                                <p className="mt-3">
                                    If you do this, it’s important not to fake it and make things up. I know it’s tempting to just say whatever and pull it out of your ass, but when you end up getting a positive
                                    response and getting on the horn with your prospect, they can tell you are lying. Be honest, and you’ll have more fun prospecting too. While this email may not be perfect
                                    mechanically, there is enough of a human story to it.
                                 </p>

                                <h3 className="mt-5">Example # 4: Don’t just comment on your prospect interacting with you. Turn it into a conversation.</h3>

                                <p>Nate Smoyer saw that a prospect liked a post of his on LinkedIn. Smoyer was careful to not only acknowledge it and jump right into a pitch. He decided to do a deeper dive by jumping into the prospect’s media kit process as well.</p>

                                <div className="text-center mt-3">
                                    <img src="/img/Screen-Shot3.png" alt="data" className="img-fluied" />
                                </div>

                                <div className="text-center mt-3"><a href="https://www.linkedin.com/in/natesmoyer/">Nate Smoyer</a> at <a href="http://natesmoyer.com/">NateSmoyer.com</a></div>

                                <p className="mt-3">
                                    To keep the conversation more friendly, he asked them if they had read a book he enjoys. It likely relates to the blog post. In fact, until the last sentence of the 2nd paragraph,
                                    you can barely tell this is a sales email. Always keep your intentions honest, but keep a conversation going. You don’t go up to a person you are interested in and ask them on a date right away do you?
                                    You converse, and create a dialogue.
                                </p>

                                <h3 className="mt-5">Example # 5: Use your prospect’s personal interests to make a sincere connection.</h3>

                                <p>
                                    <a href="https://www.linkedin.com/in/jacob-goodwin/">Jacob Goodwin</a>over at Refract noticed his prospect liked the Arsenal, so he wrote about Arsenal’s longtime football manager,
                                    Arsène Wenger. Rather than just pitching, he figured out a way to tie this prospect’s interest into his value proposition.
                                </p>

                                <h4 className="mt-3">Subject: The Thierry Henry of GoCardless</h4>

                                <div className="text-center mt-3">
                                    <img src="/img/Screen-Shot-Refract.png" alt="data" className="img-fluied" />
                                </div>

                                <p className="mt-5">Goodwin did jump into the pitch a little bit, but the creativity and personalization sparked a conversation about sports vs. the product, and got a response.</p>

                                <div className="text-center mt-3">
                                    <img src="/img/Screen-Shot4.png" alt="data" className="img-fluied" />
                                </div>

                                <h3 className="mt-5">Example # 6: Talk about your prospect and their history first. Company second.</h3>

                                <p>
                                    In this last cold email we are showing today, Jeremy Leveille was introduced to the correct contact to prospect. When he researched this new contact, he noticed the prospect went
                                    to college to become a Spanish teacher at one point of their life. Jeremy decided to use that to his advantage, and attempted to impress the prospect by writing his email in Spanish:
                                </p>

                                <div className="text-center">
                                    <img src="/img/Screen-Shot5.png" alt="data" className="img-fluied" />
                                </div>

                                <p className="mt-5">And the response:</p>

                                <div className="text-center">
                                    <img src="/img/Screen-Shot6.png" alt="data" className="img-fluied" />
                                </div>

                                <p className="mt-5">Personalization is so important.</p>
                            </div>
                        </div>

                        <section className="text-center">
                            <p>Try 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default WhyTheseGoodColdEmailExamplesWorked;