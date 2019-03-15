import React from 'react';
import Helmet from 'react-helmet';

class Page404 extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>LeadIQ | 404 Page</title>
                    <meta name="description" content="404 Page" />
                    <meta name="keywords" content="404 Page" />
                    <meta name="author" content="LeadIQ" />
                </Helmet>
                <section className="page404container">
                    <div className="404cover">
                        <img src="/img/home-bg-cover.png" className="img-responisve" alt="LeadIQ" />
                    </div>
                    <div className="container page4con">
                        <div className="row">
                            <div className="col-lg-8 col-xs-12">
                                <div className="page404content">
                                    <h1>UH OH!</h1>
                                    <span>Couldn't find that<br />
                                        Try something else?
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default Page404;