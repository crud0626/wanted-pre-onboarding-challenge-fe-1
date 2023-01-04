import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import GlobalStyle from './styles/common/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
        <Header />
        <Section />
        <Footer />
    </>
  );
}

export default App;
