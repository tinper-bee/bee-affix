/**
*
* @title 基本的Affix
* @description 基本的Affix
*
*/

import React, { Component } from 'react';
import Affix from '../../src';


class Demo1 extends Component {
  render () {
    //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body
    let container = document.getElementById('tinperBeeDemo');
    return (
      <div className="outer-box" id="outer-box">
        <label>基本的Affix zIndex={2001}</label>
        <Affix contaniner={container} zIndex={2001}>
          <div className='content'>
            <span>affix</span>
          </div>
        </Affix>
      </div>
    )
  }
}


export default Demo1;