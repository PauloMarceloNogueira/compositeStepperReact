import React, { Component } from "react";
import "../App.css";

export const Step = (props) => {
  if (props) {
    return <div key={props?.num}>{props?.useCase(props)}</div>;
  }
  return <div>loading</div>
};

class Steps extends Component {
  render() {
    const { stage } = this.props;
    const childrenProps = React.Children.map(this.props.children, (child) => {
      if (stage === child.props.num) return React.cloneElement(child, this.props);      
    });
    return (
      <div>
        {childrenProps}
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Steps;
