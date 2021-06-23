import React, { Component } from "react";
import Steps, { Step } from "./Steps";
class Stepper extends Component {
  state = {
    stage: this.props.stage,
  };

  static defaultProps = {
    stage: 1,
  };
  static Steps = Steps;
  static Step = Step;
  handleClick = () => {
    this.setState({ stage: this.state.stage + 1 });
  };

  handleBack = () => {
    this.setState({ stage: this.state.stage - 1 });
  };

  setNum = (val) => {
    this.setState({ stage: val });
  };

  handleReset = () => {
    this.setState({stage: 1})
  }
  render() {
    const { stage } = this.state;
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        stage,
        handleClick: this.handleClick,
        handleBack: this.handleBack,
        setNum: this.setNum,
        handleReset: this.handleReset
      });
    });
    return <div>{children}</div>;
  }
}

export default Stepper;
