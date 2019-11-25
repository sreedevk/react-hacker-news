import React, { Component } from 'react';
import { PIXABAYCONFIG as PXCONFIG } from '../../constants.js';

export default class PixabayImage extends Component {
  state = {}
  async getSource() {
    const response = await fetch(PXCONFIG['url']+'?key='+PXCONFIG['key']+'&q='+this.searchAttr()+'&image_type=photo');
    const parsedResponse = await response.json();
    this.setState({ imageUrl: ((parsedResponse.hits[0] || {}).webformatURL) });
    console.log(this.searchAttr())
    console.log(this.state.imageUrl)
  }

  searchAttr(){
    const words = this.props.title.split(" ", 3);
    return words.slice(-1)[0];
  }

  async componentDidMount(){
    this.getSource();
  }

  render(){
    if(this.state.imageUrl) {
      return(
        <img src={ this.state.imageUrl } height={this.props.height} width={this.props.width} alt="newsImage" className="pixaBayImage"/>
      )
    } else {
      return null;
    }
  } 
}
