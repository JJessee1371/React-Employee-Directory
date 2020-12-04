import React from 'react';

function TableBody(props) {
    return (
        <tr> 
            <td key={props.id}>{props.id}</td>
            <td key={props.id}>{props.firstName}</td>
            <td key={props.id}>{props.lastName}</td>
            <td key={props.id}>{props.email}</td>
            <td key={props.id}>{props.phone}</td>
            <td key={props.id}>{props.title}</td>
            <td key={props.id}>{props.managerFirst}</td>
            <td key={props.id}>{props.managerLast}</td>
        </tr>
    );
};

export default TableBody;