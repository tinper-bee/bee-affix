
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Affix from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var ProjectDemo1 = require("./demolist/ProjectDemo1");var DemoArray = [{"example":<ProjectDemo1 />,"title":" 项目中的bugdemo","code":"/**\n*\n* @title 项目中的bugdemo\n* @description 项目中的bugdemo\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Affix } from 'tinper-bee';\n\nclass Demo1 extends Component {\n  render () {\n      let CONFIG = ['申请消息','其他消息','最好的消息']\n      let chooseIndex = 1;\n    return (\n      <div className=\"outer-box\" id=\"outer-box\">\n        <label>基本的Affix</label>\n        <div className=\"vertical-tab\">\n        </div>\n        <Affix>\n          <h3 className=\"financeApp-title\">\n            <span className=\"financeApp-title-item title\">贷款申请</span>\n            <ul className=\"financeApp-tab cf\">\n                {CONFIG.map((item,index)=>{\n                    return (<li key={index} className={index == chooseIndex?'active':''}>{item}</li>)\n                })}\n                <li className=\"scrollBar tabs-nav-animated\" ref=\"navBar\"></li>\n            </ul>\n            <div className=\"financeApp-title-item\">\n              dsdds\n            </div>\n          </h3>\n        </Affix>\n      </div>\n    )\n  }\n}\n\n\n","desc":" 项目中的bugdemo"}]


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
