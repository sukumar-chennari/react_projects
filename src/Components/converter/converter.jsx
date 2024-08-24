// const Converter= ()=>{
//     const ftoc = (fahrenheitValue) => {
//         const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
//         setCelsius(celsiusValue.toFixed(2));
//     };

//     const ctof = (celsiusValue) => {
//         const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
//         setFahrenheit(fahrenheitValue.toFixed(2));
//     };
//     const calculateCelsius=(e)=>{
//         const value= e.target.value
//         ctof(parseFloat(value))
//     }

//     return (
//         <>
//         <input type="text"  placeholder="celsius" onChange={calculateCelsius}/>
//         <input type="text"  placeholder="farenheit"/>
//         </>
//     )
// }
import { Component } from "react";

class Converter extends Component {
    state = {
        celsius: '',
        fahrenheit: ''
    };

    // Convert Fahrenheit to Celsius
    ftoc = (fahrenheitValue) => {
        const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
        this.setState({
            celsius: celsiusValue.toFixed(2)
        });
    };

    // Convert Celsius to Fahrenheit
    ctof = (celsiusValue) => {
        const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
        this.setState({
            fahrenheit: fahrenheitValue.toFixed(2)
        });
    };

    // Handle Celsius input change
    handleCelsiusChange = (e) => {
        const value = e.target.value;
        this.setState({ celsius: value });
        if (value !== '') {
            this.ctof(parseFloat(value));
        } else {
            this.setState({ fahrenheit: '' });
        }
    };

    // Handle Fahrenheit input change
    handleFahrenheitChange = (e) => {
        const value = e.target.value;
        this.setState({ fahrenheit: value });
        if (value !== '') {
            this.ftoc(parseFloat(value));
        } else {
            this.setState({ celsius: '' });
        }
    };

    render() {
        return (
            <>
                <input
                    type="text"
                    placeholder="Celsius"
                    value={this.state.celsius}
                    onChange={this.handleCelsiusChange}
                />
                <input
                    type="text"
                    placeholder="Fahrenheit"
                    value={this.state.fahrenheit}
                    onChange={this.handleFahrenheitChange}
                />
            </>
        );
    }
}

export { Converter };


