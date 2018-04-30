import { combineReducers } from 'redux';

import shoesData from '../data/shoes.json'

function datas(state=[], action) {
  switch (action.type) {
    case 'GET_DATA':
      let shoesNewdata = shoesData.sort((a,b) => parseInt(a.size)>parseInt(b.size));
      for (let i =0; i<shoesNewdata.length-1; i++){
        let next = i+1;
        if( shoesNewdata[i].color == shoesNewdata[next].color && shoesNewdata[i].size == shoesNewdata[next].size){
          shoesNewdata[i].stock = shoesNewdata[i].stock + shoesNewdata[next].stock
          shoesNewdata.splice(next,1)
        }
      }
      return shoesNewdata
    default:
      return state
  }
}

function listOfColor(state=[], action) {
  switch (action.type) {
    case 'FILTER_COLOR_FOR_SIZE':
      let color = [];
      let shoeFilterData = action.payload.datas.filter(function(item, index, array){
        return item.size == action.payload.size;
      });
      shoeFilterData.forEach(function(i){ color.push(i.color); })
      return color
    case 'INITIALIZE_COLOR' :
      return ['red','green','navy','orange']    
    default:
      return state
  }
}

function listOfSize(state=[], action) {
  switch (action.type) {
    case 'FILTER_SIZE_FOR_COLOR':
      let size = [];
      let shoeFilterData = action.payload.datas.filter(function(item, index, array){
        return item.color == action.payload.color;
      });
      shoeFilterData.forEach(function(i){ size.push(i.size); })
      return size
    case 'INITIALIZE_SIZE' :
      let shoesCleanData = shoesData.map( item => item.size);
      return Array.from(new Set(shoesCleanData)).sort((a, b) => parseInt(a) > parseInt(b))
    default:
      return state
  }
}

function items(state=[], action) {
  switch (action.type) {
    case 'SET_COLOR': {
        const newItems = [...state];
        newItems[0] = action.payload
        return newItems
      }
    case 'SET_SIZE': {
        const newItems = [...state];
        newItems[1] = action.payload
        return newItems
      }      
    default:
      return state
  }
}

function stock(state=[], action) {
  switch (action.type) {
    case 'SET_STOCK':
      let shoeFilterData = action.payload.datas.filter(function(item, index, array){
        return (item.color == action.payload.color && item.size == action.payload.size);
      });
      return shoeFilterData[0].stock
    default:
      return state
  }
}

function purchaseQuantity(state=[], action){
  switch (action.type) {
    case 'SET_QUANTITY':
      return action.payload.quantity
    default:
      return state
  }
}

const rootReducer = combineReducers({
  items, listOfSize, listOfColor, stock, datas, purchaseQuantity
});

export default rootReducer;
