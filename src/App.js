import { GlobalStyles } from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme';
import QuoteBox from './components/QuoteBox';
import { useEffect, useState } from 'react';

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [author, getAuthor] = useState('');
  const [text, getText] = useState('');
  const axios = require('axios');

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
        <QuoteBox
          author={author}
          text={text}
          getQuote={getQuote}
          setDataLoaded={setDataLoaded}
          dataLoaded={dataLoaded}
        ></QuoteBox>
      </>
      <footer>
        <a href="https://icons8.com/">Icons From Icons8</a>
        <a href="https://icons8.com/">Made By Philip Clark</a>
      </footer>
    </ThemeProvider>
  );
}

export default App;
