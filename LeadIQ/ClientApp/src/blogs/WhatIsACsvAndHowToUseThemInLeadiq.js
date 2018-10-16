import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class WhatIsACsvAndHowToUseThemInLeadiq extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="What is a CSV and How to Use Them in LeadIQ"
                    description="Have you ever noticed that spreadsheets and lists have a .CSV at the end of their filename? Are you one of those people who say, “I have no idea what a CSV is? Is that a pharmacy?” Don’t worry. We’ve all been there. Prior to writing this blog, I thought Microsoft invented the CSV. Luckily, I was shamed into submission by management to understand that the history of the CSV goes way deeper than that."
                    author="Jack The Intern"
                    date="Jul 2, 2018"
                    imageUrl="/img/CERN.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>Today, we’re going to talk about CSVs, and how LeadIQ uses them to make your life easier.</p>

                                <h3 className="mt-5">What are CSVs?</h3>

                                <p>Comma Separated Values, also known as CSVs, are a file format that allows software to process text information into in rows and columns. The way that machines understand CSVs is actually just  a small text document that looks sort of like this:</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="/img/text-edit.png" alt="text-edit" className="img-fluied" />
                                        <small className="justify-content-center row">If you download a CSV and try and open it in a Notepad or TextEdit, it’ll  look like this.</small>
                                    </div>
                                </div>

                                <p className="mt-3">While looking at this information, software we use every day, whether it’s Google Sheets, Open Office, Apple Numbers, or most popularly, Microsoft Excel, will process this data into spreadsheets  via detecting where commas are. This makes the output, a pretty spreadsheet easier to read for us human folk.</p>

                                <div className="card-body mt-3 text-center">
                                    <img src="/img/author-table.png" alt="author-table"  className="img-fluied" />
                                </div>

                                <p className="mt-3">
                                    While you probably grew up working in Microsoft Excel, CSVs are kind of like the store brand version of a spreadsheet. You can’t add colors, filters, or formatting like you can with a .
                                    xls file from Microsoft Excel, however you can do basic column and row tables, and you can also save values from  equations you may put in the spreadsheet.
                                </p>

                                <p>Predating Microsoft Excel, CSVs were first used in 1972 by IBM in one of the oldest coding languages, Fortran. CSVs are easier for programs to read due to their lack of data outside of letters and numbers.</p>

                                <div className="row">
                                    <div className="col-md-4" />
                                    <div className="card blog-card mt-3 col-md-4">
                                        <div className="card-body">
                                            <img src="/img/pokemon-battle-spreadsheet-art.jpg" alt="pokemon-battle-spreadsheet-art" className="img-fluied" />
                                            <small className="justify-content-center row">“It’s unsafe! Wild SPREADSHEETS live in tall grass!”</small>
                                        </div>
                                    </div>
                                    <div className="col-md-4" />
                                </div>

                                <p className="mt-3">
                                    Today, CSVs are often used on web applications to present data for non-technical folks who work in sales and marketing. For example, with LeadIQ, we’ll make a landing page for a webinar using Instapage,
                                    and export all the sign ups to send out the webinar link. The export file format… you guessed it…a CSV!!
                                </p>

                                <p>This is just one example. If are using a CRM like Salesforce, Hubspot, Close.io, Pipedrive, Microsoft Dynamics, etc., you can import contacts into these systems via a CSV.</p>

                                <p>There are thousands out there that use CSVs. Even your address book and contacts on <a href="https://leadiq.com/2018/01/how-to-export-any-linkedin-contact/">LinkedIn can be exported as a CSV.</a></p>

                                <h3 className="mt-5">So how does LeadIQ use CSVs?</h3>

                                <p>Good question reader. There are actually a number of different ways that CSVs can be useful for your LeadIQ account.</p>

                                <p>if you are looking to find a lists of contacts in bulk, we use CSVs to learn what contacts you want to find. To do this follow these three steps:</p>

                                <p>Step 1: Make a spreadsheet with the follow format options:</p>

                                <p>Scenario A: If you have your prospects’ names and companies:</p>

                                <div>
                                    <img src="/img/prospect-names-a.png" alt="prospect-names-a" className="img-fluied" />
                                </div>

                                <p className="mt-3">Scenario B: You have a company and title you want find:</p>

                                <div>
                                    <img src="/img/prospect-names-b.png" alt="prospect-names-b" className="img-fluied" />
                                </div>

                                <p className="mt-3">*Note: if you want to use company domain insteads, simply put that in the company column instead. If you want to find more than one title at a company, just make a seperate row.</p>

                                <p>Step 2: Save your spreadsheet as a CSV.</p>

                                <div>
                                    <img src="/img/excel-record.gif" alt="gif" className="img-fluied" />
                                </div>

                                <p className="mt-3">Step 3: Upload it into a Campaign in LeadIQ.</p>

                                <p>Depending on your list size, it should take a couple minutes for us to enrich your lead data in bulk.</p>

                                <p>And voila! You are done! You did it!</p>

                                <h3 className="mt-5">What if I want to export my campaigns into lists?</h3>

                                <p>This is the other way we work with CSVs. You can export any campaign into a CSV. To do this, just hit the “EXPORT” button inside the web app.</p>

                                <div className="text-center mt-3">
                                    <img src="/img/campaign-export.gif" alt="gif" className="img-fluied" />
                                </div>

                                <p className="mt-5">And your set. You now know what a CSV, and how to use CSVs with LeadIQ. Party on!</p>
                            </div>
                        </div>

                        <section className="text-center">
                            <p>Check out how you can directly import your leads to your CRM or export from LeadIQ with 100 free leads...</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jack the Intern"
                            imageUrl="/img/real-headshot.jpeg"
                            profile="Working towards a career in the Marketing field where I hope to one day assist businesses and individuals with bettering how they do business. Refining the way that salespeople prospect and giving them the tools to better their reply rate is my current goal. Looking forward to seeing what LeadIQ can do as a company going forward!" />
                    </div>
                </div>
            </div>
        );
    }
}

export default WhatIsACsvAndHowToUseThemInLeadiq;