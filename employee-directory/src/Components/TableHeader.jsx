import React from 'react';

class TableHeader extends React.Component {
    render() {
        return (
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone #</th>
                    <th scope="col">Title</th>
                    <th scope="col">Manager First Name</th>
                    <th scope="col">Manager Last Name</th>
                </tr>
            </thead>
        );
    };
};

export default TableHeader;