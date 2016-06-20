import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getFileList} from '../actions/NodeActions'
import Footer from '../components/Footer';
import TreeNode from '../containers/TreeNode';
import Home from '../containers/Home';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nodes: []
    }
  }

  componentDidMount() {
    let {nodes} = getFileList()
    this.setState({
      nodes: nodes
    })
  }

  render() {
    const { nodes } = this.props
    return (
      <div className="main-app-container">
        <Home />
        <div className="main-app-nav">Simple Redux Boilerplate</div>
        {nodes.map(node =>
          <TreeNode key={node.name} node={node} />
        )}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nodes: state.nodes
  };
}


// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(getFileList, dispatch)
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    getFileList
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

