import './css/App.css';
import Store from './components/Store';



function App(props) {
	return (
		<Store products={props.products} />
	);
}

export default App;
