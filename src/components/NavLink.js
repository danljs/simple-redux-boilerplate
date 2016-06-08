/*
* @Author: mithril
* @Date:   2016-06-07 16:31:18
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-07 16:31:22
*/

'use strict';

import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})