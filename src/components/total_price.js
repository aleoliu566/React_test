import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'


class totalPrice extends React.Component {
  constructor(props){
    super(props);
  }

  finish(){
    if(this.props.items.length == 0){
      alert("尚未選擇顏色及尺寸");
    } else if (this.props.items[0] == undefined ){
      alert("尚未選擇顏色");
    }  else if (this.props.items[1] == undefined ){
      alert("尚未選擇尺寸");
    } else if (this.props.purchaseQuantity <1 ){
      alert("尚未選擇購買數量");
    } else {
      alert(`您購買了${this.props.purchaseQuantity}雙 US${this.props.items[1].size}的${this.props.items[0].color} Adidas Stan Smith休閒鞋`)
    }
  }

  render() {
    const style = {
      totalPriceBlock: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        padding: '10px 8px',
        margin: '0 4px',
        borderTop: '1px solid lightgrey',
        backgroundColor: 'lightblue',
        width: 'calc( 100% - 8px )',
      },
      totalPrice: {
        display: 'inline-block',
        lineHeight: '30px',
      },
      payText: {
        float: 'right',
        color: 'blue',
        height: '30px',
      },
    }
    return (
      <div style={style.totalPriceBlock}>
        <span style={style.totalPrice}>總金額：{this.props.purchaseQuantity*2700}</span>
        <button style={style.payText} onClick={this.finish.bind(this)}>結帳去</button>
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

export default connect(mapStateToProps, actionCreators)(totalPrice)