import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cloudy from './cloudy.png';
import Rainy from './rainy.png';
import Snow from './snow.png';
import Sunny from './sunny.png';
import Other from './other.png';

// //Write your components here!
class Weather extends React.Component {
    render() {
        let image;
        if (this.props.conditions.toLowerCase() === "cloudy") {
            image = Cloudy;
        } else if (this.props.conditions.toLowerCase() === "rainy") {
            image = Rainy;
        } else if (this.props.conditions.toLowerCase() === "snow") {
            image = Snow;
        } else if (this.props.conditions.toLowerCase() === "sunny") {
            image = Sunny;
        } else {
            image = Other;
        }
        return (
            <div>
                <h1>{this.props.day}</h1>
                <img src = {image} height = {200} width = {200}/>
                <h2>Temperature: {this.props.temp} degrees fahrenheit</h2>
            </div>
        ); 
    }
}

// class WeekForecast extends React.Component {
//     render() {
//         let imageArray = [];
//         let responseArray = [];
//         let final;
//         for (let i = 0; i < this.props.day.length; i++) {
//             if (this.props.conditions[i].toLowerCase() === "cloudy") {
//                 imageArray[i] = Cloudy;
//             } else if (this.props.conditions[i].toLowerCase() === "rainy") {
//                 imageArray[i] = Rainy;
//             } else if (this.props.conditions[i].toLowerCase() === "snow") {
//                 imageArray[i] = Snow;
//             } else if (this.props.conditions[i].toLowerCase() === "sunny") {
//                 imageArray[i] = Sunny;
//             } else {
//                 imageArray[i] = Other;
//             }
//         }
        
//         for (let i = 0; i < this.props.day.length; i++) {
//             final = (
//                 <div>
//                     <h1>{this.props.day[i]}</h1>
//                     <img src = {imageArray[i]} height = {200} width = {200}/>
//                     <h2>Temperature: {this.props.temp[i]} degrees fahrenheit</h2>
//                 </div>
//             );
//             responseArray.push(final);
//         }
        
//         return responseArray; 
//     }
// }


ReactDOM.render(<Weather day = "Monday" temp = "77" conditions = "snow" />, document.getElementById('root'));
// ReactDOM.render(<WeekForecast day = {["Monday", "Tuesday", "Wednesday"]} 
// temp = {["79", "89", "90"]} conditions = {["cloudy", "sunny", "rainy"]}/>, document.getElementById('root'));
