import React from 'react';
import './style.css';
var $ = require('jquery');
import 'jquery.fancytree';

export default class FancyDropdownTree extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.initializeComponent();
  }

  componentWillUnmount() {
    this.$el.somePlugin('destroy');
  }

  initializeComponent() {
    var resultData = this.props.wrapper.mapTiposEnsayos(this.props.data);
    this.$el.fancytree({
      checkbox: true,
      icons: false,
      selectMode: 3,
      source: resultData,
      beforeSelect: null
    });
  }

  render() {
    return <div ref={el => (this.el = el)} />;
  }
}
