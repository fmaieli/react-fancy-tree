import React from 'react';
import FancyTree from './FancyTree';
import FancyTreeMapper from '../mapper/fancyTreeMapper.js';
import data from '../data/data.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeFancyTree = this.onChangeFancyTree.bind(this);

    this.state = {
      fancyTreeItems: [],
      mapper: new FancyTreeMapper()
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
          mapper={this.state.mapper}
          onChange={this.onChangeFancyTree}
        />
        <pre>{this.state.fancyTreeItems}</pre>
      </div>
    );
  }
}
