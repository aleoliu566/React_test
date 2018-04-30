import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import TotalPrice from './total_price';
import shoesData from '../data/shoes.json'


class ItemData extends React.Component {
  constructor(props){
    super(props);
    this.state = { count: 0 }
  }

  setSize(e,callback){
    this.props.setSize({size: e.target.value})
    this.props.changelistOfColor({ size: e.target.value, datas: this.props.datas});
  }

  alert(){
    if(this.props.items.length == 0){
      alert("尚未選擇鞋子的顏色及尺寸");
    } else if (this.props.items[0] == undefined ){
      alert("尚未選擇鞋子的顏色");
    }  else if (this.props.items[1] == undefined ){
      alert("尚未選擇鞋子的尺寸");
    }
  }

  incrementCount(){
    this.alert();
    if(this.props.stock > this.state.count){
      this.setState({
        count: ++this.state.count
      });
    }
    this.props.setPurchaseQuantity({quantity:this.state.count});
  }

  decrementCount(){
    this.alert();
    if(this.state.count > 0){
      this.setState({
        count: --this.state.count
      });
    }
    this.props.setPurchaseQuantity({quantity:this.state.count});
  }

  onInputChange(term){
    if( typeof(this.props.stock) != typeof(1) ){
      this.alert();
      return
    }
    if(term > this.props.stock){
      this.setState({count: this.props.stock});      
    } else if(term > 0) {
      this.setState({count: parseInt(term, 10) });
    } else {
      this.setState({count: 0})
    }
    this.props.setPurchaseQuantity({quantity:this.state.count});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.items[0] && nextProps.items[1]){
      this.props.setStock({color:nextProps.items[0].color, size:nextProps.items[1].size, datas:this.props.datas});
    }
  }

  render () {
    let size = ""
    let stockReminder = ""
    if(this.props.items[1]){
      size = this.props.items[1].size
    }
    if(this.props.stock > 0){
      stockReminder = " ( 還剩"+this.props.stock+"雙 ) ";
    } else {
      stockReminder = "";
    }
    return (
      <div>
        <div className="size-block">
          <span className="left-block">尺寸</span>
          <span className="right-block">
            <select value={size} onChange={this.setSize.bind(this)} className="bg-white w-100">
              <option value="" disabled hidden>請選擇尺寸</option>
              { this.props.listOfSize.map((result, index)=>{
                return (<option key={index}>{result}</option>)
              })}
            </select>
          </span>
        </div>

        <div>
          <span className="left-block">數量</span>
          <button className="counter-block" onClick={this.decrementCount.bind(this)}> - </button>
          <input type="text" value={this.state.count} onChange = { (event) => this.onInputChange(event.target.value) } className="shoes_number" />
          <button className="counter-block" onClick={this.incrementCount.bind(this)}> + </button>
          <span> {stockReminder} </span>
        </div>

        <TotalPrice purchaseQuantity={this.state.count} />
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
    purchaseQuantity: store.purchaseQuantity,
  }
)

export default connect(mapStateToProps, actionCreators)(ItemData)
