import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
  }
  componentDidMount() {
    console.log("Child componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child Should ComponentUpdate");
    return true;
  }
  componentDidUpdate(prevProp, prevState) {
    console.log("child componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("child is unmounted");
  }
  render() {
    console.log("child render called");
    return (
      <>
        <h1> child Name : {this.props.name}</h1>
      </>
    );
  }
}

export default Child;
