
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
					<Affix container={'tinperBeeDemo'}>
						<div className='content'>
								<span>affix</span>
						</div>
				  </Affix>
				</div>
			)
		}
}var DemoArray = [{"example":<Demo1 />,"title":" Affix","code":"/**\n*\n* @title Affix\n* @description 固定\n*\n*/\n\nclass Demo1 extends Component {\n\trender () {\n\t\t\treturn (\n\t\t\t\t<div className=\"outer-box\" id=\"outer-box\">\n\t\t\t\t\t<Affix container={'tinperBeeDemo'}>\n\t\t\t\t\t\t<div className='content'>\n\t\t\t\t\t\t\t\t<span>affix</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t  </Affix>\n\t\t\t\t</div>\n\t\t\t)\n\t\t}\n}","desc":" 固定"}]


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
