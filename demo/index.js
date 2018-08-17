import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基本的Affix","code":"/**\n*\n* @title 基本的Affix\n* @description 基本的Affix\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Affix } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n  render () {\n    //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body\n    let container = document.getElementById('tinperBeeDemo');\n    return (\n      <div className=\"outer-box\" id=\"outer-box\">\n        <label>基本的Affix zIndex={2001}</label>\n        <Affix contaniner={container} zIndex={2001}>\n          <div className='content'>\n            <span>affix</span>\n          </div>\n        </Affix>\n      </div>\n    )\n  }\n}\n\n\n","desc":" 基本的Affix","scss_code":".content {\n  width: 150px;\n  height: 100px;\n  background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  line-height: 100px;\n}"},{"example":<Demo2 />,"title":" offsetTop Affix","code":"/**\n*\n* @title offsetTop Affix\n* @description 触发固定的top\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Affix } from 'tinper-bee';\n\nclass Demo2 extends Component {\n  render () {\n    //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body\n    let container = document.getElementById('tinperBeeDemo');\n    return (\n      <div className=\"outer-box\" id=\"outer-box\">\n        <label>基本的Affix，`zIndex={2001} offsetTop=200`</label>\n        <Affix container={container} zIndex={2001} offsetTop={200}>\n          <div className='content'>\n            <span>affix</span>\n          </div>\n        </Affix>\n      </div>\n    )\n  }\n}\n\n\n","desc":" 触发固定的top","scss_code":".content {\n    width: 150px;\n    height: 100px;\n    background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n    font-size: 20px;\n    color: #fff;\n    text-align: center;\n    line-height: 100px;\n  }"},{"example":<Demo3 />,"title":" horizontal Affix","code":"/**\n *\n * @title horizontal Affix\n * @description 被固定时是否可以左右滑动\n *\n */\n\n\nimport React, { Component } from 'react';\nimport { Affix } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    render() {\n       //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body\n        let container = document.getElementById('tinperBeeDemo');\n        return (\n          <div className = \"outer-box\"id = \"outer-box\" >\n            <label > 基本的Affix， `zIndex={2001} horizontal offsetTop=450 ` </label> \n            <Affix container={container} zIndex={2001} horizontal={true} offsetTop = { 450 } >\n              <div className = 'content' >\n                <span > affix </span>\n              </div> \n            </Affix> \n          </div>\n        )\n    }\n}\n\n","desc":" 被固定时是否可以左右滑动","scss_code":".content {\n    width: 150px;\n    height: 100px;\n    background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n    font-size: 20px;\n    color: #fff;\n    text-align: center;\n    line-height: 100px;\n  }"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
            {example}
            <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
        { caret }
        { text }
    </Button>
        </div>
    );
        return (
            <Col md={12} >
            <h3>{ title }</h3>
            <p>{ desc }</p>
            <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
    <pre><code className="hljs javascript">{ code }</code></pre>
        { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                    <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
            )

            })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
