import React, {Component} from 'react';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import Home from './containers/home/container'

class App extends Component {
	render() {
		return (
			<div className="App container-sm">
				<main className="main-content">
					<Home/>
				</main>
			</div>
		);
  }
}

export default App;
