import React from 'react';
import {Form, Form2, Form3 } from './Form';
import { Button5, Button6, Button7 } from './Button';

function FilterWrapper(props) {
    return (
        <div>
            <h2>Filter by:</h2>
            <div>
                <h3>Title</h3>
                <Form
                    title={props.title}
                    changeTitle={props.changeTitle}
                />
                <Button5
                    filterTitle={props.filterTitle}
                />
            </div>
            <div>
                <h3>Last Name</h3>
                <Form2
                    lastName={props.lastName}
                    changeLast={props.changeLast}
                />
                <Button6
                    filterLast={props.filterLast}
                />
            </div>
            <div>
                <h3>Manager Last Name</h3>
                <Form3
                    managerLast={props.managerLast}
                    changeManagerLast={props.changeManagerLast}
                />
                <Button7
                    filterManagerLast={props.filterManagerLast}
                />
            </div>
        </div>
    );
};

export default FilterWrapper;