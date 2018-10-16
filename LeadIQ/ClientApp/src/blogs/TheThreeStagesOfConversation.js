import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class TheThreeStagesOfConversation extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="The 3 Stages of Conversation"
                    description="Back in my senior year of high school, at Pinkerton Academy, I learned something that changed the way I communicate with people forever."
                    author="Ryan O’Hara"
                    date="Mar 14, 2018"
                    imageUrl="/img/dns-fail.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/PinkertonAcademy.png" alt="PinkertonAcademy" className="img-fluied" />
                                        <small>Ah….my old stomping grounds, Pinkerton Academy</small>
                                    </div>
                                </div>

                                <p className="mt-3">There are obviously many lessons and philosophies we learn about everyday that you can take with a grain of salt, but this one lesson will increase your self-awareness, and in doing so, make it easier for you to build closer relationships with prospects.</p>

                                <em>Mr. Roderick, if you are out there reading this, thank you!</em>

                                <p>For everyone else, today, I’m going to share with you the 3 Stages of Conversation. Knowing them can get you more opportunities, closer relationships, and most importantly, more friends helping you pitch.</p>

                                <h3 className="mt-5">Stage 1 — Small Talk</h3>
                                <p >With prospecting, dating, sales, whatever you want to do in life that deals with communication, everyone needs to start somewhere.</p>

                                <h4>While it’s less intimidate,<strong> small talk</strong> is easier for some folks who haven’t developed the skill set to communicate with strangers, or can’t find info to get past small talk.</h4>
                                <p>This happens a lot with people. How many times have you gone out somewhere with friends, and you get stuck sitting with someone you barely know?</p>
                                <p>You talk about mundane things like the weather, traffic, current events, food, or the classic “so what do you do?”</p>
                                <p>Don’t worry this isn’t bad. It’s better than silence, and you often have to start somewhere when you first email a prospect.</p>
                                <p>The natural goal as you build relationships with strangers is to work your way toward <strong>Stage 2</strong>, and eventually <strong>Stage 3</strong>. Stage 1 is a great place to feel around for topics to talk about for <strong>Stage 2</strong> and <strong>Stage 3</strong> conversation.</p>
                                <p><strong>Stage 1</strong> topics are all generally small relatable conversation starters that can be plucked out of seemingly nowhere without needing to really know the other person just yet, which is good because you don’t always have intel</p>

                                <div className="row">
                                    <div className="col-md-2" />
                                    <div className="card blog-card col-md-8">
                                        <div className="card-body">
                                            <img src="/img/weather.png" className="img-fluied" alt="weather" />
                                            <small className="justify-content-center row">The weather is always a safe but boring topic to bring up. Go for it if you have nothing else.</small>
                                        </div>
                                    </div>
                                    <div className="col-md-2" />
                                </div>

                                <p className="mt-3">Talking to someone from the midwest? Talk about the weather. Good luck trying to find one that doesn’t have a story involving tornados and/or ten feet of snow. Emailing someone in Seattle? Take a chance talking about the Seattle Seahawks, or their favorite coffee place in town.</p>
                                <p>These tedious mundane topics aren’t the best to talk about, but if you have no info, you need to start there. Ultimately the goal here is to be able to immediately connect with them on generally friendly terms, and ask enough questions to keep the conversation going into <strong>Stage 2</strong>.</p>

                                <h3 className="mt-5">Stage 2 — Common Interests</h3>
                                <p>Some of the best sales professionals in the world can jump right into <strong>Stage 2</strong>. These are things you have in common with someone else.</p>
                                <p><strong>Stage 2</strong> conversation can be about music, movies, tv shows, books, mutual friends, hobbies, podcasts, technology, industries, etc.</p>
                                <p>A good example that I always think about is Bobby Condon, an early Account Rep at Dyn cold calling someone on his first day, and just talking about cooking. He didn’t bring up the product at all, and closed the deal later that day over email.</p>
                                <p>Bobby is a pro at getting to <strong>Stage 2</strong> right away.</p>
                                <p>If you want to jump into <strong>Stage 2</strong>, there is a risk because you can’t necessarily always find what a person likes. The reward however is a much more transparent and fun selling process with someone.</p>
                                <p>The best way to find out more about someone is looking for them on Twitter, Facebook, Instagram, or their blog. Maybe some of things you have in common with them involve the industry they are in. Do they work at a company that makes a product your team uses? Do they share a customer with you?</p>

                                <div className="row">
                                    <div className="col-md-2" />
                                    <div className="card blog-card col-md-8">
                                        <div className="card-body">
                                            <img src="/img/Mountain.png" className="img-fluied" alt="Mountain" />
                                            <small className="justify-content-center row">Don’t spoil things in pop culture in your references or you risk the Mountain coming into your inbox and destroying you.</small>
                                        </div>
                                    </div>
                                    <div className="col-md-2" />
                                </div>

                                <p className="mt-3">If you have no intel on what that person likes, you can just ask them during <strong>Stage 1</strong>. Make a reference to something in pop culture, and add a “P.S” in your email asking if they understood the reference. Just don’t include spoilers (I’m thinking of you Game of Thrones fans).</p>
                                <p>There are a few topics to always stay away from in business. Politics, religion, and other private things that you wouldn’t bring up with coworkers don’t belong in <strong>Stage 2</strong>.</p>

                                <p>Remember, you can connect with anyone, you just have to find common ground somewhere.  If you look at your phone right now and think about who you hang out with often, very rarely will friendships get past <strong>Stage 2</strong>.</p>


                                <h3 className="mt-5">Stage 3 - Internal Feelings</h3>
                                <p><strong>Stage 1</strong> conversation deals with small talk, and easy low hanging fruit you could talk about with everyone. This is the easiest stage to hit.</p>
                                <p><strong>Stage 2</strong> focuses on bonding with someone over common interest, shared viewpoints, and conversations. This takes a little work to get rolling.</p>
                                <p>Once you’ve hit these first two stages, if you feel a connection with your prospect, you’re likely ready to tackle <strong>Stage 3</strong>.</p>

                                <h3 className="mt-5">Stage 3 conversation focuses on feelings.</h3>
                                <p>Think of these at the late night talks you used to have with your friends growing up. The deep talks about what you want out of life, what makes you tick, and how you feel about things going on in your life.</p>
                                <p>It’s really hard to get complete strangers to open up about feelings, but understanding someone’s feelings can make selling like an open book test for you and your prospect.</p>
                                <p>If you have customers who are referring lots of business to you, their is usually a pretty good chance they have a <strong>Stage 3</strong> connection with you.</p>
                                <p>Unless you are really good, it can be tough to get to <strong>Stage 3</strong> all the time, and most of your customers and prospects will probably never get there with you. You can’t ask about feelings unless you share your feelings.</p>
                                <strong>I know, I know…this sounds like hippy dippy bullshit, but it really isn’t.</strong>
                                <p>Ask your prospect questions and share your answers. You’ll feel more comfortable pitching them, and if you both care about each other, you’ll have a customer for life, regardless of what company they work for.</p>
                                <strong> One example I always think of is<a href="https://www.linkedin.com/in/zorkian"> Mark Smith</a>, who now works over at Discord.</strong>
                                <p>Mark is someone I haven’t talked to in years, but I’ll always remember a long phone call we had back in 2010.</p>
                                <p>Mark at the time was working at the red hot startup, <a href="http://stumbleupon.com/">Stumbleupon</a>, one of my favorite prospects I was prospecting</p>
                                <p>Mark knew I was prospecting at Dyn, and our first phone call together was mainly focused on our current situations. I initially reached out to Mark because his side </p>
                                <p>project, <a href="https://www.dreamwidth.org/">Dreamwidth Studios</a>, a was getting a high amount of traffic for our free product, and team internally wanted him to move up to an enterprise package.</p>
                                <p>I knew scoring Stumbleupon as a customer was way more important for Dyn at the time than moving up an eComm customer for a few extras bucks a month.</p>
                                <p>Mark and I spent the phone call swapping our stories. He talked about how he built Dreamwidth into a wonderful community for artist, and how he was working on Stumbleupon and planning to start a family.</p>
                                <p>I told Mark about how I ended up working at Dyn, how we were trying to create a cool startup hub in Manchester, NH.</p>
                                <p>I opened up with about my feelings, and how I felt trapped working in New Hampshire because the startup community was still developing, but that I also wanted to stay because I loved living in the state.</p>
                                <strong>I was vulnerable, and Mark being the super good guy he was, listened.</strong>
                                <p>Mark shared his goals with me, what he wanted out of life, what his plans were with Dreamwidth, his careers, and it was just the greatest phone call.</p>
                                <p>We started with <strong>Stage 2</strong> and worked out way to <strong>Stage 3</strong>. Mark eventually became a customer with Stumbleupon, and he event sent me a few tshirts that I still wear to this day.</p>

                                <div className="row">
                                    <div className="col-md-4" />
                                    <div className="card blog-card col-md-4">
                                        <div className="card-body">
                                            <img src="/img/shirt Mark.png" className="img-fluied" alt="shirt-Mark" />
                                            <small className="justify-content-center row">This is one of the shirts Mark sent me. No I’m not the model in it, but maybe someday.</small>
                                        </div>
                                    </div>
                                    <div className="col-md-4" />
                                </div>

                                <p className="mt-3">Before long, Mark was bringing Dyn with him at his next company, <a href="http://bump.com/">Bump</a>. Then he brought us with him at Dropbox.</p>
                                <p>These are the types of conversations that I love to have with people, as I love to learn what makes them tick.</p>
                                <p>Hearing about their problems, sharing mine, and discuss what goals they have (professionally or personally) gets me excited because it’s conversations like these that can put you in a position to make a huge difference.</p>
                                <p>Getting to this point in a relationship on a personal level can happen easily enough with people and friends because you may see them regularly.</p>
                                <p>Getting there with strangers on a professional level however will take time and requires a firm foundation of trust and understanding of each other.</p>
                                <p>The best way to get people to be connect on a <strong>Stage 3</strong> level is to be transparent and helpful, and give, don’t just take.</p>
                                <p>Conversations are not hard, but they do require effort. Just like when you are dating or becoming friends with someone, you want to grow your relationship when prospecting gradually and naturally.</p>
                                <p>Ultimately you will find yourself starting at different stages with different people, but having an understanding of all three stages will help you through the sales process, as well as help you with building a solid relationship with them.</p>
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

export default TheThreeStagesOfConversation;