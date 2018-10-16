import React from 'react';
import Footer from './Footer';
import Helmet from 'react-helmet';

class LayoutFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeTitle: "sample leadIq pricing page"
        }
    }


    render() {
        if (window.location.href) {
            var getData = "";
            if (window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') === "blog" || window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') === "podcasts") {
                getData = window.location.pathname.split("/").slice(-1).join("/");
            }
            else if (window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') === "") {
                getData = "LeadIQ Prospect Smarter";
            }else {
                 getData = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
            }
        }
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content={getData}  />
                </Helmet>
                <div className="content">
                    
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default LayoutFooter;