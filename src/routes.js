/*
* @Author: mithril
* @Date:   2016-06-07 16:25:32
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-08 13:32:32
*/

'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {
    App,
    Home,
    About,
    // Account,
    // Widgets,
    // About,
    // Login,
    // LoginSuccess,
    // Survey,
    // NotFound,
  } from 'containers';

import { Root } from './containers/Root';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
  </Route>
)

    // <Route path="/repos" component={Repos}>
    //   <Route path="/repos/:userName/:repoName" component={Repo}/>
    // </Route>