import React from 'react';
import ReactDOM from 'react-dom';

import FancyTree from './FancyTree';
import FancyTreeWrapper from '../wrapper/fancyTreeWrapper.js';
import data from '../data/data.js';

var fancyWrapper = new FancyTreeWrapper('fancytree');

ReactDOM.render(
  <FancyTree data={data} wrapper={fancyWrapper} />,
  document.getElementById('root')
);
