import React from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import GlobalStyle from './styles/common/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
        <Header />
        <Section />
    </>
  );
}

export default App;
