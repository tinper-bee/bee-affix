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
    return (
      <div className="outer-box" id="outer-box">
        <label>基本的Affix</label>
        <Affix>
          <div className='content'>
            <span>affix</span>
          </div>
        </Affix>
      </div>
    )
  }
}


export default Demo1;