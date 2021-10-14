import React from 'react';
import CardList from './components/CardList';
import './style.css';
import SearchBox from './components/SearchBox';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchBoxTerm: '',
    };
  }
  //user defined functions in react classes should be arrow functions - There's no logic just remember this.
  onSearchChange = (event) => {
    this.setState({ searchBoxTerm: event.target.value });
   
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users: users });
      });
  }

  render() {
    const filteredUsers = this.state.users.filter((users) => {
      return users.name
        .toLowerCase()
        .includes(this.state.searchBoxTerm.toLowerCase());
    });
    if (this.state.users.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1>PixelCorp Directory</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList users={filteredUsers} />
        </div>
      );
    }
  }
}

export default App;
