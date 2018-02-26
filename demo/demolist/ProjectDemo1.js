/**
*
* @title 项目中的bugdemo
* @description 项目中的bugdemo
*
*/

import React, { Component } from 'react';
import Affix from '../../src';

class Demo1 extends Component {
  render () {
      let CONFIG = ['申请消息','其他消息','最好的消息']
      let chooseIndex = 1;
    return (
      <div className="outer-box" id="outer-box">
        <label>基本的Affix</label>
        <div className="vertical-tab">
        </div>
        <Affix>
          <h3 className="financeApp-title">
            <span className="financeApp-title-item title">贷款申请</span>
            <ul className="financeApp-tab cf">
                {CONFIG.map((item,index)=>{
                    return (<li key={index} className={index == chooseIndex?'active':''}>{item}</li>)
                })}
                <li className="scrollBar tabs-nav-animated" ref="navBar"></li>
            </ul>
            <div className="financeApp-title-item">
              dsdds
            </div>
          </h3>
        </Affix>
        <div className="content-ss">
          <div className="content-ss-item">
                  <label htmlFor="" className="name">手机号</label>
                  <input className="info"/>
            </div>
            <div className="content-ss-item">
                  <label htmlFor="" className="name">手机号2</label>
                  <input className="info"/>
            </div>
       </div>
      </div>
    )
  }
}


export default Demo1;