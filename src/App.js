import React from "react"; 
import './App.css';
import Header from './Components/Header.js'
import Sidebar from "./Components/Sidebar.js";
import Chat from "./Components/Chat.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";


function App() { 
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Chat />
              <Switch>
              <Route path="/" exact></Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;