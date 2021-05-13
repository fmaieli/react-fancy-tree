import React from 'react';
import FancyTree from './FancyTree';
import FancyTreeWrapper from '../wrapper/fancyTreeWrapper.js';
import data from '../data/data.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeFancyTree = this.onChangeFancyTree.bind(this);

    this.state = {
      fancyTreeItems: [],
      wrapper: new FancyTreeWrapper('fancytree')
    };
  }

  componentDidMount() {}

  onChangeFancyTree(itemsSelected) {
    this.setState({ fancyTreeItems: itemsSelected });
    console.log(this.state.fancyTreeItems);
  }

  render() {
    return (
      <div>
        <h1>FancyTreeComponent</h1>
        <FancyTree
          data={data}
          wrapper={this.state.wrapper}
          onChange={this.onChangeFancyTree}
        />
        <pre>{this.state.fancyTreeItems}</pre>
      </div>
    );
  }
}
