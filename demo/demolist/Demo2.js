/**
*
* @title offsetTop Affix
* @description 触发固定的top
*
*/

import React, { Component } from 'react';
import Affix from '../../src';

class Demo2 extends Component {
  render () {
    return (
      <div className="outer-box" id="outer-box">
        <label>基本的Affix，`offsetTop=200`</label>
        <Affix offsetTop={200}>
          <div className='content'>
            <span>affix</span>
          </div>
        </Affix>
      </div>
    )
  }
}


export default Demo2;