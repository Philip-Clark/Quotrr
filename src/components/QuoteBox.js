import { StyledQuoteBox } from './styles/QuoteBox.styled';

export default function QuoteBox(props) {
  return (
    <StyledQuoteBox>
      <div className={props.dataLoaded ? 'fadeIn' : 'fadeOut'}>
        <h3>- {props.author.replaceAll('"', '')}</h3>
        <h1>{props.text.replaceAll('\\', '')}</h1>
      </div>
      <figure id="line" />
      <button onClick={props.getQuote} />
    </StyledQuoteBox>
  );
}
