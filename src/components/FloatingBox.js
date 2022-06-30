import { StyledFloatingBox } from './styles/FloatingBox.styled';
import { Refresh } from './Refresh';
import { useState } from 'react';

export default function FloatingBox(props) {
  const [scale, setScale] = useState(false);
  const animate = () => {
    setScale((prevState) => {
      return !prevState;
    });
  };

  // const a = () => {
  //   props.setData(false);
  // };

  return (
    <StyledFloatingBox>
      <div className={props.dataLoaded ? 'fadeIn' : 'fadeOut'}>
        <h3>- {props.author.replaceAll('"', '')}</h3>
        <h1>{props.text}</h1>
      </div>
      <figure id="line" />
      <Refresh getQuote={props.getQuote} animate={animate} data={props.setData} />
    </StyledFloatingBox>
  );
}
