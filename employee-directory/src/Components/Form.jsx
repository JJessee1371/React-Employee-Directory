import React from 'react';

function Form (props) {
    return (
        <form >
            <input
                placeholder="Title"
                type="text"
                name="title"
                value={props.title}
                onChange={props.changeTitle}
            ></input>
        </form>
    );
};

function Form2 (props) {
    return (
        <form >
            <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={props.lastName}
                onChange={props.changeLast}
            ></input>
        </form>
    );
};

function Form3 (props) {
    return (
        <form >
            <input
                placeholder="Manager Last Name"
                type="text"
                name="managerLast"
                value={props.managerLast}
                onChange={props.changeManagerLast}
            ></input>
        </form>
    );
};

export { Form, Form2, Form3 };