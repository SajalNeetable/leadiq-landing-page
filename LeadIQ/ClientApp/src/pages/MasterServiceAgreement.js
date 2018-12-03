import React from 'react';
import GetStarted from '../components/buttons/GetStarted';

class MasterServiceAgreement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPolicy: false,
            width: 0
        };
    }

    componentDidMount() {
        if (window.outerWidth < 1024) {
            this.setState({
                width: window.outerWidth,
                displayPolicy: true
            })
        } else {
            this.setState({
                width: window.outerWidth
            })
        }
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="service-cover">
                        <div className="container prospectHeaderTitle">
                            <section className="pt-5 gettingStarted">
                                <h1 className="text-white text-center  mb-4 fa-2x prospectText"><b>Master Service Agreement</b></h1>
                                <h4 className="text-white text-center chromeText mb-4">This Master Subscription Agreement governs customer's use of LeadIQ services. If Customer registers for a free trial of LeadIQ services or free services, the applicable provisions of this agreement will also govern that free trial or those free services.</h4>
                                <div className="justify-content-center d-flex">
                                    <GetStarted size="lg" />
                                </div>
                            </section>
                        </div>

                    </div>
                    <div className="faq-waveDesign">
                        <img src="/img/wave-four.png" className="img-fluied faq-waveDesignProspect" alt="wave" />
                    </div>
                </div>

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MasterServiceAgreement;

//<h4><mark className="liq-text-primary">23. Contacting Us</mark></h4>