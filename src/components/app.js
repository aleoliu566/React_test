import React, { Component } from 'react';
import ReactDom    from 'react-dom';
import { connect } from 'react-redux'

import Picture    from './item_image';
import TotalPrice from './total_price';
import Color      from './item_color';
import ItemData   from './item_data';

import * as actionCreators from '../actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { initialize: this.initialize() }
  }

  initialize(){
    this.props.initializeColor({});
    this.props.initializeSize({});
    this.props.getData({});
  }

  render() {
    return (
      <div>
        <Picture />
        <div>
          <span className="left-block">單價</span>
          <span className="right-block">2700 元</span>
        </div>
        <Color />
        <ItemData />
      </div>
    );
  }
}

const mapStateToProps = store => (
  { 
    items: store.items,
    datas: store.datas,
    stock: store.stock,
    listOfSize: store.listOfSize,
    listOfColor: store.listOfColor,
    purchaseQuantity: store.purchasQuantity,
  }
)

export default connect(mapStateToProps, actionCreators)(App)



