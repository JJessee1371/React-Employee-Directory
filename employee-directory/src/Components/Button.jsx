import React from 'react';


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


export { Button1, Button2, Button3, Button4 };