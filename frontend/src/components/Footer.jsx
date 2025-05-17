import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='footer'>
			<div className='wrapper'>
				<div className='footer-box'>
					<div className='name-box'>
						<p className='title'>Majorka Roztocze</p>
						<p className='content'>
							Spływy kajakowe Tanwią, domki letniskowe na Roztoczu, czyste powietrze i piękne lasy.
						</p>
						<div className='social-icons'>
							<a href='https://www.facebook.com/majorkaroztocze' target='_blank' rel='noopener noreferrer'>
								<FaFacebook size={24} />
							</a>
							<a href='https://www.instagram.com/majorkaroztocze/?hl=en' target='_blank' rel='noopener noreferrer'>
								<FaInstagram size={24} />
							</a>
						</div>
					</div>
					<div className='contact-box'>
						<p className='title'>Kontakt</p>
						<p className='content'>telefon: 883 025 743</p>
						<p className='content'>email: majorkaroztocze@gmail.com</p>
						<p className='content'>adres: Chmielek 228, 23-412 Chmielek</p>
					</div>
				</div>
				<hr />
				<p className='copyright'>Copyright © {currentYear} Majorka Roztocze</p>
			</div>
		</footer>
	)
}

export default Footer
