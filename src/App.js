import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { animals } from "./animals";
import Cards from "./components/Cards";

class App extends Component {
  //Component must be defined e.g. on row 1
  state = {
    animals: animals,
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

  render() {
    return (
      <div className="App">
        <Header />

        <Main>
          {this.state.animals.map((animal) => (
            <Cards
              key={animal.name}
              name={animal.name}
              likes={animal.likes}
              // remove1={this.removeHandler.bind(this, animal.name)}
              remove={() => this.removeHandler(animal.name)}
              add={() => this.addLikeHandler(animal.name)}
            />
          ))}
        </Main>
      </div>
    );
  }
}

export default App;
