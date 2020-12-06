import React from 'react';

//Buttons 1 - 4 handle sorting the table data
function Button1(props) {
    return (
        <button type="button" className="btn btn-success" onClick={props.sort}>First name</button>
    );
};

function Button2(props) {
    return (
        <button type="button" className="btn btn-success" onClick={props.sort}>Last name</button>
    );
};

function Button3(props) {
    return (
        <button type="button" className="btn btn-success" onClick={props.sort}>Title</button>
    );
};

function Button4(props) {
    return (
        <button type="button" className="btn btn-success" onClick={props.sort}>Manager Last</button>
    );
};

//Buttons 5 - 7 handle filtering the table
function Button5(props) {
    return (
        <button type="button" className="btn btn-info" onClick={ props.filterTitle }>Filter!</button>
    );
};

function Button6(props) {
    return (
        <button type="button" className="btn btn-info" onClick={ props.filterLast }>Filter!</button>
    );
};

function Button7(props) {
    return (
        <button type="button" className="btn btn-info" onClick={ props.filterManagerLast }>Filter!</button>
    );
};

export { Button1, Button2, Button3, Button4, Button5, Button6, Button7 };