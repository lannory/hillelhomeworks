import { Component } from "react";
import './smile.css';


export default class Smile extends Component {

	state = {
		counter: 0
	}

	handleClick = () =>{
		const {onIncrease} = this.props; 
		const {id} = this.props;

		onIncrease(id);
		this.setState((state) =>  ({counter: state.counter+1}))
	}
	
	render(){
		const {number} = this.props;
		const {isWinner} = this.props;
		const {votes} = this.props;


		return (
		<div>
			<img src={"../img/" + number + ".png"}  alt="" />
			<h2>{isWinner === false ? this.state.counter : 'Count of votes ' + votes}</h2>
			{isWinner === false ? <button onClick={this.handleClick}>Vote</button> : ''}
		</div>)
	}
}