import React, {Component} from 'react';
class LaunchButton extends Component {

constructor(props) {
	super(props);
	this.state = {term : 0};
	this.onButtonClick = this.onButtonClick.bind(this);
    
}
	render() {
		return( 
			<div>
		<input
		    type="button"
		    onClick = {this.onButtonClick}			
			 value = { this.state.term } >
		</input>
		</div>
			);
	}

	onButtonClick() {
		this.setState({term : this.state.term + 1 });
	}
}

export default LaunchButton;