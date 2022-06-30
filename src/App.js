import { GlobalStyles } from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
// import { theme } from './components/styles/theme';
import FloatingQuoteBox from './components/QuoteBox';
import { useEffect, useState } from 'react';

function App() {
  const theme = {
    colors: {
      card: '#D9D9D9',
      body: '#BFBFBF',
      pop: '#497a89',
      text: '#4d4d4d',
    },
    fonts: {
      imports:
        "'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&family=Oswald:wght@300&display=swap'",
      fontA: "'Oswald', sans-serif",
      fontB: "'Cormorant Garamond', serif",
    },
  };

  const [dataLoaded, setDataLoaded] = useState(false);
  const [author, getAuthor] = useState('');
  const [text, getText] = useState('');
  const axios = require('axios');

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
        console.log(error);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>Quotrr</h1>
        <FloatingQuoteBox
          author={author}
          text={text}
          getQuote={getQuote}
          setDataLoaded={setDataLoaded}
          dataLoaded={dataLoaded}
        ></FloatingQuoteBox>
      </>
      <footer>
        <a href="https://icons8.com/">Icons From Icons8</a>
        <a href="https://github.com/Philip-Clark">Made By Philip Clark</a>
      </footer>
    </ThemeProvider>
  );
}

export default App;
