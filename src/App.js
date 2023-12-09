import './Hero.css';
import './Dev.css';
import './Designer.css';
import './Webflow.css';
import Hero from './hero'
import Dev from './Dev'
import Designer from './Designer'
import Webflow from './Webflow'
import React from 'react';

class Main extends React.Component {
 
  render() {
    return <>
    <Hero/>
    <Dev/>
    <Designer/>
    <Webflow/>
    </>;
  }
}

function App() {
  return (
    <Main/>
  );
}

export default App;
