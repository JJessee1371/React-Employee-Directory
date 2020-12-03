import React from 'react';

function Table(props) {
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
                <tr> 
                    <td key={props.id}>{props.id}</td>
                    <td key={props.id}>{props.firstName}</td>
                    <td key={props.id}>{props.lastName}</td>
                    <td key={props.id}>{props.title}</td>
                    <td key={props.id}>{props.managerFirst}</td>
                    <td key={props.id}>{props.managerLast}</td>
                </tr>
            </tbody>  
        </table>
    );
};


export default Table;