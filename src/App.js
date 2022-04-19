import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { animals } from "./animals";
import Cards from "./components/Cards";

class App extends Component {
  //Component must be defined e.g. on row 1
  state = {
    animals: animals,
    search: "",
    // right side refers to state, left side is object in array. Can remove left side and just leave one 'animals'
  };

  removeHandler = (name) => {
    console.log("remove was clicked", name);
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({
      animals: updatedArray,
    });
  };

  addLikeHandler = (name) => {
    console.log("add was clicked", name);
    this.setState((state) => {
      //maps through updatedArray in case it is there
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 }; //return new object with updated likes. Takes copy of object to avoid overriding info in array
        } else {
          return animal; //return it untouched if the first does not come out true, i.e. return edited or untouched version
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  searchHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
    console.log(this.state.search); //if logging state, it must come after state has been set, not before (i.e. between setstate and searchhandler)
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div className="App">
        <Header />
        <div className="inputBox">
          <h2>{this.state.animals.length} Animals</h2>
          <input type="text" onChange={this.searchHandler} />
          {/* {<h3>{this.state.search}</h3>} */}
        </div>
        <div className="flexContainer">
          <Main>
            {animalFilter.map((animal) => (
              // {this.state.animals.map((animal) => ( (to use when not using animalFilter)
              <Cards
                key={animal.name}
                name={animal.name}
                likes={animal.likes}
                // remove1={this.removeHandler.bind(this, animal.name)}
                remove={() => this.removeHandler(animal.name)}
                add={() => this.addLikeHandler(animal.name)}
                search={this.state.search}
              />
            ))}
          </Main>
        </div>
      </div>
    );
  }
}

export default App;
