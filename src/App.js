import { GlobalStyles } from './components/styles/Global';
import FloatingBox from './components/FloatingBox';
import { Container } from './components/styles/container.styled.js';
import { ThemeProvider } from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

const theme = {
  colors: {
    card: '#324348',
    body: '#1f2e32',
    pop: '#14e2a1',
    white: '#dbdad2',
  },
};

// Test

function App() {
  const axios = require('axios');
  const [author, getAuthor] = useState('');
  const [text, getText] = useState('');

  const [dataIn, setDataIn] = useState(false);

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    setDataIn(false);
    const options = {
      method: 'GET',
      url: 'https://programming-quotes-api.herokuapp.com/Quotes/random',
    };
    axios
      .request(options)
      .then(function (response) {
        getAuthor(JSON.stringify(response.data.author));
        getText(JSON.stringify(response.data.en));
        console.log(response.data);
        console.log(`author : ${author}`);
        console.log(`Text : ${text}`);
        console.log(response.data);
        setDataIn(true);
      })
      .catch(function () {});
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>Quotrr</h1>
        <FloatingBox
          author={author}
          text={text}
          getQuote={getQuote}
          setData={setDataIn}
          data={dataIn}
        ></FloatingBox>
      </>
      <footer>
        <a href="https://icons8.com/">Icons From Icons8</a>
        <a href="https://icons8.com/">Made By Philip Clark</a>
      </footer>
    </ThemeProvider>
  );
}

export default App;
