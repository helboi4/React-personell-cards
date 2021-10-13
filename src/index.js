import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Card from './components/Card';
import './index.css';
import { users } from './users';
import CardList from './components/CardList';

ReactDOM.render(
  <div>
    <CardList />
  </div>,
  document.getElementById('root')
);
