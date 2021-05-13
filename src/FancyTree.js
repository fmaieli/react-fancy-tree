import React from 'react';
import './style.css';
var $ = require('jquery');
import 'jquery.fancytree';

export default class FancyTree extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.$el = $(this.el);
    this.init();
  }

  componentWillUnmount() {
    this.$el.fancytree('destroy');
  }

  init() {
    var resultData = this.props.wrapper.mapTiposEnsayos(this.props.data);
    this.$el.fancytree({
      checkbox: true,
      icons: false,
      selectMode: 3,
      source: resultData,
      beforeSelect: null
    });
  }

  onChange() {}

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
