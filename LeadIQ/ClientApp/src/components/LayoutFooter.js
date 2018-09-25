import React from 'react';
import Footer from './Footer';

class LayoutFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default LayoutFooter;