import React from 'react';
import TableBody from './TableBody';
import { Button1, Button2, Button3, Button4 } from './Button';
import employees from '../employees.json';

class Table extends React.Component {
    constructor() {
        super();

        this.state = {
            employees
        };
    };

    //Helper comparison functions for sorting employees array
    compareFirst = (a, b) => {
        let fa = a.firstName.toLowerCase();
        let fb = b.firstName.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    };

    compareLast = (a, b) => {
        let fa = a.lastName.toLowerCase();
        let fb = b.lastName.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    };

    compareTitle = (a, b) => {
        let fa = a.title.toLowerCase();
        let fb = b.title.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    };

    compareManagerLast = (a, b) => {
        let fa = a.managerLast.toLowerCase();
        let fb = b.managerLast.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    };

    //Sort employee data by a specified field
    sortFirst = () => {
        const sorted = this.state.employees.sort(this.compareFirst);
        this.setState({ employees: sorted });
    };

    sortLast = () => {
        const sorted = this.state.employees.sort(this.compareLast);
        this.setState({ employees: sorted });
    };

    sortTitle = () => {
        const sorted = this.state.employees.sort(this.compareTitle);
        this.setState({ employees: sorted });
    };

    sortManagerLast = () => {
        const sorted = this.state.employees.sort(this.compareManagerLast);
        this.setState({ employees: sorted });
    };

    render() {
        return (
            <div>
                <Button1
                    sort={this.sortFirst}
                />
                <Button2
                    sort={this.sortLast}
                />
                <Button3
                    sort={this.sortTitle}
                />
                <Button4
                    sort={this.sortManagerLast}
                />
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
            </div>
        );
    };
};


export default Table;