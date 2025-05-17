import Footer from '../components/footer'
import KayakRoutePrice from '../components/KayakRoutePrice'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Kayaking_trips = () => {
	const navigate = useNavigate()
	return (
		<>
			<Helmet>
				<title>Spływy Kajakowe Roztocze | Rzeka Tanew – Majorka Roztocze</title>
				<meta
					name='description'
					content='Zarezerwuj spływ kajakowy rzeką Tanew na Roztoczu! Wybierz jedną z malowniczych tras – idealnych dla rodzin i doświadczonych kajakarzy. Kajaki Roteko, transport i bezpieczeństwo w cenie.'
				/>
				<meta
					name='keywords'
					content='spływy kajakowe Roztocze, kajaki Tanew, Majorka Roztocze, trasy kajakowe, kajaki dla dzieci, wypoczynek aktywny, kajaki Lubelskie'
				/>
				<meta name='author' content='Majorka Roztocze' />
				<meta property='og:title' content='Spływy kajakowe rzeką Tanew – Majorka Roztocze' />
				<meta
					property='og:description'
					content='Organizujemy bezpieczne i atrakcyjne spływy kajakowe po rzece Tanew. Zobacz dostępne trasy i odkryj piękno Roztocza z perspektywy wody!'
				/>
			</Helmet>
			<div className='kayaking_trips'>
				<header className='header'>
					<div className='wrapper'>
						<div className='hero-content'>
							<h1 className='h1'>Spływy kajakowe</h1>
							<p className='hero-text'>
								Na przystani Majorka Roztocze główną atrakcją są spływy kajakowe rzeką Tanew, idealne dla miłośników
								aktywnego wypoczynku w otoczeniu przyrody. Oferujemy trasy dostosowane do wieku i umiejętności
								uczestników, a spływy odbywają się na profesjonalnych kajakach Roteko Solina, z opcją dodatkowego
								miejsca dla dziecka do 12 lat.
							</p>
							<button className='hero-button' onClick={() => navigate('/rezerwacje')}>
								Zarezerwuj online
							</button>
						</div>
					</div>
				</header>
				<div className='wrapper'>
					<div className='kayaking-offer'>
						<h2 className='h2'>Nasza oferta</h2>
						<p className='offer-text'>
							Na Majorka Roztocze czeka na Ciebie niezapomniana przygoda na wodzie! Organizujemy spływy kajakowe rzeką
							Tanew, zapewniając komfort i bezpieczeństwo uczestników. Do wyboru są różne trasy, dostosowane do poziomu
							zaawansowania, tak aby każdy mógł cieszyć się wyprawą - od rodzin z dziećmi po doświadczonych kajakarzy.
							Każdy spływ obejmuje wypożyczenie kajaka, wiosła, kamizelkę asekuracyjną oraz transport na miejsce startu
							lub odbiór z końca trasy.
						</p>
						<h3 className='h3'>Wybierz swoją trasę:</h3>
						<p className='route'>
							<span className='trail'>Olchowiec - Osuchy (5h) -</span> dla zaawansowanych, wąska, dzika rzeka, pełna
							malowniczych zakątków - <KayakRoutePrice routeId={1} />
						</p>
						<p className='route'>
							<span className='trail'>Osuchy - Pisklaki (3h) -</span> idealna dla rodzin, umiarkowany stopień trudności,
							po drodze przystanie z gastronomią - <KayakRoutePrice routeId={2} />
						</p>
						<p className='route'>
							<span className='trail'>Pisklaki - Kucły (Rakówka) (3h) -</span> kręta trasa przez dziewiczą przyrodę,
							piękne krajobrazy - <KayakRoutePrice routeId={3} />
						</p>
						<h3 className='h3'>Mapa tras kajakowych:</h3>
						<div className='kayak-map-box'>
							<a href='/img/trasy_kajakowe.bmp' data-lightbox='kajaki' data-title='Mapa tras kajakowych'>
								<picture>
									<source srcSet='/img/trasy_kajakowe.bmp' media='(min-width: 768px)' />
									<img
										src='/img/trasy_kajakowe.bmp'
										alt='Mapa przedstawiająca przebieg tras kajakowych'
										title='kliknij aby powiększyć'
									/>
								</picture>
							</a>
						</div>
						<h3 className='h3'>Więcej niż tylko kajaki!</h3>
						<p className='offer-text'>
							Po spływie zapraszamy do strefy relaksu - czekają na Ciebie plaża, miejsce na ognisko, grill, boisko do
							siatkówki oraz zacieniona altana nad rzeką.
						</p>
						<p className='offer-text'>
							Planujesz wyjątkowe wydarzenie? Organizujemy również imprezy okolicznościowe - wieczory kawalerskie i
							panieńskie, urodziny oraz spotkania firmowe. Możesz także skorzystać z domków letniskowych i pola
							namiotowego.
						</p>
						<p className='offer-text'>
							Rezerwuj już dziś i odkryj Roztocze z perspektywy kajaka! Sprawdź, jak natura i aktywny wypoczynek tworzą
							niezapomniane wspomnienia.
						</p>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Kayaking_trips
