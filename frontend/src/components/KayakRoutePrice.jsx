import { useState, useEffect } from 'react'
import axios from '../axios'

const KayakRoutePrice = ({ routeId }) => {
	const [route, setRoute] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (routeId) {
			axios
				.get(`kayak_route/${routeId}/`)
				.then(response => {
					setRoute(response.data)
				})
				.catch(error => {
					console.error('Błąd pobierania trasy:', error)
				})
				.finally(() => setLoading(false))
		}
	}, [routeId])

	if (loading) return <p>Ładowanie danych trasy...</p>
	if (!route) return <p>Nie znaleziono trasy.</p>

	return (
		<div className='kayak-route-price'>
			<p>
				2-osobowy kajak: {route.price_kayak_double} zł, 1-osobowy kajak: {route.price_kayak_single} zł
			</p>
		</div>
	)
}

export default KayakRoutePrice
