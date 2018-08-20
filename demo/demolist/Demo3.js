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
       //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body
        let container = document.getElementsByClassName('page-container u-container example')[0]? document.getElementsByClassName('page-container u-container example')[0] : document.getElementById('tinperBeeDemo');

        return (
          <div className = "outer-box"id = "outer-box" >
            <label > 基本的Affix， `zIndex={2001} horizontal offsetTop=450 ` </label> 
            <Affix container={container} zIndex={2001} horizontal={true} offsetTop = { 450 } >
              <div className = 'content' >
                <span > affix </span>
              </div> 
            </Affix> 
          </div>
        )
    }
}

export default Demo3;