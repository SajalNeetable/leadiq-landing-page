import React from 'react';

class ThankYou extends React.Component {
    render() {
        return (
            <div className="container mt-5 pt-5 pb-5 mb-5 text-center">
                <h2 className="pt-5 mt-5 mb-5 pb-5">You’re all set! We’re looking forward to chatting with you soon.</h2>
                <img src="/img/MeiApproved.gif" alt="Thank you" className="img-fluied pt-4" />
            </div>
        );
    }
}

export default ThankYou;