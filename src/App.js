import './App.css'

import React from "react";

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => this.setState({ monsters: data }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='App'>
        <h1
          style={{
            fontFamily: "Bigelow Rules",
            fontSize: "72px",
            color: "#0ccac4",
            textAlign: "center",
          }}
        >
          Monsters Rolodex
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SearchBox
            placeholder="Search Monsters"
            handleChange={this.handleChange}
          />
        </div>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
