import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class HowWeTurnedFourZeroPercentOfOurColdEmailIntoMeetings extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How We Turned 40% of Our Cold Emails into Meetings"
                    description="Anyone that checks out our content on cold email prospecting knows that prospecting can be fun. Today, I’m going to share a story about how I merged two of my favorite talents, prospecting and piano together, and how it converted 40% of our cold emails into meetings."
                    author="Ryan O’Hara"
                    date="May 18, 2017"
                    imageUrl="/img/play-music.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h3>Here’s a cool example:</h3>

                                <p>
                                    Last spring, I was working from home, and was kind of tired of writing cold emails. I wanted to do something fun and different. We were trying to get some sales calls with larger teams to figure out what we needed to add to the product next. 
                                    The problem was, I had to figure out how to do something that could scale. I decided it’d be a cool idea to try a little prospecting experiment. A few months before, I got an amazing Casio digital piano, and was in the middle of writing a ton 
                                    of music with some friends outside of work hours. Using the combination of my webcam, some song ideas I had, and banging out lyrics super quickly on Google Drive, I decided to send some songs to prospects. Sure I can’t sing, but I can do ok 
                                    enough to get through the song.
                                </p>

                                <h3>Here’s an example of what I sent:</h3>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/Dawg9rOIfRg" scrolling="no" />
                                </div>

                                <p className="mt-3">Since I needed a way for my prospects to see my videos, I decided it’d be best to write a really short and sweet cold email with the video to their song in the message:</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="" className="img-fluied" />
                                        <small className="justify-content-center row">A nice short an quick email with a link to a video of my song.</small>
                                    </div>
                                </div>

                                <p className="mt-3">My workflow was fairly simple. Here’s how to recreate it:</p>

                                <li>1. Find an account.</li>
                                <li>2. Read up about their company, and find the best contact off Linkedin Sales Navigator.</li>
                                <li>3. Capture their contact information and import it into Salesforce with LeadIQ.</li>
                                <li>4. Open up a new document in Google Drive and write lyrics about the prospect based on content from their company website, and their personal Linkedin profile (Note: It’s best to focus on the person more than the company if you can find info about them).</li>
                                <li>5. Record the video using Quicktime’s Movie Recorder and a web cam (If I were doing this today, I’d use ViewedIt instead of Quicktime).</li>
                                <li>6. Upload the video (If you use ViewedIt you won’t have to).</li>
                                <li>7. Write and send the email with a video link.</li>

                                <strong>TOTAL PROSPECTING TIME PER ACCOUNT: Estimated 20 minutes. </strong>
                                <h3 className="mt-5">So what were the results?</h3>

                                <p>Sure it takes a bit longer than writing a cold email or cold calling a company, but when it comes to starting a relationship, showing off a talent I had was a smash success.</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="" className="img-fluied" />
                                        <small className="justify-content-center row">I love playing piano, and I love prospecting, so why not put my two talents together?</small>
                                    </div>
                                </div>

                                <p>Over the week, whenever I had a few free minutes to make a prospecting video, I’d do this same technique. <strong>Another example:</strong></p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/ttzOseeWe5I" scrolling="no" />
                                </div>

                                <strong>And another response:</strong>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="" className="img-fluied" />
                                        <small className="justify-content-center row">One of the many responses I got from prospects. This one came about a month an half later which was a bit unusual, but still solid!</small>
                                    </div>
                                </div>

                                <p className="mt-3">
                                    At the time, I wasn’t using an email tool like SalesLoft or Outreach (which LeadIQ integrates with by the way), so I had no way of measuring the reply rate accurately, but just eyeballing my inbox, I definitely know not every reply was an opportunity. 
                                    However, the campaign ended up being 12 unique videos for 12 different companies. Here’s the crazy part.
                                </p>

                                <h3 className="mt-5">5 companies booked meetings with me. That’s a 41% opportunity rate! </h3>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="/img/looking-angry.gif" className="img-fluied" />
                                        <small className="justify-content-center row">Yup…this is how I felt after looking at the Salesforce report.</small>
                                    </div>
                                </div>

                                <h3 className="mt-3">Not bad for a short cold email.</h3>

                                <p>
                                    When you do prospecting, you’re not just competing with other sales people for your prospect’s time. You’re competing with the marketing machines out there. Try and beat the machines by being more thoughtful than they can. 
                                    Beat them by making your work personalized, creative, and entertaining. Want to try something  like this on some fresh leads. Hit the button below.
                               </p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowWeTurnedFourZeroPercentOfOurColdEmailIntoMeetings;