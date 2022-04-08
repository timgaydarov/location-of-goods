import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/Store.css'
import './css/IconSwitch.css'
import './css/ListView.css'
import './css/CardsView.css'

import App from './App';


const icons = [
	{ name: 'view_list', key: 1 },
	{ name: 'view_module', key: 2 }
]

const products = [{
	name: "Nike Metcon 2",
	price: "130",
	color: "red",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
	name: "Nike Metcon 2",
	price: "130",
	color: "green",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
	name: "Nike Metcon 2",
	price: "130",
	color: "blue",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
	name: "Nike Metcon 2",
	price: "130",
	color: "black",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
	name: "Nike free run",
	price: "170",
	color: "black",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
	name: "Nike Metcon 3",
	price: "150",
	color: "green",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

ReactDOM.render(
	<React.StrictMode>
		<App icons={icons} products={products} />
	</React.StrictMode>,
	document.getElementById('root')
);


