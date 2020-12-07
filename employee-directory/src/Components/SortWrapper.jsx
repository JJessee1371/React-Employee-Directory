import React from 'react';
import { Button1, Button2, Button3, Button4 } from './Button';
import '../CSS/SortWrapper.css';

function SortWrapper(props) {
    return (
        <div>
            <h2 className="sort-header">Sort by:</h2>
            <div className="d-flex justify-content-around">
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