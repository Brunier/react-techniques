import React from 'react';
import { Title, Body, Item, Accordion} from '../components/accordion';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
