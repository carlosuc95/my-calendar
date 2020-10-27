import React from 'react';
import { Calendar } from './components/Calendar';
import styled from 'styled-components';
import { Calendar2 } from './components/Calendar2';

const Container = styled.div`

  height: 100%;
  display:flex;
  align-items: center;
  flex-direction: column;
  

`;


function App() {
  return (

    <Container>
      <h1>Simple Calendar</h1>
      <Calendar/>
      <Calendar2/>
      
    </Container>
  );
}

export default App;
