// lib
import { Component } from "react";

// components
import List from "./components/list/list.component";

// css
import "./App.css";
import Search from "./components/search/search.component";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: "",
    };

    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ monsters: data });
      });

    console.log("componentDidMount");
  }

  handleSearch = (val) => {
    this.setState({ search: val });
  };

  render() {
    console.log("render function");

    let new_monsters_list = this.state.monsters.filter((data) => {
      return data.name
        .toLowerCase()
        .indexOf(this.state.search.toLowerCase()) === -1
        ? false
        : true;
    });

    return (
      <div className="main">
        <Search setSearch={this.handleSearch} />
        <List monsterList={new_monsters_list} />
      </div>
    );
  }
}
