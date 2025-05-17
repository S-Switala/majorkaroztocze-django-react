import Footer from '../components/footer'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Kontakt – Kajaki, Noclegi, Roztocze | Majorka Roztocze</title>
				<meta
					name='description'
					content='Masz pytania? Skontaktuj się z Majorka Roztocze – wypożyczalnią kajaków i miejscem noclegowym nad rzeką Tanew. Chętnie pomożemy Ci zaplanować wypoczynek!'
				/>
				<meta
					name='keywords'
					content='kontakt Roztocze, Majorka Roztocze, kajaki Tanew kontakt, domek Roztocze kontakt, pole namiotowe kontakt, rezerwacja Roztocze'
				/>
				<meta name='author' content='Majorka Roztocze' />
				<meta property='og:title' content='Skontaktuj się z nami – Majorka Roztocze' />
				<meta
					property='og:description'
					content='Zadzwoń lub napisz do nas i zarezerwuj kajaki, domek lub pole namiotowe. Chętnie odpowiemy na Twoje pytania!'
				/>
			</Helmet>
			<div className='contact'>
				<header className='header'>
					<div className='wrapper'>
						<div className='hero-content'>
							<h1 className='h1'>Skontaktuj się z nami</h1>
							<p className='hero-text'>
								Masz pytania? Chcesz zarezerwować kajak, domek lub miejsce na polu namiotowym? Skontaktuj się z nami
								telefonicznie lub mailowo - z przyjemnością pomożemy!
							</p>
						</div>
					</div>
				</header>
				<div className='contact-page'>
					<div className='wrapper'>
						<h1 className='contact-heading'>Skontaktuj się z nami</h1>
						<p className='contact-subtext'>Chętnie odpowiemy na Twoje pytania lub pomożemy z rezerwacją.</p>

						<div className='contact-content'>
							<div className='contact-info'>
								<h2 className='contact-title'>Dane kontaktowe</h2>
								<p>
									<strong>Telefon:</strong> <a href='tel:883025743'>883 025 743</a>
								</p>
								<p>
									<strong>Email:</strong> <a href='mailto:majorkaroztocze@gmail.com'>majorkaroztocze@gmail.com</a>
								</p>
								<p>
									<strong>Adres:</strong> Chmielek 228, 23-412 Chmielek
								</p>

								<h2 className='contact-title'>Godziny otwarcia</h2>
								<p>Codziennie: 08:00 – 21:00</p>
							</div>

							<div className='contact-map'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.061007346629!2d22.8515402!3d50.3596989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472322c7dc993fe9%3A0xb80f845af0e4a2fd!2sChmielek%20228%2C%2023-412%20Chmielek!5e0!3m2!1spl!2spl!4v1711483275186!5m2!1spl!2spl'
									width='100%'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen=''
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									title='Lokalizacja Majorka Roztocze'></iframe>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Contact
