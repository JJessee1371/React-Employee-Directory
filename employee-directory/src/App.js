import React from 'react';
import Header from './Components/Header';
import Table from './Components/Table';
import Button from './Components/Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Button/>
        <Table/>
      </div>
    );
  };
};

export default App;
