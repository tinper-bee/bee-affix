/**
 *
 * @title horizontal Affix
 * @description 被固定时是否可以左右滑动
 *
 */


import React, { Component } from 'react';
import Affix from '../../src';

class Demo3 extends Component {
    render() {
        return (
          <div className = "outer-box"id = "outer-box" >
            <label > 基本的Affix， `container=tinperBeeDemo horizontal offsetTop=450 ` </label> 
            <Affix horizontal offsetTop = { 350 } >
              <div className = 'content' >
                <span > affix </span>
              </div> 
            </Affix> 
          </div>
        )
    }
}

export default Demo3;