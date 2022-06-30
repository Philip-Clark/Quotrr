import { useState } from 'react';

export default function Quote() {
  const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://programming-quotes-api.herokuapp.com/Quotes/random',
  };
  const [author, getAuthor] = useState('');
  const [text, getText] = useState('');

  axios
    .request(options)
    .then(function (response) {
      getAuthor(JSON.stringify(response.data.author));
      getText(JSON.stringify(response.data.en));
      console.log(response.data);
      console.log(`author : ${author}`);
      console.log(`Text : ${text}`);
      console.log(response.data);
    })
    .catch(function () {});

  return { a: { author }, b: { text } };
}
