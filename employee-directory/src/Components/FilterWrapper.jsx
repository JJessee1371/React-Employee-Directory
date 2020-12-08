import React from 'react';
import {Form, Form2, Form3 } from './Form';
import { Button5, Button6, Button7 } from './Button';
import '../CSS/FilterWrapper.css';

function FilterWrapper(props) {
    return (
        <div className=" col col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h2 className="filter-header">Filter by:</h2>
            <div>
                <div className="center">
                    <Form
                        title={props.title}
                        changeTitle={props.changeTitle}
                    />
                    <Button5
                        filterTitle={props.filterTitle}
                    />
                </div>
                <div>
                    <Form2
                        lastName={props.lastName}
                        changeLast={props.changeLast}
                    />
                    <Button6
                        filterLast={props.filterLast}
                    />
                </div>
                <div> 
                    <Form3
                        managerLast={props.managerLast}
                        changeManagerLast={props.changeManagerLast}
                    />
                    <Button7
                        filterManagerLast={props.filterManagerLast}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterWrapper;