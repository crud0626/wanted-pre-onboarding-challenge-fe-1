import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from 'config/queryClient';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import GlobalStyle from './styles/common/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Provider store={store}>
          <Header />
          <Section />
          <Footer />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
