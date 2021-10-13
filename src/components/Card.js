import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

function Card(props) {
  return (
    <div className="bg-white dib br3 pa3 ma2 grow bw2 shadow-5 box tc">
      <img
        src={`https://avatars.dicebear.com/api/human/${props.name}.svg`}
        alt="user"
      />
      <h2> {props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
