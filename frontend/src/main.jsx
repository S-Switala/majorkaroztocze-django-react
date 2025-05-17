import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Router>
		<React.StrictMode>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</React.StrictMode>
	</Router>
)
