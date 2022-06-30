import { GlobalStyles } from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme';
import QuoteBox from './components/QuoteBox';
import { useEffect, useState } from 'react';

function App() {
  const axios = require('axios');
  const [text, getText] = useState('');
  const [author, getAuthor] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  const options = {
    method: 'GET',
    url: 'https://programming-quotes-api.herokuapp.com/Quotes/random',
  };

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    setDataLoaded(false);
    axios
      .request(options)
      .then(function (response) {
        getAuthor(JSON.stringify(response.data.author));
        getText(JSON.stringify(response.data.en));
        setDataLoaded(true);
      })
      .catch(function (error) {
        console.error(error);
      });
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
        <a href="https://github.com/Philip-Clark">Made By Philip Clark</a>
      </footer>
    </ThemeProvider>
  );
}

export default App;
