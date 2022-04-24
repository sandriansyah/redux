import { useState } from 'react';
import './App.css';
import ListContact from './component/listContact';

function App() {

  const [name,setName]= useState('Sandriansyah')

  return (
    <div style={{marginLeft:"100px",marginTop:"50px"}}>
      <h2>Contact App</h2>
      <ListContact/>
    </div>
  );
}

export default App;