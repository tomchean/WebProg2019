import React from 'react';

import CalcButton from '../components/CalcButton';

class CalcApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show : 0
		};

		this.calType = 0; //+:1, -:2, x:3, ÷:4
		this.afterEqual = 0; //After equal:1, normal:0

		this.preAns = 0;
		this.temp = 0;
	}

	resetState = () => {
		this.calType = 0;
		this.afterEqual = 0;

		this.preAns = 0;
		this.temp = 0;

		this.setState(() => ({show : 0}));
	}
	/*
	resetState(){
		this.setState({
			show : 0			
		});
	}*/

	typeNum = (e) => {
		if(this.afterEqual === 1){
			this.calType = 0;
			this.afterEqual = 0;
			this.temp = 0;
			this.preAns = 0;
		}
		let num = parseInt(e.target.innerHTML);
		// Handle big num
		if ((this.temp*10+num).toString().length < 8){
			this.temp = this.temp*10+num;
		}
		this.setState((state) => ({ show : this.temp }));
	}

	equal = () => {
		this.calCurrent();
		this.afterEqual = 1;
	}

	add = () => {
		if(this.afterEqual === 1){
			this.afterEqual = 0;
			this.temp = 0;
			this.calType = 0;
		}
		this.calCurrent();
		this.temp = 0;
		this.calType = 1;
	}
	sub = () => {
		if(this.afterEqual === 1){
			this.afterEqual = 0;
			this.temp = 0;
			this.calType = 0;
		}
		this.calCurrent();
		this.temp = 0;
		this.calType = 2;
	}
	mul = () => {
		if(this.afterEqual === 1){
			this.afterEqual = 0;
			this.temp = 0;
			this.calType = 0;
		}
		this.calCurrent();
		this.temp = 0;
		this.calType = 3;
	}
	div = () => {
		if(this.afterEqual === 1){
			this.afterEqual = 0;
			this.temp = 0;
			this.calType = 0;
		}
		this.calCurrent();
		this.temp = 0;
		this.calType = 4;

	}

	calCurrent = () => {
		let ans = 0;
		switch(this.calType){
			case 1:
				ans = this.preAns+this.temp;
				break;
			case 2:
				ans = this.preAns-this.temp;
				break;
			case 3:
				ans = this.preAns*this.temp;
				break;
			case 4:
				// handle mother=0
				if(this.temp ===0){
					this.resetState();
					this.setState((state) => ({ show : "Error" }));
					return 0;
				}
				ans = this.preAns/this.temp;
				break;
			default:
				ans = this.preAns+this.temp;
		}

		if (ans.toString().length > 7){
			let integer = ans.toString().split(".")[0];
			if(integer.length === ans.toString().length){
				this.resetState();
				this.setState((state) => ({ show : "Too big" }));
				return 0;
			}
			ans = ans.toFixed(6-ans.toString().split(".")[0].length);
		}

		this.preAns = ans;
		this.setState((state) => ({ show : ans }));
	}
	


	showNotImplemented() {
		console.warn('This function is not implemented yet.');
	}

	render() {
		return (
		<div className="calc-app">
			<div className="calc-container">
				<div className="calc-output">
					<div className="calc-display">{this.state.show}</div>
				</div>
				<div className="calc-row">
					<CalcButton onClick={this.resetState}>AC</CalcButton>
					<CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
					<CalcButton onClick={this.showNotImplemented}>%</CalcButton>
					<CalcButton className="calc-operator" onClick={this.div}>÷</CalcButton>
				</div>
				<div className="calc-row">
					<CalcButton className="calc-number" onClick={(e)=>this.typeNum(e)}>7</CalcButton>
					<CalcButton className="calc-number" onClick={(e)=>this.typeNum(e)}>8</CalcButton>
					<CalcButton className="calc-number" onClick={(e)=>this.typeNum(e)}>9</CalcButton>
					<CalcButton className="calc-operator" onClick={this.mul}>x</CalcButton>
				</div>
				<div className="calc-row">
					<CalcButton className="calc-number" onClick={(e)=>this.typeNum(e)}>4</CalcButton>
					<CalcButton className="calc-number" onClick={(e)=>this.typeNum(e)}>5</CalcButton>
					<CalcButton className="calc-number" onClick={(e)=>this.typeNum(e)}>6</CalcButton>
					<CalcButton className="calc-operator" onClick={this.sub}>-</CalcButton>
				</div>
				<div className="calc-row">
					<CalcButton className="calc-number" onClick={(e)=>this.typeNum(e)}>1</CalcButton>
					<CalcButton className="calc-number" onClick={(e)=>this.typeNum(e)}>2</CalcButton>
					<CalcButton className="calc-number" onClick={(e)=>this.typeNum(e)}>3</CalcButton>
					<CalcButton className="calc-operator" onClick={this.add}>+</CalcButton>
				</div>
				<div className="calc-row">
					<CalcButton className="calc-number bigger-btn" onClick={(e)=>this.typeNum(e)}>0</CalcButton>
					<CalcButton className="calc-number" onClick={this.showNotImplemented} >.</CalcButton>
					<CalcButton className="calc-operator" onClick={this.equal}>=</CalcButton>
				</div>
			</div>
		</div>
		);
	}
}

export default CalcApp;
