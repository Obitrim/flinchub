import React from 'react';
import { Route } from 'react-router-dom';

import './RouterView.css';

// view components
import Home from '../../views/Home';

const Index = (props) => {
  return (
    <main className="RouterView">
    	<Route path="/" exact component={Home}/>
    </main>
  )
}

export default Index;