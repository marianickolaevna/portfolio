import React from 'react';
import Heading from "./heading";
import Section from './section'

class Webflow extends React.Component {
  render() {
    let color = 'rgb(155 0 255)';
    return (
      <Section id='webflow'>
        <Heading content='webflow developer'  color={color} />
      </Section>
    );
  }
}


export default Webflow;