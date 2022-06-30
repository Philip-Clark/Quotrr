import React from 'react';
import { useState } from 'react';

export function Refresh(props) {
  const [fade, setFade] = useState(false);

  const triggerFade = () => {
    props.animate();
    props.getQuote();
    setFade((prevState) => {
      return !prevState;
    });
  };

  return <button className={fade ? 'refresh' : 'paused'} onClick={triggerFade}></button>;
}
