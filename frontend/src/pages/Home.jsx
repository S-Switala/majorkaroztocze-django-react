import FAQ from '../components/FAQ'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Home = () => {
	const navigate = useNavigate()
	return (
		<>
			<Helmet>
				<title>Majorka Roztocze - Spływy kajakowe, domek letniskowy, pole namiotowe</title>
				<meta
					name='description'
					content='Wypożyczalnia kajaków i domek letniskowy Majorka Roztocze – zorganizuj niezapomniany spływ po Tanwi i wypocznij w sercu natury.'
				/>
				<meta
					name='keywords'
					content='kajaki Roztocze, spływy kajakowe Tanew, Majorka Roztocze, domek letniskowy Roztocze, pole namiotowe, wakacje w lesie'
				/>
				<meta name='author' content='Majorka Roztocze' />
				<meta property='og:title' content='Majorka Roztocze - Kajaki i wypoczynek nad Tanwią' />
				<meta
					property='og:description'
					content='Spływy kajakowe, domek letniskowy i pole namiotowe w sercu Roztocza. Zarezerwuj niezapomniane wakacje z dala od zgiełku miasta.'
				/>
			</Helmet>
			<header className='header'>
				<div className='wrapper'>
					<div className='hero-content'>
						<h1 className='h1'>Witaj na Majorka Roztocze</h1>
						<p className='hero-text'>
							Oferujemy wynajem kajaków i organizację spływów po malowniczej rzece Tanew, zapewniając najwyższej jakości
							sprzęt i pełne bezpieczeństwo.
						</p>
						<p className='hero-text'>
							Dodatkowo zapraszamy do wynajmu domku letniskowego lub skorzystania z pola namiotowego nad samą rzeką, aby
							w pełni cieszyć się urokami Roztocza.
						</p>
						<button className='hero-button' onClick={() => navigate('/rezerwacje')}>
							Zarezerwuj online
						</button>
					</div>
				</div>
			</header>
			<div className='wrapper'>
				<section className='offers'>
					<h2 className='h2'>Nasza oferta</h2>
					<div className='offer-box'>
						<div className='offer-image-wrapper'>
							<div className='offer-image'>
								<picture>
									<source srcSet='/img/kajaki_pc.webp' media='(min-width: 768px)' />
									<img
										src='/img/kajaki_mobile.webp'
										alt='Kajaki na Roztoczu - wypożyczalnia nad rzeką, przygotowane do spływu w otoczeniu natury'
										loading='lazy'
									/>
								</picture>
							</div>
						</div>
						<div className='offer-content'>
							<p className='offer-title'>Spływy kajakowe</p>
							<p className='offer-text'>
								Oferujemy niezapomniane spływy kajakowe na rzece Tanew. Pomagamy z doborem trasy i organizujemy całe
								przedsięwzięcie, zapewniając kajaki, wiosła, kamizelki oraz transport i szkolenie. Nasze wycieczki są
								przyjazne dla rodzin z dziećmi oraz zorganizowanych grup. Dzięki atrakcyjnym cenom oraz dostępnej na
								miejscu infrastrukturze wliczonej w koszty można zaplanować fantastyczny wypoczynek na weekend lub na
								dłuższy urlop. Zapraszamy do skorzystania z naszych usług!
							</p>
						</div>
					</div>

					<div className='offer-box order-2'>
						<div className='offer-image-wrapper'>
							<div className='offer-image'>
								<picture>
									<source srcSet='/img/domek_pc.jpg' media='(min-width: 768px)' />
									<img
										src='/img/domek_mobile.jpg'
										alt='Noclegi Roztocze - domek letniskowy z tarasem i miejscem na ognisko w leśnej okolicy'
										loading='lazy'
									/>
								</picture>
							</div>
						</div>
						<div className='offer-content'>
							<p className='offer-title'>Domek całoroczny</p>
							<p className='offer-text'>
								W ofercie posiadamy domek letniskowy 4-6 osobowy nad rzeką Tanew otoczony lasem. Przy domku znajduje się
								przestronny taras, na którym można cieszyć się świeżym powietrzem. Domek znajduje się na samodzielnej
								ogrodzonej działce. Domek w pełni wyposażony - garnki, talerze, sztućce, płyta indukcyjna, czajnik
								elektryczny, ogrzewanie elektryczne, prysznic. Tolerujemy klientów ze zwierzętami - psy, koty, króliki,
								chomiki mile widziane. Na życzenie możliwość zamówienia mobilnej bani - jaccuzi opalanej drewnem.
							</p>
						</div>
					</div>

					<div className='offer-box'>
						<div className='offer-image-wrapper'>
							<div className='offer-image'>
								<picture>
									<source srcSet='/img/namioty_pc.jpg' media='(min-width: 768px)' />
									<img
										src='/img/namioty_mobile.jpg'
										alt='Pole namiotowe na Roztoczu - kolorowe namioty rozstawione wśród drzew, idealne miejsce na camping w naturze'
										loading='lazy'
									/>
								</picture>
							</div>
						</div>
						<div className='offer-content'>
							<p className='offer-title'>Pole namiotowe</p>
							<p className='offer-text'>
								Istnieje możliwość rozbicia własnego namiotu na naszej przystani nad samą rzeką. Tutaj budzi śpiew
								ptaków i szum płynącej wody, a nie przejeżdżające samochody.
							</p>
						</div>
					</div>

					<div className='offer-box order-2'>
						<div className='offer-image-wrapper'>
							<div className='offer-image'>
								<picture>
									<source srcSet='/img/rowery_pc.jpg' media='(min-width: 768px)' />
									<img
										src='/img/rowery_mobile.jpg'
										alt='Rodzinna wycieczka rowerowa po Roztoczu - możliwość wynajmu rowerów do zwiedzania okolicy'
										loading='lazy'
									/>
								</picture>
							</div>
						</div>
						<div className='offer-content order-2'>
							<p className='offer-title'>Rowery</p>
							<p className='offer-text'>
								W naszym ośrodku mają państwo możliwość wypożyczenia rowerów i zwiedzania okolicy w dowolny sposób.
							</p>
						</div>
					</div>
				</section>
				<section className='home-info'>
					<h2 className='h2'>Informacje ogólne</h2>
					<p className='home-info-text'>
						Witaj na Majorka Roztocze - ranczu nad rzeką Tanew otoczonego lasem! Jeśli szukasz niezapomnianej przygody i
						wakacyjnego wypoczynku na łonie natury od zgiełku miasta, to jesteś we właściwym miejscu.
					</p>
					<p className='home-info-text'>
						Specjalizujemy się w wynajmie kajaków i organizacji spływów kajakowych po malowniczej rzece Tanew, która
						przepływa przez piękny region Roztocza. Nasza oferta jest skierowana zarówno do doświadczonych kajakarzy,
						jak i osób początkujących, które chcą spróbować swoich sił w tej formie aktywności.
					</p>
					<p className='home-info-text'>
						Wypożyczalnia Majorka Roztocze oferuje najwyższej jakości kajaki, wiosła i sprzęt turystyczny, dzięki czemu
						możesz cieszyć się spływem kajakowym w pełnym komforcie i bezpieczeństwie. Nasze kajaki są regularnie
						serwisowane i dezynfekowane, aby zapewnić naszym klientom czysty i bezpieczny sprzęt.
					</p>
					<p className='home-info-text'>
						Jeśli szukasz czegoś więcej niż tylko spływu kajakowego, to warto wziąć pod uwagę nasz domek letniskowy do
						wynajęcia. To idealne miejsce na wakacje dla rodzin i grup przyjaciół, którzy chcą cieszyć się urokami
						Roztocza na dłużej. Istnieje również możliwość rozbicia swojego namiotu na naszym polu namiotowym nad samą
						rzeką. Przy dłuższym pobycie zachęcamy do wypożyczania rowerów i zwiedzania najlepszym i ekologicznym
						środkiem transportu w naszej okolicy.
					</p>
					<p className='home-info-text'>
						Dodatkowymi atrakcjami są u nas miejsca na ogniska/grilla, boisko do siatkówki plażowej, przestronna altana
						z widokiem na meander Tanwii oraz rekreacyjny staw do “moczenia kija”.
					</p>
					<p className='home-info-text'>
						Wypożyczalnia kajaków Majorka Roztocze zaprasza do zapoznania się z naszą ofertą i rezerwacji sprzętu. Nasz
						zespół z przyjemnością odpowie na wszelkie pytania i pomoże Ci zaplanować niezapomnianą przygodę na rzece
						Tanew.
					</p>
				</section>
				<section className='faq'>
					<h2 className='h2'>Najczęściej zadawane pytania</h2>
					<FAQ />
				</section>
			</div>
			<Footer />
		</>
	)
}

export default Home
