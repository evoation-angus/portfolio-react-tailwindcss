import React from "react";

function numberToWrittenForm(number) {
  const writtenForms = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    "+": "add",
    "-": "subtract",
    "=": "equals",
    ".": "decimal",
    "*": "multiply",
    "/": "divide",
    C: "clear",
  };

  const writtenForm = writtenForms[number];
  return writtenForm !== undefined ? writtenForm : "Invalid character";
}

function filterDot(input) {
  return input.replace(/(?<=\d)\.\d+\./g, (match) => {
    const decimalPart = match.slice(1, -1);
    return "." + decimalPart.replace(/\./g, "");
  });
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.sendData = this.sendData.bind(this);
  }
  sendData() {
    this.props.sendDataToParent(this.state.value);
  }

  render() {
    return (
      <div>
        <button
          id={numberToWrittenForm(this.state.value)}
          class={
            this.state.value === "C"
              ? "btn btn-danger"
              : !isNaN(this.state.value)
              ? "btn btn-secondary"
              : "btn btn-primary"
          }
          onClick={this.sendData}
        >
          {this.state.value}
        </button>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: "0",
    };
    this.handleDataFromChild = this.handleDataFromChild.bind(this);
  }

  handleDataFromChild(data) {
    if (data === "=") {
      let equation = this.state.equation;
      equation = equation.match(/(\*|\+|\/|-)?(\.|-)?\d+/g).join("");

      console.log(equation);
      let result = eval(equation);
      this.setState({
        equation: result,
      });
    } else if (data === "C") {
      this.setState({
        equation: "0",
      });
    } else {
      if (this.state.equation === "0") {
        this.setState({
          equation: data,
        });
      } else {
        if (
          data === "." &&
          this.state.equation.charAt(this.state.equation.length - 1) === "."
        ) {
        } else {
          let newEq = this.state.equation + data;

          if (newEq.split(".").length >= 3) {
            newEq = filterDot(newEq);
          }
          this.setState({
            equation: newEq,
          });
        }
      }
    }
  }
  render() {
    return (
      <div>
        <div id="display">{this.state.equation}</div>
        <div class="buttons">
          <div class="row">
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="7" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="8" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="9" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="+" />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="4" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="5" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="6" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="-" />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="1" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="2" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="3" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="*" />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="0" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="." />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="=" />
            </div>
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="/" />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <Button sendDataToParent={this.handleDataFromChild} value="C" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator
