import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Camping_site = () => {
	const navigate = useNavigate()
	return (
		<>
			<Helmet>
				<title>Pole namiotowe Roztocze – Biwak nad Tanwią | Majorka Roztocze</title>
				<meta
					name='description'
					content='Rozbij namiot nad rzeką Tanew i śpij pod gwiazdami! Nasze pole namiotowe na Roztoczu to idealne miejsce dla miłośników natury i aktywnego wypoczynku.'
				/>
				<meta
					name='keywords'
					content='pole namiotowe Roztocze, biwak Roztocze, namiot Tanew, camping w lesie, wypoczynek na łonie natury, spanie pod gwiazdami, Roztocze kajaki'
				/>
				<meta name='author' content='Majorka Roztocze' />
				<meta property='og:title' content='Biwak w sercu natury – Pole namiotowe Roztocze | Majorka Roztocze' />
				<meta
					property='og:description'
					content='Zamień hotel na namiot i śpij pod czystym niebem Roztocza. Nasze pole namiotowe nad Tanwią to idealne miejsce dla miłośników przyrody.'
				/>
			</Helmet>
			<div className='camping_site'>
				<header className='header'>
					<div className='wrapper'>
						<div className='hero-content'>
							<h1 className='h1'>Witajcie, miłośnicy przyrody!</h1>
							<p className='hero-text'>Gotowi na niezapomnianą przygodę na Roztoczu?</p>
							<p className='hero-text'>Zamieńcie hotel na namiot i obudźcie się w sercu natury!</p>
							<button className='hero-button' onClick={() => navigate('/rezerwacje')}>
								Zarezerwuj online
							</button>
						</div>
					</div>
				</header>
				<div className='wrapper'>
					<section className='camping-description'>
						<h3 className='h3'>Dlaczego pole namiotowe na Roztoczu to świetny wybór?</h3>
						<li className='li'>Własny Kawałek Raju - Każdego ranka inny widok - bez ograniczeń hotelowych murów.</li>
						<li className='li'>Nocne Spektakle - Czyste niebo, gwiazdy, ognisko i rozmowy do rana.</li>
						<li className='li'>
							Przygoda i Wolność - Idealna baza wypadowa do pieszych wędrówek, spływów kajakowych czy rowerowych
							przygód.
						</li>
						<h3 className='h3'>Zachwycające otoczenie</h3>
						<p className='camping-text'>
							Roztocze to klejnot Polski – pagórki, lasy i czyste rzeki tworzą niezwykły krajobraz. Nasze pole namiotowe
							to doskonała baza, by odkryć ten magiczny region z bliska.
						</p>
						<h3 className='h3'>Zanurz się w naturze</h3>
						<p className='camping-text'>
							Zapomnij o budziku – niech obudzą Cię śpiew ptaków, szum drzew i zapach lasu. Tu naprawdę można zwolnić
							tempo i wsłuchać się w przyrodę.
						</p>
					</section>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Camping_site
