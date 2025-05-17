import Footer from '../components/footer'
import ShadowCarousel from '../components/ShadowCarousel'
import CabinPrice from '../components/CabinPrice'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Accommodation_offer = () => {
	const navigate = useNavigate()
	const yearRoundCottageImages = [
		{
			src: '/img/year-round-cottage/d_caloroczny_1_5x4_small.webp',
			alt: 'Grill i miejsce na ognisko przy domku letniskowym na Roztoczu',
			loading: 'lazy',
		},
		{
			src: '/img/year-round-cottage/d_caloroczny_2_5x4_small.webp',
			alt: 'Nowoczesny domek całoroczny z tarasem do wynajęcia na Roztoczu',
			loading: 'lazy',
		},
		{
			src: '/img/year-round-cottage/d_caloroczny_3_5x4_small.webp',
			alt: 'Taras z leżakami i hamakiem przy domku wakacyjnym na Roztoczu',
			loading: 'lazy',
		},
		{
			src: '/img/year-round-cottage/d_caloroczny_4_5x4_small.webp',
			alt: 'Nowoczesna łazienka w domku całorocznym do wynajęcia na Roztoczu',
			loading: 'lazy',
		},
		{
			src: '/img/year-round-cottage/d_caloroczny_5_5x4_small.webp',
			alt: 'Wnętrze domku z widokiem na las - noclegi Roztocze',
			loading: 'lazy',
		},
		{
			src: '/img/year-round-cottage/d_caloroczny_6_5x4_small.webp',
			alt: 'Salon z narożną kanapą i stolikiem w domku do wynajęcia Roztocze',
			loading: 'lazy',
		},
		{
			src: '/img/year-round-cottage/d_caloroczny_7_5x4_small.webp',
			alt: 'Aneks kuchenny w domku letniskowym - noclegi Roztocze',
			loading: 'lazy',
		},
		{
			src: '/img/year-round-cottage/d_caloroczny_8_5x4_small.webp',
			alt: 'Taras z drewnianym stołem na tle lasu - domek Roztocze',
			loading: 'lazy',
		},
		{
			src: '/img/year-round-cottage/d_caloroczny_9_5x4_small.webp',
			alt: 'Domek letniskowy na wynajem w lesie - Roztocze noclegi',
			loading: 'lazy',
		},
	]

	const summerHouse = [
		{
			src: '/img/summer_house/domek_letniskowy_1.webp',
			alt: 'Wnętrze domku letniskowego na Roztoczu – łóżko piętrowe, stolik i krzesła',
			loading: 'lazy',
		},
		{
			src: '/img/summer_house/domek_letniskowy_2.webp',
			alt: 'Letniskowy domek Roztocze – widok wnętrza z łóżkiem piętrowym i lodówką',
			loading: 'lazy',
		},
		{
			src: '/img/summer_house/domek_letniskowy_3.webp',
			alt: 'Domek letniskowy Roztocze – widok wnętrza z dwóch łóżek piętrowych',
			loading: 'lazy',
		},
		{
			src: '/img/summer_house/domek_letniskowy_4.webp',
			alt: 'Wnętrze domku z lodówką i drewnianymi ścianami – domek Roztocze',
			loading: 'lazy',
		},
		{
			src: '/img/summer_house/domek_letniskowy_5.webp',
			alt: 'Drewniany domek letniskowy z hamakiem w lesie – Roztocze noclegi',
			loading: 'lazy',
		},
		{
			src: '/img/summer_house/domek_letniskowy_6.webp',
			alt: 'Letniskowy domek pośród lasu – wypoczynek blisko natury na Roztoczu',
			loading: 'lazy',
		},
	]

	return (
		<>
			<Helmet>
				<title>Noclegi Roztocze – Domki nad Tanwią | Majorka Roztocze</title>
				<meta
					name='description'
					content='Zarezerwuj nocleg na Roztoczu! Domek letniskowy i całoroczny nad rzeką Tanew – komfortowy wypoczynek w otoczeniu przyrody. Taras, grill, prywatny dostęp do rzeki.'
				/>
				<meta
					name='keywords'
					content='noclegi Roztocze, domek letniskowy Roztocze, domek całoroczny, Tanew noclegi, wynajem domku, Roztocze rzeka, domek z tarasem'
				/>
				<meta name='author' content='Majorka Roztocze' />
				<meta property='og:title' content='Domki nad Tanwią – Noclegi Roztocze | Majorka Roztocze' />
				<meta
					property='og:description'
					content='Wypocznij w domku letniskowym lub całorocznym nad rzeką Tanew. Komfort, natura i relaks w sercu Roztocza. Sprawdź dostępność noclegów!'
				/>
			</Helmet>
			<div className='accommodation_offer'>
				<header className='header'>
					<div className='wrapper'>
						<div className='hero-content'>
							<h1 className='h1'>Oferta noclegowa</h1>
							<p className='hero-text'>
								Oferujemy dwa niezależne domki do wynajęcia: domek letniskowy - idealny na wakacyjny wypoczynek, oraz
								domek całoroczny - doskonały na relaks o każdej porze roku. Wybierz swój komfort i ciesz się bliskością
								natury!
							</p>
							<button className='hero-button' onClick={() => navigate('/rezerwacje')}>
								Zarezerwuj online
							</button>
						</div>
					</div>
				</header>
				<div className='wrapper'>
					<div className='accommodation_offer-box'>
						<h2 className='h2'>Domek całoroczny</h2>
						<div className='carousel'>
							<ShadowCarousel images={yearRoundCottageImages} />
						</div>
						<p className='offer-text'>
							Zapraszamy do naszego urokliwego domku na Roztoczu, idealnego miejsca dla wszystkich, którzy pragną
							oderwać się od zgiełku miasta i cieszyć się spokojem natury. Nasz domek położony jest nad malowniczą rzeką
							Tanew, otoczony zielenią i śpiewem ptaków.
						</p>
						<li className='accommodation-description'>Domek o powierzchni 35m2 dla 4-6 osób</li>
						<li className='accommodation-description'>
							Przestronny salon z aneksem kuchennym, idealny na wieczorne relaksacyjne chwile.
						</li>
						<li className='accommodation-description'>Kuchnia w pełni wyposażona w niezbędne sprzęty i naczynia.</li>
						<li className='accommodation-description'>Łazienka z prysznicem.</li>
						<li className='accommodation-description'>
							Przestronny taras - doskonałe miejsce na poranną kawę lub wieczorny relaks.
						</li>
						<p className='description-heading'>Udogodnienia:</p>
						<li className='accommodation-description'>Dostęp do prywatnego odcinka brzegu rzeki Tanew.</li>
						<li className='accommodation-description'>Miejsce do grillowania i ogniska.</li>
						<li className='accommodation-description'>Leżaki i hamaki do relaksu na świeżym powietrzu.</li>
						<li className='accommodation-description'>Parking na terenie posesji.</li>
						<p className='description-heading'>Atrakcje w Okolicy:</p>
						<li className='accommodation-description'>
							Rezerwat przyrody Roztoczański Park Narodowy w bliskiej odległości.
						</li>
						<li className='accommodation-description'>
							Szlaki turystyczne i rowerowe pozwalające na odkrywanie uroków okolicy.
						</li>
						<li className='accommodation-description'>Możliwość wędkowania nad brzegiem rzeki Tanew.</li>
						<li className='accommodation-description'>Malownicze tereny do spacerów i obserwacji ptaków.</li>
						<p className='description-heading'>Ceny:</p>
						<li className='accommodation-description'>
							Cena za dobę: <CabinPrice cabinId={1} />
						</li>
						<li className='accommodation-description'>Minimalny pobyt: 2 noce.</li>
					</div>
					<div className='accommodation_offer-box'>
						<h2 className='h2'>Domek letniskowy</h2>
						<div className='carousel'>
							<ShadowCarousel images={summerHouse} />
						</div>
						<p className='offer-text'>
							Zapraszamy do naszego domku letniskowego ze wspaniałym widokiem na meander rzeki Tanew. Nasz domek
							położony jest nad malowniczą rzeką Tanew, otoczony zielenią i śpiewem ptaków.
						</p>
						<li className='accommodation-description'>Domek letniskowy dla 4 osób</li>
						<li className='accommodation-description'>Dwa piętrowe łóżka</li>
						<li className='accommodation-description'>Lodówka, czajnik elektryczny</li>
						<li className='accommodation-description'>Łazienka na polu namiotowym</li>
						<li className='accommodation-description'>Przestronny taras z widokiem na rzekę Tanew.</li>
						<p className='description-heading'>Udogodnienia:</p>
						<li className='accommodation-description'>Dostęp do prywatnego odcinka brzegu rzeki Tanew.</li>
						<li className='accommodation-description'>Miejsce do grillowania i ogniska.</li>
						<li className='accommodation-description'>Leżaki i hamaki do relaksu na świeżym powietrzu.</li>
						<li className='accommodation-description'>Parking na terenie posesji.</li>
						<p className='description-heading'>Ceny:</p>
						<li className='accommodation-description'>
							Cena za dobę: <CabinPrice cabinId={2} />
						</li>
						<li className='accommodation-description'>Minimalny pobyt: 1 noc.</li>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Accommodation_offer
