import React, { Component } from "react";
import Child from "./Child";

class Application extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      name: "Neelam"
    };
  }

  changeName = () => {
    this.setState({ name: "Karan" });
  };

  componentDidMount() {
    console.log("inside componentDidMount");
    this.setState({ name: "ppddf" });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Inside Should ComponentUpdate");
    return true;
  }
  componentDidUpdate(prevProp, prevState) {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render called");
    if (this.state.name === "Karan") {
      return <div></div>;
    }
    return (
      <>
        <h1>Hello World</h1>
        <Child name={this.state.name} />
        <button onClick={this.changeName}>Click</button>
      </>
    );
  }
}

export default Application;
