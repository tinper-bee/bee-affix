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
      <div className="outer-box" id="outer-box" style={{ width: '100%', height: '500px' }}>
        {/* <label>基本的Affix</label> */}
        <Affix>
          <div className='content' style={{ width: 'auto', height: '50px', backgroundColor: 'red' }}>
            <span>affix</span>
          </div>
        </Affix>
      </div>
    )
  }
}


export default Demo1;