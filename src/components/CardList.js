import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { users } from '../users';

function CardList(props) {
  // Task 1 - Difficult
  // populate the card component dynamically from users.js
  const cardNames = users.map((user) => user.name);
  const cardEmails = users.map((user) => user.email);
  let cardList = [];
  for (let i = 0; i < users.length; i++) {
    cardList[i] = <Card name={cardNames[i]} email={cardEmails[i]} />;
  }
  return cardList;
}

export default CardList;
