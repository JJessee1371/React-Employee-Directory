import React from 'react';
import employees from '../employees.json';

class Button1 extends React.Component {
    constructor() {
        super();

        this.state = {
            employees
        }
    }

    //Comparison function for sorting employees array
    compare = (a, b) => {
        let fa = a.firstName.toLowerCase();
        let fb = b.firstName.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    };

    render() {
        return (
            <button type="button" className="btn btn-success" onClick={() => {
                console.log('Hit sort by first name');
                const sorted = this.state.employees.sort(this.compare);
                console.log(sorted);
                this.setState({ employees: sorted});
            }}>First name</button>
        );
    };
};


class Button2 extends React.Component {
    constructor() {
        super();

        this.state = {
            employees
        }
    }

    compare = (a, b) => {
        let fa = a.lastName.toLowerCase();
        let fb = b.lastName.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    };

    render() {
        return (
            <button type="button" className="btn btn-success" onClick={() => {
                console.log('Hit sort by last name');
                const sorted = this.state.employees.sort(this.compare);
                console.log(sorted);
                this.setState({ employees: sorted });
            }}>Last name</button>
        );
    };
};

class Button3 extends React.Component {
    constructor() {
        super();

        this.state = {
            employees
        }
    }

    compare = (a, b) => {
        let fa = a.title.toLowerCase();
        let fb = b.title.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    };

    render() {
        return (
            <button type="button" className="btn btn-success" onClick={() => {
                console.log('Hit sort by title');
                const sorted = this.state.employees.sort(this.compare);
                console.log(sorted);
                this.setState({ employees: sorted });
            }}>Title</button>
        );
    };
};

class Button4 extends React.Component {
    constructor() {
        super();

        this.state = {
            employees
        }
    }

    compare = (a, b) => {
        let fa = a.managerLast.toLowerCase();
        let fb = b.managerLast.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    };

    render() {
        return (
            <button type="button" className="btn btn-success" onClick={() => {
                console.log('Hit sort by manager last');
                const sorted = this.state.employees.sort(this.compare);
                console.log(sorted);
                this.setState({ employees: sorted });
            }}>Manager last name</button>
        );
    };
};


export { Button1, Button2, Button3, Button4 };