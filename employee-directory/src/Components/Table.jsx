import React from 'react';
import jsonData from '../employees.json';

class Table extends React.Component {
    constructor() {
        super();

        this.state = {
            employees: []
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
                        <th scope="col">Title</th>
                        <th scope="col">Manager First Name</th>
                        <th scope="col">Manager Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.map(employee => {
                        return (
                            <tr> 
                                <td key={employee.id}>{employee.id}</td>
                                <td key={employee.id}>{employee.firstName}</td>
                                <td key={employee.id}>{employee.lastName}</td>
                                <td key={employee.id}>{employee.title}</td>
                                <td key={employee.id}>{employee.managerFirst}</td>
                                <td key={employee.id}>{employee.managerLast}</td>
                            </tr>
                        );
                    })};
                </tbody>  
            </table>
        );
    };
};

export default Table;