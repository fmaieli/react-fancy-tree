import React from 'react';
import FancyTree from './FancyTree';
import FancyTreeWrapper from '../wrapper/fancyTreeWrapper.js';
import data from '../data/data.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wrapper: new FancyTreeWrapper('fancytree')
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Fancy Tree</h1>
        <FancyTree data={data} wrapper={this.state.wrapper} />
      </div>
    );
  }
}
