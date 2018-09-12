import React from 'react';

class GetSalesTalk extends React.Component {

    render() {
        return (
            <a href="https://account.leadiq.com/app/get-started/" target="_blank" className={"mt-2 btn liq-btn-primary liq-btn-primary-" + this.props.size}>TALK TO SALES</a>
        );
    }
}

export default GetSalesTalk;