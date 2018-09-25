import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class HowToSetGmailAsYourDefaultInbox extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How to set Gmail as Your Default Inbox"
                    description="Today we’re going to show you how to make your Gmail your default email address on Google Chrome. Doing this will allow you to compose an email address you find right in the LeadIQ extension."
                    author="Jack The Intern"
                    date="Jun 12, 2018"
                    imageUrl="/img/Van-Gogh-Starry-Night-Google-Art.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="text-center">
                                    <img src="/img/could-join-today.gif" className="img-fluied" />
                                </div>
                                <h3 className="mt-5">Step #1: Open Gmail and check to see if you have the “Protocol Handler” icon identified below:</h3>

                                <div className="text-center">
                                    <img src="/img/gmail-inbox.png" className="img-fluied" />
                                </div>

                                <strong>If you do:</strong>

                                <p>Click on it, and it will show the option to  “Allow Gmail to open all email links?” Select that, and you’re all set!</p>

                                <strong>If you don’t for some reason, follow the rest of these steps. </strong>

                                <h3 className="mt-3">Step #2: Click on the menu icon in the top right of the window- see below</h3>

                                <div className="text-center">
                                    <img src="/img/gmail-customized-window.png" className="img-fluied" />
                                </div>

                                <h3 className="mt-3">Step #3: Select <strong>“Settings”</strong></h3>

                                <div className="text-center">
                                    <img src="/img/gmail-settings.png" className="img-fluied" />
                                </div>
                               
                                <h3 className="mt-3">Step #4: Scroll down and select <strong>“Show Advanced Settings”</strong></h3>

                                <div className="text-center">
                                    <img src="/img/gmail-advanced-settings.png" className="img-fluied" />
                                </div>

                                <div className="text-center">
                                    <img src="/img/gmail-advanced-settings1.png" className="img-fluied" />
                                </div>

                                <h3 className="mt-3">Step #5: Under the <strong>“Privacy”</strong> drop-down, you’ll see <strong>Content Settings</strong>– click it</h3>

                                <div className="text-center">
                                    <img src="/img/gmail-privacy-settings.png" className="img-fluied" />
                                </div>

                                <h3 className="mt-3">Step #6: A window will pop-up and you will have to scroll down to the <strong>“Handlers”</strong> setting- click it</h3>

                                <div className="text-center">
                                    <img src="/img/gmail-handler-settings.png" className="img-fluied" />
                                </div>

                                <h3 className="mt-3">Step #7: Finally, select <strong>“Gmail”</strong> or <strong>“mail.google.com”</strong> from the provided menu. Click done!</h3>

                                <div className="text-center">
                                    <img src="/img/gmail-account.png" className="img-fluied" />
                                </div>
                                <h3 className="mt-3"><a href="https://leadiq.com/2018/06/how-to-set-outlook-as-your-default-inbox">And if you’re using <strong>Outlook</strong>, don’t be afraid to check out this quick guide.</a></h3>

                                <div className="text-center mt-3">
                                    <img src="/img/painting-you-can-do.gif" className="img-fluied" />
                                </div>

                                <h3 className="mt-5">Hopefully we’ve been able to help you accomplish all your hopes and dreams (so long as your hopes and dreams have been to set your default email service to Gmail or Outlook)</h3>

                                <div className="text-center">
                                    <img src="/img/painting-see-you-next-week.gif" className="img-fluied" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Want to Get some emails to test out with your newly defaulted Gmail? Here's 100 on us:</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jack The Intern"
                            imageUrl=""
                            profile="Working towards a career in the Marketing field where I hope to one day assist businesses and individuals with bettering how they do business. Refining the way that salespeople prospect and giving them the tools to better their reply rate is my current goal. Looking forward to seeing what LeadIQ can do as a company going forward!" />

                    </div>
                </div>
            </div>

        );
    }
}

export default HowToSetGmailAsYourDefaultInbox;