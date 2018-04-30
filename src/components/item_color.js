import React from 'react';
import ReactDom from 'react-dom';

import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'

class color extends React.Component {
  constructor(props) {
    super(props);
  }

  chooseColor(e) {
    this.props.setColor({color:e.target.value})
    this.props.changelistOfSize({color: e.target.value, datas: this.props.datas});
  }

  render (){
    return (
      <div>
        <span className="left-block">顏色</span>
        <span className="right-block">
          { this.props.listOfColor.map((result, index)=>{
            return (<button key={index} onClick={this.chooseColor.bind(this)} value={result} className={"color-block bg-" + result}></button>);
          })}
        </span>
      </div>
    )
  }
}

const mapStateToProps = store => (
  { 
    items: store.items,
    datas: store.datas,
    stock: store.stock,
    listOfSize: store.listOfSize,
    listOfColor: store.listOfColor,
  }
)

export default connect(mapStateToProps, actionCreators)(color)