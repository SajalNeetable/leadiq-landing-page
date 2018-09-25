import React from 'react';

class Demo extends React.Component {

    render() {
        return (
            <a href="https://calendly.com/leadiq/trial-kickoff/" target="_blank" className={"mt-2 btn liq-btn-secondary liq-btn-secondary-" + this.props.size}>GET A DEMO</a>
        );
    }
}

export default Demo;