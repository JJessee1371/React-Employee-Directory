import React from 'react';
import TableBody from './TableBody';
import employees from '../employees.json';

class Table extends React.Component {
    constructor() {
        super();

        this.state = {
            employees
        };
    };

    render() {
        return (
            <table className="table table-striped">
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
                <tbody>
                    {this.state.employees.map(employee => {
                        return (
                            <TableBody
                                key={employee.id}
                                id={employee.id}
                                firstName={employee.firstName}
                                lastName={employee.lastName}
                                email={employee.email}
                                phone={employee.phone}
                                title={employee.title}
                                managerFirst={employee.managerFirst}
                                managerLast={employee.managerLast}
                            />
                        );
                    })};
                </tbody>
            </table>
            
        );
    };
};


export default Table;