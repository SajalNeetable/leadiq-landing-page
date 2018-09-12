import React from 'react';

class CheckboxItem extends React.Component {

    render() {
        return (
            <li className="media mt-2">
                <img className="check-icon" src="/img/checkbox.png" alt="Check" height="16" />
                <div className="media-body">{this.props.text}</div>
            </li>
        );
    }
}

export default CheckboxItem;