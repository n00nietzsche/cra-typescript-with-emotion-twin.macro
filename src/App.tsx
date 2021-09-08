import React from 'react';
import logo from './logo.svg';
import './App.css';
import tw, {styled} from 'twin.macro';

const MyDiv = styled.div`
  background-color: white;
  ${tw`text-blue-800`}
  ${tw`border-purple-500`}
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyDiv>안녕하세요.</MyDiv>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
