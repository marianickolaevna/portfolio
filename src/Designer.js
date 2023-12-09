import React from 'react';
import Heading from "./heading";
import Section from './section'

class Designer extends React.Component {
  render() {
    let color = '#f900ff';
    return (
      <Section id='designer'>
        <Heading content='ui-ux designer'  color={color} />
      </Section>
    );
  }
}

export default Designer;