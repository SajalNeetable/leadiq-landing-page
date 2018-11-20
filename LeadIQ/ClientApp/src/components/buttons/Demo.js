import React from 'react';
class Demo extends React.Component {
    render() {
        return (
            <div>
                <a href="https://leadiq.chilipiper.com/router/talk-to-sales" className={"mt-2 btn liq-btn-secondary button-design liq-btn-primary-" + this.props.size}>GET A DEMO</a>
            </div>
        );
    }
}

export default Demo;