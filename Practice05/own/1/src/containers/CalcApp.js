import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : "0",
      status : 0,
      result : 0,
      prev_mode:-1
    };
  }

  resetState() {
    this.setState( state => ({
      count: "0",
      status : 0,
      result : 0,
      prev_mode:-1
      }));
  }

  Press_btn(num){
    if(this.state.status ===0 && num !== 0){
      this.setState( state => ({
      count: String(num) ,
      status : 1
      }));
    }
    else if(this.state.status ===1){
      this.setState( state => ({
        count: state.count +String(num)
        }));
    }
    
  } 

  Press_Alg(mode){
    
    if(this.state.prev_mode !== -1 && this.state.status !==0){
      if(this.state.prev_mode ===0){
        this.setState( state => ({
          count: state.result / parseInt(state.count),
          result: state.result / parseInt(state.count),
          prev_mode:mode,
          status:0
          }));
      }
      if(this.state.prev_mode ===1){
        this.setState( state => ({
          count: state.result * parseInt(state.count),
          result: state.result * parseInt(state.count),
          prev_mode:mode,
          status:0
          }));
      }
      if(this.state.prev_mode ===2){
        this.setState( state => ({
          count: state.result - parseInt(state.count),
          result: state.result - parseInt(state.count),
          prev_mode:mode,
          status:0
          }));
      }
      if(this.state.prev_mode ===3){
        this.setState( state => ({
          count: state.result + parseInt(state.count),
          result: state.result + parseInt(state.count),
          prev_mode:mode,
          status:0
          }));
      }
    }
    else{
      this.setState( state => ({
        prev_mode : mode,
        status:0,
        result:parseInt(state.count)
        }));
    }
  }

  showNotImplemented() {
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.count}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator"onClick={this.Press_Alg.bind(this,0)}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={ this.Press_btn.bind(this,7)}>7</CalcButton>
            <CalcButton className="calc-number" onClick={ this.Press_btn.bind(this,8)}>8</CalcButton>
            <CalcButton className="calc-number" onClick={ this.Press_btn.bind(this,9)}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.Press_Alg.bind(this,1)}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={ this.Press_btn.bind(this,4)}>4</CalcButton>
            <CalcButton className="calc-number" onClick={ this.Press_btn.bind(this,5)}>5</CalcButton>
            <CalcButton className="calc-number" onClick={ this.Press_btn.bind(this,6)}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.Press_Alg.bind(this,2)}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={ this.Press_btn.bind(this,1)}>1</CalcButton>
            <CalcButton className="calc-number" onClick={ this.Press_btn.bind(this,2)}>2</CalcButton>
            <CalcButton className="calc-number" onClick={ this.Press_btn.bind(this,3)}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.Press_Alg.bind(this,3)}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={ this.Press_btn.bind(this,0)}>0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.Press_Alg.bind(this,-1)}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
