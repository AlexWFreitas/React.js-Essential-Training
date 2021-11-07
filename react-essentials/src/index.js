import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

// Array Destructuring Example
const [mostImportantItem, secondMostImportantItem, thirdMostImportantItem] = ["boots", "tent", "headlamp"];

console.log(mostImportantItem); // boots
console.log(secondMostImportantItem); // tent
console.log(thirdMostImportantItem); // headlamp

const [, , light] = ["boots", "tent", "headlamp"];

console.log(light); // headlamp

ReactDOM.render(
	<App authorized={false}/>, 
	document.getElementById('root')
);