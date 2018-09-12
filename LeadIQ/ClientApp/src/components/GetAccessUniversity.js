import React from 'react';

class GetAccessUniversity extends React.Component {

    render() {
        return (
            <a href="https://account.leadiq.com/app/get-started/" target="_blank" className={"mt-2 btn liq-btn-primary liq-btn-primary-" + this.props.size}>ACCESS THE UNIVERSITY</a>
        );
    }
}

export default GetAccessUniversity;