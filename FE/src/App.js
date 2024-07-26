import React from 'react';
import './App.css';


import MyForm from './MyForm';
import PdfView from './PdfView';
import Amt from './Amt';


function App() {
  return (
    <div className="container" >
     <div >
          <PdfView  className="pdf-viewer"/>
         </div>
          <div className="form">
           <Amt />
           <MyForm />
          </div>
    </div>
  );
}

export default App;
