import { useState } from 'react';
import { StyledQuoteBox } from './styles/QuoteBox.styled';

// The Quote box function, can receive props from parent
function QuoteBox(props) {
  const [buttonAnimate, setButtonAnimate] = useState(false);
  const clickedRefresh = () => {
    props.getQuote();
    setButtonAnimate(true);
  };
  // return the Quote Box
  return (
    // a styled component. This allows us to break styling into component specific files.
    <StyledQuoteBox>
      {/* 
          All the text is held in this div, 
          which fades in and out based on the passed in dataLoaded state
       */}
      <div className={props.dataLoaded ? 'fadeIn' : 'fadeOut'}>
        {/* show the author with "'s removed*/}
        <h3>- {props.author.replaceAll('"', '')}</h3>
        {/* show the text with \'s removed*/}
        <h1>{props.text.replaceAll('\\', '')}</h1>
      </div>
      <figure id="line" />
      {/* refresh button that calls the parent getQuote function */}
      <button
        className={buttonAnimate ? 'clicked' : 'x'}
        onAnimationEnd={() => {
          if (buttonAnimate == true) {
            setButtonAnimate(false);
          }
        }}
        onClick={clickedRefresh}
      />
    </StyledQuoteBox>
  );
}

// export the QuoteBox so it can be accessed by other components
export default QuoteBox;
