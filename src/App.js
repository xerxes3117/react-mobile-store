import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">Col 1</div>
        <div className="col-2">
          <span>
            <i className="fas fa-home" />
          </span>
          </div>
      </div>
    </div>
  );
}

export default App;
