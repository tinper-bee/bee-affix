
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Affix from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
*
* @title Affix
* @description 固定
*
*/

class Demo1 extends Component {
	render () {
			return (
				<div className="outer-box" id="outer-box">
					<label>基本的Affix，`container=tinperBeeDemo`</label>
					<Affix container={document.getElementById('tinperBeeDemo')}>
						<div className='content'>
								<span>affix</span>
						</div>
				  </Affix>
				</div>
			)
		}
}/**
*
* @title offsetTop Affix
* @description 触发固定的top
*
*/

class Demo2 extends Component {
	render () {
			return (
				<div className="outer-box" id="outer-box">
					<label>基本的Affix，`container=tinperBeeDemo offsetTop=20`</label>
					<Affix container={document.getElementById('tinperBeeDemo')} offsetTop={200}>
						<div className='content'>
								<span>affix</span>
						</div>
				  </Affix>
				</div>
			)
		}
}/**
*
* @title horizontal Affix
* @description 被固定时是否可以左右滑动
*
*/

class Demo3 extends Component {
	render () {
			return (
				<div className="outer-box" id="outer-box">
					<label>基本的Affix，`container=tinperBeeDemo`</label>
					<Affix container={document.getElementById('tinperBeeDemo')} horizontal offsetTop={350}>
						<div className='content'>
								<span>affix</span>
						</div>
				  </Affix>
				</div>
			)
		}
}var DemoArray = [{"example":<Demo1 />,"title":" Affix","code":"/**\n*\n* @title Affix\n* @description 固定\n*\n*/\n\nclass Demo1 extends Component {\n\trender () {\n\t\t\treturn (\n\t\t\t\t<div className=\"outer-box\" id=\"outer-box\">\n\t\t\t\t\t<label>基本的Affix，`container=tinperBeeDemo`</label>\n\t\t\t\t\t<Affix container={document.getElementById('tinperBeeDemo')}>\n\t\t\t\t\t\t<div className='content'>\n\t\t\t\t\t\t\t\t<span>affix</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t  </Affix>\n\t\t\t\t</div>\n\t\t\t)\n\t\t}\n}","desc":" 固定"},{"example":<Demo2 />,"title":" offsetTop Affix","code":"/**\r\n*\r\n* @title offsetTop Affix\r\n* @description 触发固定的top\r\n*\r\n*/\r\n\r\nclass Demo2 extends Component {\r\n\trender () {\r\n\t\t\treturn (\r\n\t\t\t\t<div className=\"outer-box\" id=\"outer-box\">\r\n\t\t\t\t\t<label>基本的Affix，`container=tinperBeeDemo offsetTop=20`</label>\r\n\t\t\t\t\t<Affix container={document.getElementById('tinperBeeDemo')} offsetTop={200}>\r\n\t\t\t\t\t\t<div className='content'>\r\n\t\t\t\t\t\t\t\t<span>affix</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t  </Affix>\r\n\t\t\t\t</div>\r\n\t\t\t)\r\n\t\t}\r\n}","desc":" 触发固定的top"},{"example":<Demo3 />,"title":" horizontal Affix","code":"/**\r\n*\r\n* @title horizontal Affix\r\n* @description 被固定时是否可以左右滑动\r\n*\r\n*/\r\n\r\nclass Demo3 extends Component {\r\n\trender () {\r\n\t\t\treturn (\r\n\t\t\t\t<div className=\"outer-box\" id=\"outer-box\">\r\n\t\t\t\t\t<label>基本的Affix，`container=tinperBeeDemo`</label>\r\n\t\t\t\t\t<Affix container={document.getElementById('tinperBeeDemo')} horizontal offsetTop={350}>\r\n\t\t\t\t\t\t<div className='content'>\r\n\t\t\t\t\t\t\t\t<span>affix</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t  </Affix>\r\n\t\t\t\t</div>\r\n\t\t\t)\r\n\t\t}\r\n}","desc":" 被固定时是否可以左右滑动"}]


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
