import React, { Children } from 'react';

class Section extends React.Component {
  render() {
    return (
      <div className="section" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}


export default Section;