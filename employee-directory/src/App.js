import React from 'react';
import Header from './Components/Header';
import Table from './Components/Table';
import { Button1, Button2, Button3, Button4 } from './Components/Button';



class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Button1/>
        <Button2/>
        <Button3/>
        <Button4/>
        <Table/>  
      </div>
    );
  };
};

export default App;
