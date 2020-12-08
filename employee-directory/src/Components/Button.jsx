import React from 'react';
import '../CSS/Button.css';

//Buttons 1 - 4 handle sorting the table data
function Button1(props) {
    return (
        <button type="button" className="btn btn-success sortBtn" onClick={props.sortFirst}>First name</button>
    );
};

function Button2(props) {
    return (
        <button type="button" className="btn btn-success sortBtn" onClick={props.sortLast}>Last name</button>
    );
};

function Button3(props) {
    return (
        <button type="button" className="btn btn-success sortBtn" onClick={props.sortTitle}>Title</button>
    );
};

function Button4(props) {
    return (
        <button type="button" className="btn btn-success sortBtn" onClick={props.sortManagerLast}>Manager Last</button>
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