import React, { Component } from 'react';
import Page from './googleNearBy.html';
var htmlDoc = {__html: Page};

export default class NearBy extends Component {
  constructor(props){
    super(props);
  }

  render(){
     return (<div dangerouslySetInnerHTML={htmlDoc} />)
}}