import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'

import store from './redux/redux-store'
import { Provider } from 'react-redux'


const renderEntireTree = (store) => {
	ReactDOM.render(	
		<HashRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>,
		document.getElementById('root')
	)
}

renderEntireTree(store)

store.subscribe(() => {
	renderEntireTree(store)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
