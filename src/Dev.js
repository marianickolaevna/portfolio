import React from "react";
import Heading from "./heading";
import Section from './section'

class Dev extends React.Component {
  render() {
    let color = 'aqua';
    return (
      <Section id="dev" >
        <Heading content='web-developer' color={color} />
      </Section>
    );
  }
}

export default Dev;
