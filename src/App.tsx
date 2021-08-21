import React from 'react';
import './App.css';
import Modal from './components/modal/modal'
import styled from 'styled-components'
import Background from './images/pattern-background-desktop.svg'

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #E0E7FF;
  font-family: 'Red Hat Display', sans-serif;
  .background-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 800px;
    width: 100%;
    background: url(${Background});
    background-size: cover;
  }
`

const App: React.FC = () => {
  return (
    <StyledApp>
      <div className="background-img" />
      <Modal />
    </StyledApp>
  );
}

export default App;
