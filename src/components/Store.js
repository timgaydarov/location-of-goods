import React from 'react';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';

const ICON_NAMES = {
	module: 'view_module',
	list: 'view_list'
}

export default class Store extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			selected: ICON_NAMES.list
		}
	}

	onSwitch = () => this.setState(
		{ selected: this.state.selected === ICON_NAMES.module ? ICON_NAMES.list : ICON_NAMES.module })

		
	render() {
		return (
			<div className='wrapper'>
				<div className='container'>
					<IconSwitch icon={this.state.selected} onSwitch={this.onSwitch} />
					{this.state.selected === ICON_NAMES.module
						? <CardsView cards={this.props.products} />
						: <ListView items={this.props.products} />
					}
				</div>
			</div>
		)
	}

}

