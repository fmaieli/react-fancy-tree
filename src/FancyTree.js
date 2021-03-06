import React from 'react';
import './style.css';
var $ = require('jquery');
import 'jquery.fancytree';

export default class FancyTree extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.$el = $(this.el);
    this.init();
  }

  componentWillUnmount() {
    this.$el.fancytree('destroy');
  }

  init() {
    let self = this;
    let registeredList = [];

    var resultData = this.props.mapper.map(this.props.data, registeredList);
    this.$el.fancytree({
      checkbox: true,
      icons: false,
      selectMode: 3,
      source: resultData,
      beforeSelect: null,
      select: function(event, data) {
        let itemsSelected = self.selectedElements();
        let itemsSelectedFromList = itemsSelected.map(i => registeredList[i]);
        self.props.onChange(itemsSelectedFromList);
      }
    });
  }

  selectedElements() {
    var tree = this.$el.fancytree('getTree').getSelectedNodes();
    var arraySelectedElements = [];
    var y = 0;
    var x = 0;

    for (x = 0; x < tree.length; x++) {
      if (tree[x].refKey == '1') {
        arraySelectedElements[y] = tree[x].key;
        y++;
      }
    }

    return arraySelectedElements;
  }

  selectedElementsJoined() {
    return this.selectedElements().join(',');
  }

  render() {
    return <div ref={el => (this.el = el)} />;
  }
}
