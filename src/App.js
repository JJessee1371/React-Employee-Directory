import React from 'react';
import Header from './Components/Header';
import Table from './Components/Table';
import './CSS/App.css';


class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Table/>  
      </div>
    );
  };
};

export default App;
