import React from 'react';
import Header from './Components/Header';
import Table from './Components/Table';
import Button from './Components/Button';
import employees from './employees.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      employees
    };
  };

  render() {
    return (
      <div>
        <Header/>
        <Button/>
        {this.state.employees.map(employee => {
          return (
            <Table
              key={employee.id}
              id={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              title={employee.title}
              managerFirst={employee.managerFirst}
              managerLast={employee.managerLast}
            />
          );
        })};
      </div>
    );
  };
};

export default App;
