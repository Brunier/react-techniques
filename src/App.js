import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title, Body, Item, Accordion} from './components/accordion';

function App() {
  return (
    <div className="App">
      <Accordion defaultId="1">
        <Item id="1">
          <Title>Eae</Title>
          <Body>Eae Body</Body>
        </Item>
        <Item id="2">
          <Title>Eae2</Title>
          <Body>Eae Body2</Body>
        </Item>
        <Item id="3">
          <Title>Eae3</Title>
          <Body>Eae Body3</Body>
        </Item>
      </Accordion>
    </div>
  );
}

export default App;
