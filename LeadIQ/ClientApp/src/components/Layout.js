import React from 'react';
import Footer from './Footer';
import TopNav from './TopNav';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exactPath: ""
        }
    }

    componentDidMount() {
        var getLocationPath = window.location.pathname.split('/');
        var getExactPath = getLocationPath[getLocationPath.length - 1];
        if (getExactPath) {
            this.setState({
                exactPath: getExactPath
            })
        }
    }
   

    render() {
        console.log("props", window.location.pathname);
        return (
            <div>
                {
                    (this.state.exactPath === "university" || this.state.exactPath === "category"
                        || this.state.exactPath === "get-100-free-leads" || this.state.exactPath === "leadiq-university-one") ? null : <TopNav />
                }
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;