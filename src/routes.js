/*
* @Author: mithril
* @Date:   2016-06-07 16:25:32
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-17 14:06:52
*/

'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
// import {
//     App,
//     Home,
//     About,
//     // Account,
//     // Widgets,
//     // About,
//     // Login,
//     // LoginSuccess,
//     // Survey,
//     // NotFound,
//   } from './containers';

import { App } from './containers/App';
import { Home } from './containers/Home';
import { About } from './containers/Home';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
  </Route>
)

// <Route path="/repos" component={Repos}>
//   <Route path="/repos/:userName/:repoName" component={Repo}/>
// </Route>