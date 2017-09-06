
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Affix from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基本的Affix","code":"/**\n*\n* @title 基本的Affix\n* @description 基本的Affix\n*\n*/\n\nimport React, { Component } from 'react';\nimport Affix from 'bee-affix';\n\nclass Demo1 extends Component {\n  render () {\n    return (\n      <div className=\"outer-box\" id=\"outer-box\">\n        <label>基本的Affix，`container=tinperBeeDemo`</label>\n        <Affix container={document.getElementById('tinperBeeDemo')}>\n          <div className='content'>\n            <span>affix</span>\n          </div>\n        </Affix>\n      </div>\n    )\n  }\n}\n\n\n","desc":" 基本的Affix"},{"example":<Demo2 />,"title":" offsetTop Affix","code":"/**\n*\n* @title offsetTop Affix\n* @description 触发固定的top\n*\n*/\n\nimport React, { Component } from 'react';\nimport Affix from 'bee-affix';\n\nclass Demo2 extends Component {\n  render () {\n    return (\n      <div className=\"outer-box\" id=\"outer-box\">\n        <label>基本的Affix，`container=tinperBeeDemo offsetTop=200`</label>\n        <Affix container={document.getElementById('tinperBeeDemo')} offsetTop={200}>\n          <div className='content'>\n            <span>affix</span>\n          </div>\n        </Affix>\n      </div>\n    )\n  }\n}\n\n\n","desc":" 触发固定的top"},{"example":<Demo3 />,"title":" horizontal Affix","code":"/**\n *\n * @title horizontal Affix\n * @description 被固定时是否可以左右滑动\n *\n */\n\n\nimport React, { Component } from 'react';\nimport Affix from 'bee-affix';\n\nclass Demo3 extends Component {\n    render() {\n        return (\n          <div className = \"outer-box\"id = \"outer-box\" >\n            <label > 基本的Affix， `container=tinperBeeDemo horizontal offsetTop=350 ` </label> \n            <Affix container = { document.getElementById('tinperBeeDemo') }horizontal offsetTop = { 350 } >\n              <div className = 'content' >\n                <span > affix </span>\n              </div> \n            </Affix> \n          </div>\n        )\n    }\n}\n\n","desc":" 被固定时是否可以左右滑动"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
