import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Employee Directory</h1>
                    <p className="lead">Organization at the tip of your fingers!</p>
                </div>
            </div>
        );
    };
};

export default Header;