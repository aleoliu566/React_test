import React from 'react';
import ReactDom from 'react-dom';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'


class picture extends React.Component {
  constructor(props){
    super(props);
    this.picture_url = {
      "navy"  :"https://s.yimg.com/ut/api/res/1.2/_kjGvYwxyKj.Oh2WU0f3yQ--~B/YXBwaWQ9eXR3bWFsbDtjYz0zMTUzNjAwMDtoPTYwMDtxPTgxO3c9NjAw/http://imgcld.zenfs.com:80/ps_image_prod/item/p0892136624164-item-8509xf3x1200x1200-m.jpg",
      "green" :"https://s.yimg.com/ut/api/res/1.2/tCFTwq5aRWYkq1A7r0Z8jQ--~B/YXBwaWQ9eXR3bWFsbDtjYz0zMTUzNjAwMDtoPTYwMDtxPTgxO3c9NjAw/http://imgcld.zenfs.com:80/ps_image_prod/item/p0892117493376-item-4050xf3x1400x1400-m.jpg",
      "red"   :"https://fns.modanisa.com/r/pro2/2017/06/09/z-adidas-stan-smith-ayakkabi--beyaz-pembe--adidas-307180-3.jpg",
      "orange":"https://cdn5.kicksonfire.com/wp-content/uploads/2015/09/Adidas-Originals-Stan-Smith-White-Bright-Orange-041-565x372.jpg?x76107"
    };
  }

  render() {
    let color = this.props.items[0] ? this.props.items[0].color : this.props.listOfColor[0]

    const style = {
      picture: {
        backgroundImage: 'url(' + this.picture_url[color] + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingBottom: '100%',
        marginTop: '20px',
        border: '1px solid lightgrey',
      },
      shoesTitle: {
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    }
    return (
      <div>
        <div style={style.picture}></div>
        <p style={style.shoesTitle}>Adidas Stan Smith 休閒鞋( {color} )</p>
      </div>
    );    
  };
};

const mapStateToProps = store => (
  { 
    items: store.items,
    datas: store.datas,
    stock: store.stock,
    listOfSize: store.listOfSize,
    listOfColor: store.listOfColor,
  }
)

export default connect(mapStateToProps, actionCreators)(picture)

