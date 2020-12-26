import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from "./components/KeyPad";

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: ""
        };
    }

    onClick = button => {
        if (button === "=") {
            this.calculate();
        } else if (button === "C") {
            this.reset();
        } else if (button === "CE") {
            this.backspace()
        } else {
            this.setState({
                result: this.state.result + button
            });
        }
    };
    
    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "") + ""
            });
        } catch (e) {
            this.setState({
                result: "Error"
            });
        }
    };
    
    reset = () => {
        this.setState({
            result: ""
        });
    };
    
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        });
    };
    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Basic Calculator</h1>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;