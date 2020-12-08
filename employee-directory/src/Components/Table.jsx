import React from 'react';
import SortWrapper from './SortWrapper';
import FilterWrapper from './FilterWrapper';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import employees from '../employees.json';

class Table extends React.Component {
    constructor() {
        super();

        this.state = {
            employees,
            title: '',
            lastName: '',
            managerLast: ''
        };
    };

    //Helper comparison functions for sorting employees array
    compareFirst = (a, b) => {
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

    compareLast = (a, b) => {
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

    compareTitle = (a, b) => {
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

    compareManagerLast = (a, b) => {
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

    //Sort employee data by a specified field
    sortFirst = () => {
        const sorted = this.state.employees.sort(this.compareFirst);
        this.setState({ employees: sorted });
    };

    sortLast = () => {
        const sorted = this.state.employees.sort(this.compareLast);
        this.setState({ employees: sorted });
    };

    sortTitle = () => {
        const sorted = this.state.employees.sort(this.compareTitle);
        this.setState({ employees: sorted });
    };

    sortManagerLast = () => {
        const sorted = this.state.employees.sort(this.compareManagerLast);
        this.setState({ employees: sorted });
    };


    //Handle change to input values on all forms
    handleInputChangeTitle = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleInputChangeLast = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleInputChangeMgrlast = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    //Handle form submission and filter by title
    submitAndFilterTitle = event => {
        event.preventDefault();
        if (!this.state.title) {
            alert('Please select a job title to filter by');
        } else {
            this.setState({ title: '' });
        }

        const employees = this.state.employees.filter(employee => employee.title === this.state.title);
        this.setState({ employees });
    };

    submitAndFilterLast = event => {
        event.preventDefault();
        if (!this.state.lastName) {
            alert('Please select a job title to filter by');
        } else {
            this.setState({ lastName: '' });
        }

        const employees = this.state.employees.filter(employee => employee.lastName === this.state.lastName);
        this.setState({ employees });
    };

    submitAndFilterMgrlast = event => {
        event.preventDefault();
        if (!this.state.managerLast) {
            alert('Please select a job title to filter by');
        } else {
            this.setState({ managerLast: '' });
        }

        const employees = this.state.employees.filter(employee => employee.managerLast === this.state.managerLast);
        this.setState({ employees });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <SortWrapper
                            sortFirst={this.sortFirst}
                            sortLast={this.sortLast}
                            sortTitle={this.sortTitle}
                            sortManagerLast={this.sortManagerLast}
                        />
                        <FilterWrapper
                            title={this.state.title}
                            lastName={this.state.lastName}
                            managerLast={this.state.managerLast}
                            changeTitle={this.handleInputChangeTitle}
                            changeLast={this.handleInputChangeLast}
                            changeManagerLast={this.handleInputChangeMgrlast}
                            filterTitle={this.submitAndFilterTitle}
                            filterLast={this.submitAndFilterLast}
                            filterManagerLast={this.submitAndFilterMgrlast}
                        />
                    </div>
                </div>
                <table className="table table-striped">
                    <TableHeader/>
                    <tbody>
                        {this.state.employees.map(employee => {
                            return (
                                <TableBody
                                    key={employee.id}
                                    id={employee.id}
                                    firstName={employee.firstName}
                                    lastName={employee.lastName}
                                    email={employee.email}
                                    phone={employee.phone}
                                    title={employee.title}
                                    managerFirst={employee.managerFirst}
                                    managerLast={employee.managerLast}
                                />
                            );
                        })};
                    </tbody>
                </table>                 
            </div>
        );
    };
};


export default Table;