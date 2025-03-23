import React from 'react';
// import logo from './logo.svg';
import './App.css';
import User from './user/User.tsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        我是新版本的！！
        <User/>
      </header>
    </div>
  );
}

export default App;
