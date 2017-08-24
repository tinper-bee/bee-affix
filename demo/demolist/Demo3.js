/**
*
* @title horizontal Affix
* @description 被固定时是否可以左右滑动
*
*/

class Demo3 extends Component {
	render () {
		return (
			<div className="outer-box" id="outer-box">
				<label>基本的Affix，`container=tinperBeeDemo horizontal offsetTop=350 `</label>
				<Affix container={document.getElementById('tinperBeeDemo')} horizontal offsetTop={350}>
					<div className='content'>
							<span>affix</span>
					</div>
			  </Affix>
			</div>
		)
	}
}