import React from "react";

class Heading extends React.Component {
  
  render() {
    return (
      <>
        <h2 className="heading" style={{ color: this.props.color }}>{this.props.content}</h2>
      </>
    );
  }
}

export default Heading;
