import { ThemeProvider } from 'styled-components';
// import { theme } from './components/styles/theme';
import GlobalStyles from './components/styles/Global.styled';
import QuoteBox from './components/QuoteBox';
import { useEffect, useState } from 'react';
import './styles.css';

function App() {
  const [text, getText] = useState('');
  const [author, getAuthor] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);
  const axios = require('axios');
  const theme = {
    colors: {
      card: '#364346',
      body: '#2a3538',
      pop: '#22c5a4',
      text: '#c6cfd1',
    },
    fonts: {
      imports:
        "'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&family=Oswald:wght@300&display=swap'",
      fontA: "'Oswald', sans-serif",
      fontB: "'Cormorant Garamond', serif",
    },
  };

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
      <GlobalStyles />
      <h1>Quotrr</h1>
      <QuoteBox
        author={author}
        text={text}
        getQuote={getQuote}
        setDataLoaded={setDataLoaded}
        dataLoaded={dataLoaded}
      ></QuoteBox>
      <footer>
        <a href="https://icons8.com/">Icons From Icons8</a>
        <a href="https://github.com/Philip-Clark">Made By Philip Clark</a>
      </footer>
    </ThemeProvider>
  );
}

export default App;
