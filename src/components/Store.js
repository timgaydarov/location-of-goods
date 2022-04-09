import React from 'react';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';


const module = 'view_list';
const list = 'view_module';

export default class Store extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			selected: module
		}
	}

	onSwitch = () => this.setState(
		{ selected: this.state.selected === module ? list : module })


	render() {

		return (
			<div className='wrapper'>
				<div className='container'>
					<IconSwitch icon={this.state.selected} onSwitch={this.onSwitch} />
					{this.state.selected === module
						? <ListView items={this.props.products} />
						: <CardsView cards={this.props.products} />
					}
				</div>
			</div>
		)

	}

}

