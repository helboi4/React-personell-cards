import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

function CardList({ users }) {
  // Task 1 - Difficult
  // populate the card component dynamically from users.js
  let cardList = [];
  for (let i = 0; i < users.length; i++) {
    cardList[i] = (
      <Card key={users[i].id} name={users[i].name} email={users[i].email} />
    );
  }
  return cardList;
}

export default CardList;
