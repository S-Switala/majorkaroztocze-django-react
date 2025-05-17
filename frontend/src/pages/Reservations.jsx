import Footer from '../components/footer'
import KayakReservation from '../components/KayakReservation'
import CabinReservation from '../components/CabinReservation'
import CampingReservation from '../components/CampingReservation'
import { Helmet } from 'react-helmet-async'

const Reservations = () => {
	return (
		<>
			<Helmet>
				<title>Rezerwacja online – Kajaki, Noclegi, Pole namiotowe | Majorka Roztocze</title>
				<meta
					name='description'
					content='Zarezerwuj online spływ kajakowy, domek letniskowy, całoroczny lub pole namiotowe na Roztoczu. Szybka i wygodna rezerwacja wypoczynku nad rzeką Tanew!'
				/>
				<meta
					name='keywords'
					content='rezerwacja Roztocze, kajaki Tanew, domek do wynajęcia Roztocze, pole namiotowe, Majorka Roztocze, rezerwuj online, wakacje Roztocze'
				/>
				<meta name='author' content='Majorka Roztocze' />
				<meta property='og:title' content='Rezerwuj wypoczynek online – Majorka Roztocze' />
				<meta
					property='og:description'
					content='Kajaki, noclegi i biwak w jednym miejscu! Zarezerwuj online swoje miejsce na Roztoczu i ciesz się przygodą w naturze.'
				/>
			</Helmet>
			<div className='reservations'>
				<header className='header'>
					<div className='wrapper'>
						<div className='hero-content'>
							<h1 className='h1'>Rezerwacja krok po kroku</h1>
							<p className='hero-text'>
								Zarezerwuj swój wymarzony wypoczynek w kilku prostych krokach! Oferujemy spływy kajakowe, domek
								całoroczny, domek letniskowy oraz pole namiotowe – wszystko dostępne w wygodnym systemie online.
							</p>
							<p className='hero-text'>
								Wybierz opcję, sprawdź dostępność i zarezerwuj termin. To szybkie i proste! Masz pytania? Skontaktuj się
								z nami – chętnie pomożemy.
							</p>
						</div>
					</div>
				</header>
				<div className='wrapper'>
					<KayakReservation />
					<CabinReservation />
					<CampingReservation />
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Reservations
