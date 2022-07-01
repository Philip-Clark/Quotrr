import GlobalStyles from './components/styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme';
import QuoteBox from './components/QuoteBox';
import { useEffect, useState } from 'react';
import './styles.css';

function App() {
  //
  // Main Variables
  //
  // Holds the load state of the api data
  const [dataLoaded, setDataLoaded] = useState(false);
  // Holds the returned author from the api
  const [author, getAuthor] = useState('');
  // Holds the returned text from the api
  const [text, getText] = useState('');
  // axios require var
  const axios = require('axios');
  // Options for axios api connection
  const options = {
    method: 'GET',
    url: 'https://programming-quotes-api.herokuapp.com/Quotes/random',
  };

  //
  // Run the GetQuote() function on load
  //
  useEffect(() => {
    getQuote();
  }, []);

  //
  // Call the random quote API using axios and set author and text vars
  //
  function getQuote() {
    // set data  load state to false
    setDataLoaded(false);
    // Axios API call
    axios
      .request(options)
      .then(function (response) {
        if (JSON.stringify(response.data.en).length < 100) {
          // set author and text vars to stringified JSON
          getAuthor(JSON.stringify(response.data.author));
          getText(JSON.stringify(response.data.en));
          // set data load state to true
          setDataLoaded(true);
        } else {
          getQuote();
        }
      })
      .catch(function (error) {
        // Catch and log errors
        console.error(error);
      });
  }

  //
  // Return the React Component
  //
  return (
    // Load the theme from above
    <ThemeProvider theme={theme}>
      {/* load the Global styles */}
      <GlobalStyles />
      {/* Title */}
      <h1>Quotrr</h1>
      {/* Quote Box component with passed props */}
      <QuoteBox
        author={author}
        text={text}
        getQuote={getQuote}
        setDataLoaded={setDataLoaded}
        dataLoaded={dataLoaded}
      />
      {/* Footer to hold attribution and github links */}
      <footer>
        <a href="https://icons8.com/">Icons From Icons8</a>
        <a href="https://github.com/Philip-Clark">Made By Philip Clark</a>
      </footer>
    </ThemeProvider>
  );
}

// Export the app function so index.js can access it.
export default App;
