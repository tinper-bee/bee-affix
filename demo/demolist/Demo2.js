/**
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
}