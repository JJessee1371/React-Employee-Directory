import React from 'react';
import { Button1, Button2, Button3, Button4 } from './Button';
import '../CSS/SortWrapper.css';

function SortWrapper(props) {
    return (
        <div className=" col col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h2 className="sort-header">Sort by:</h2>
            <div className="d-flex flex-column justify-content-evenly">
                <Button1
                    sortFirst={props.sortFirst}
                />
                <Button2
                    sortLast={props.sortLast}
                />
                <Button3
                    sortTitle={props.sortTitle}
                />
                <Button4
                    sortManagerLast={props.sortManagerLast}
                />
            </div>
        </div>
    );
};

export default SortWrapper;