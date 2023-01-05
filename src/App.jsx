import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import GlobalStyle from './styles/common/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'reducer/store';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Section />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
