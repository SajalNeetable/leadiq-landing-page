import React from 'react';
import BlogAuthor from '../components/BlogAuthor';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';

class HowToExportAnyLinkedInContact extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How To Export Any LinkedIn Contact"
                    description="LinkedIn is an amazing platform to live off of, but sometimes you need to do things with your LinkedIn connections off the platform. This could be anything from writing them emails, putting them into your advertising networks for retargetting, or building up a newsletter."
                    author="Jack O’Hara"
                    date="Jan 29, 2018"
                    imageUrl="/img/Billy-Mays.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h4>Here’s a quick guide on how to export any LinkedIn contact, whether it’s a connection or not.</h4>

                                <h4 className="mt-3">Let’s start with your existing LinkedIn Connections.</h4>

                                <h3 className="mt-5">Step 1: Click on “My Network” Tab or Connections</h3>

                                <p>LinkedIn defaults its home page to your feed, so from here you have 2 options to get to Export Contacts.</p>

                                <div className="text-center mt-3">
                                    <img src="/img/1stLinkedin.png" className="img-fluied"/>
                                </div>

                                <h3 className="mt-5">Step 2: Click On “See All Connections”</h3>

                                <p>The first stop on the journey is the My Network screen. The most direct way to the next stop is to click on See All Connections…</p>

                                <div className="text-center mt-3">
                                    <img src="/img/2ndLinkedin.png" className="img-fluied"/>
                                </div>

                                <h3 className="mt-5">Step 3: Click on “Manage Synced and Imported Contacts”</h3>

                                <p>On the right of the page, you will see a line of text highlighted in gray. That is the next turn on your journey…</p>

                                <div className="text-center mt-3">
                                    <img src="/img/3rdLinkedin.png" className="img-fluied"/>
                                </div>

                                <h3 className="mt-5">Step 4: Click on “Export Contacts”</h3>

                                <p>You’ve finally made it! You’re almost to the promised land, just click on Export Contacts in the bottom right of the page…</p>

                                <div className="text-center mt-3">
                                    <img src="/img/4thLinkedin.png" className="img-fluied"/>
                                </div>

                                <h3 className="mt-5">Step 5: Select Desired Files and Click “Request Archive”</h3>

                                <p>
                                    Due to the fact that I already filled this out, this screen will look a little different for you. You will have the option to select what information
                                    you want exported from your connections. The best bet it to select “The Works,” not just because bagels with the same name are equally good, but also
                                    because it gives you the most information and you can not select what information you can download later. When you click on what categories you want,
                                    just click “Request Archive.”
                                </p>

                                <div className="text-center mt-3">
                                    <img src="/img/5thLinkedin.png" className="img-fluied"/>
                                </div>

                                <h3 className="mt-5">Step 6: Open Email and Use Download Link</h3>

                                <p>The next step is to go to your email to open the download link. It will bring you back to a similar screen to the last one.</p>

                                <div className="text-center mt-3">
                                    <img src="/img/6thLinkedin.png" className="img-fluied"/>
                                </div>

                                <h3 className="mt-5">Step 7: Click Download</h3>

                                <p>You did it! All the leg work is done, and all that is left to download the appropriate .csv for your connections, or should I say new leads…</p>

                                <div className="text-center mt-3">
                                    <img src="/img/yeetLinkedin.png" className="img-fluied"/>
                                </div>

                                <h3 className="mt-5">The Final Product:</h3>

                                <p>And here you are, the final screen, do as you must with the new info.</p>

                                <div className="text-center mt-3">
                                    <img src="/img/finalproduct.png" className="img-fluied"/>
                                </div>

                              <div className="text-center mt-3">
                                    <img src="/img/Billy-Mays.jpg" className="img-fluied"/>
                                </div>

                                <h4 className="mt-3">What if you aren’t connected to a contact, but want to easily get their contact information exported into a CSV?</h4>

                                <h4>This video is a quick guide showing how you can do this easily with LeadIQ in 2 easy steps.</h4>
                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jack The Intern"
                            profile="When he's not fetching coffee for the LeadIQ team in Exeter, NH office, Jack is studying at Southern New Hampshire University for his Bachelor's in Marketing." />
                    </div>
                </div>
            </div>
        );
    }
}

export default HowToExportAnyLinkedInContact;