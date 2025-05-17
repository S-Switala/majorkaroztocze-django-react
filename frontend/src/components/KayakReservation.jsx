import { useState, useEffect } from 'react'
import axios from '../axios';

const KayakReservation = () => {
	const [routes, setRoutes] = useState([])
	const [selectedRoute, setSelectedRoute] = useState('')
	const [startDate, setStartDate] = useState('')
	const [available, setAvailable] = useState({
		available_kayaks_double: 0,
		available_kayaks_single: 0,
		available_bags: 0,
	})
	const [prices, setPrices] = useState({})
	const [kayakDouble, setKayakDouble] = useState('')
	const [extraChild, setExtraChild] = useState('')
	const [kayakSingle, setKayakSingle] = useState('')
	const [bags, setBags] = useState('')
	const [totalPrice, setTotalPrice] = useState(0)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [email, setEmail] = useState('')
	const [userName, setUserName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [startTime, setStartTime] = useState('')

	// Pobieranie cen i tras po załadowaniu strony
	useEffect(() => {
		axios
			.get('prices/')
			.then(response => setPrices(response.data))
			.catch(error => console.error('Błąd pobierania cen:', error))
	}, [])

	// Pobieranie dostępnych kajaków po wybraniu daty
	useEffect(() => {
		if (startDate) {
			axios
				.get(`kayak_availability/?start_date=${startDate}`)
				.then(response => setAvailable(response.data))
				.catch(error => console.error('Błąd pobierania dostępnych kajaków:', error))
		}
	}, [startDate])

	// Obliczanie łącznej ceny
	useEffect(() => {
		if (prices.routes && selectedRoute) {
			const route = prices.routes.find(route => route.id === parseInt(selectedRoute))
			const priceDouble = route ? route.price_kayak_double : 0
			const priceSingle = route ? route.price_kayak_single : 0
			const total =
				(parseInt(kayakDouble) || 0) * priceDouble +
				(parseInt(extraChild) || 0) * prices.extra_child +
				(parseInt(kayakSingle) || 0) * priceSingle +
				(parseInt(bags) || 0) * prices.waterproof_bag

			setTotalPrice(total)
		}
	}, [kayakDouble, extraChild, kayakSingle, bags, selectedRoute, prices])

	// Obsługa zmiany wartości w polach
	const handleInputChange = (value, setter, maxValue) => {
		if (value === '') {
			setter('') // Pozwala na całkowite usunięcie wartości
		} else {
			setter(Math.max(0, Math.min(parseInt(value) || 0, maxValue))) // Zapewnia wartości w zakresie
		}
	}

	// Walidacja przy opuszczeniu pola (onBlur) – jeśli puste, ustaw 0
	const validateInput = (value, setter) => {
		if (value === '') {
			setter(0)
		}
	}

	// Obsługa wysyłania rezerwacji
	const handleReservationSubmit = e => {
		e.preventDefault()
		setIsSubmitting(true)

		const reservationData = {
			user_name: userName,
			phone_number: phoneNumber,
			email: email,
			start_date: startDate,
			start_time: startTime,
			kayak_route: selectedRoute,
			kayak_double_quantity: parseInt(kayakDouble) || 0,
			kayak_extra_child_quantity: parseInt(extraChild) || 0,
			kayak_single_quantity: parseInt(kayakSingle) || 0,
			waterproof_bag_quantity: parseInt(bags) || 0,
		}

		axios
			.post('kayak_reservations/', reservationData)
			.then(response => {
				alert('Rezerwacja została zapisana! zajrzyj do skrzynki pocztowej!')
				setStartDate('')
				setSelectedRoute('')
				setKayakDouble('')
				setExtraChild('')
				setKayakSingle('')
				setBags('')
				setTotalPrice(0)
				setEmail('')
				setUserName('')
				setPhoneNumber('')
				setStartTime('')
			})
			.catch(error => {
				console.error('Błąd wysyłania rezerwacji:', error.response?.data)
				alert('Wystąpił błąd podczas rezerwacji. Spróbuj ponownie.')
			})
			.finally(() => setIsSubmitting(false))
	}

	return (
		<div className='wrapper'>
			<form className='reservation-form' onSubmit={handleReservationSubmit}>
				<h2 className='h2'>Rezerwacja spływów kajakowych</h2>

				<label className='form-label'>Wybierz datę spływu:</label>
				<input
					type='date'
					className='form-input'
					value={startDate}
					onChange={e => setStartDate(e.target.value)}
					required
				/>

				{startDate && prices.routes && prices.routes.length > 0 ? (
					<>
						<label className='form-label'>Godzina rozpoczęcia spływu:</label>
						<input
							type='time'
							className='form-input'
							value={startTime}
							onChange={e => setStartTime(e.target.value)}
							required
						/>

						<label className='form-label'>Imię i nazwisko:</label>
						<input
							type='text'
							className='form-input'
							value={userName}
							onChange={e => setUserName(e.target.value)}
							required
						/>

						<label className='form-label'>Numer telefonu:</label>
						<input
							type='tel'
							className='form-input'
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
							required
						/>

						<label className='form-label'>Adres e-mail:</label>
						<input
							type='email'
							className='form-input'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>

						<label className='form-label'>Wybierz trasę:</label>
						<select
							className='form-select'
							value={selectedRoute}
							onChange={e => setSelectedRoute(e.target.value)}
							required>
							<option value=''>Wybierz trasę</option>
							{prices.routes.map(route => (
								<option key={route.id} value={route.id}>
									{route.name} - 2-os: {route.price_kayak_double} PLN, 1-os: {route.price_kayak_single} PLN
								</option>
							))}
						</select>
					</>
				) : startDate ? (
					<p className='loading-text'>Ładowanie tras...</p>
				) : null}

				{selectedRoute && (
					<>
						<label className='form-label'>
							Ilość kajaków 2-osobowych (dostępne: {available.available_kayaks_double})
						</label>
						<input
							type='number'
							className='form-input'
							value={kayakDouble}
							onChange={e => handleInputChange(e.target.value, setKayakDouble, available.available_kayaks_double)}
							onBlur={() => validateInput(kayakDouble, setKayakDouble)}
						/>

						<label className='form-label'>Dostawki dla dzieci (max {kayakDouble}):</label>
						<input
							type='number'
							className='form-input'
							value={extraChild}
							onChange={e => handleInputChange(e.target.value, setExtraChild, kayakDouble)}
							onBlur={() => validateInput(extraChild, setExtraChild)}
						/>

						<label className='form-label'>
							Ilość kajaków 1-osobowych (dostępne: {available.available_kayaks_single})
						</label>
						<input
							type='number'
							className='form-input'
							value={kayakSingle}
							onChange={e => handleInputChange(e.target.value, setKayakSingle, available.available_kayaks_single)}
							onBlur={() => validateInput(kayakSingle, setKayakSingle)}
						/>

						<label className='form-label'>Worki wodoszczelne:</label>
						<input
							type='number'
							className='form-input'
							value={bags}
							onChange={e => handleInputChange(e.target.value, setBags, available.available_bags)}
							onBlur={() => validateInput(bags, setBags)}
						/>

						<h3 className='total-price'>Łączna cena: {totalPrice} PLN</h3>
						<button
							type='submit'
							className='submit-btn'
							disabled={isSubmitting || (kayakDouble === 0 && kayakSingle === 0)}>
							{isSubmitting ? 'Rezerwuję...' : 'Zarezerwuj'}
						</button>
					</>
				)}
			</form>
		</div>
	)
}

export default KayakReservation
