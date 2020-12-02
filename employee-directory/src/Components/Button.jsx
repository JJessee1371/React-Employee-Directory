import React from 'react';
import jsonData from '../employees.json';

class Button extends React.Component {

    render() {
        return (
            <button type="button" className="btn btn-success">Sort by first</button>
        );
    };
};

export default Button;