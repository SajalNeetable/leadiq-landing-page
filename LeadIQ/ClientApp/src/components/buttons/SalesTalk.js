import React from 'react';
class SalesTalk extends React.Component {

    render() {
        return (
            <a href="https://leadiq.chilipiper.com/router/talk-to-sales_v2" className={"mt-2 btn liq-btn-primary  button-design liq-btn-primary-" + this.props.size}>TALK TO SALES</a>
        );
    }
}

export default SalesTalk;
