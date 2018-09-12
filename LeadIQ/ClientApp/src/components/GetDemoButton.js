import React from 'react';

class GetDemoButton extends React.Component {

    render() {
        return (
            <a href="https://account.leadiq.com/app/get-started/" target="_blank" className={"mt-2 btn liq-btn-secondary liq-btn-secondary-" + this.props.size}>GET A DEMO</a>
        );
    }
}

export default GetDemoButton;