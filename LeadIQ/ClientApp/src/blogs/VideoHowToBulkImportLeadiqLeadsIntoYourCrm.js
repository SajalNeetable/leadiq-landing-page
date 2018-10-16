import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class VideoHowToBulkImportLeadiqLeadsIntoYourCrm extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Video: How To Bulk Import LeadIQ Leads into Your CRM"
                    author="Ryan O’Hara"
                    date="Jul 22, 2016"
                    imageUrl="/img/crm-help-bulk-import.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe title="video" src="https://www.youtube.com/embed/5C0224zOZFA" scrolling="no" />
                                </div>

                                <p className="mt-3">This is a quick tutorial from a very sad Ryan O’Hara on how to import LeadIQ leads into Close.io, Hubspot CRM, SugarCRM, or any of the other CRMs you’re using.</p>

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

export default VideoHowToBulkImportLeadiqLeadsIntoYourCrm;