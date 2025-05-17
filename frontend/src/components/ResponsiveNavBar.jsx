import { useState } from 'react'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import PropTypes from 'prop-types'

const ResponsiveNavBar = ({ content }) => {
	const [open, setOpen] = useState(false)
	const isMobile = useMediaQuery('(max-width: 1024px)')

	const toggleDrawer = () => {
		setOpen(!open)
	}

	const navLinks = [
		{ label: 'Home', path: '/' },
		{ label: 'Spływy kajakowe', path: '/spływy-kajakowe' },
		{ label: 'Oferta noclegowa', path: '/oferta-noclegowa' },
		{ label: 'Pole namiotowe', path: '/pole-namiotowe' },
		{ label: 'Rezerwacje', path: '/rezerwacje' },
		{ label: 'Blog', path: '/blog' },
		{ label: 'Kontakt', path: '/kontakt' },
	]

	return (
		<>
			{/* Nawigacja na desktopach */}
			{!isMobile && (
				<div className='desktop-nav '>
					<div className='wrapper'>
						<div className='logo'>
							<Link to='/'>
								<img src='/img/majorka_roztocze_green.png' alt='logo' className='logo-img' />
							</Link>
						</div>
						<div className='nav-links'>
							{navLinks.map(link => (
								<Button className='nav-link' key={link.path} component={Link} to={link.path}>
									{link.label}
								</Button>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Nawigacja mobilna - tylko ikona burgera */}
			{isMobile && (
				<div className='mobile-nav'>
					<button className='icon-button' onClick={toggleDrawer}>
						<MenuIcon fontSize='large' />
					</button>

					<div className={`drawer ${open ? 'open' : ''}`}>
						<button className='close-button' onClick={toggleDrawer}>
							×
						</button>
						<ul className='nav-links'>
							{navLinks.map(link => (
								<li key={link.path}>
									<Link to={link.path} onClick={toggleDrawer}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{open && <div className='backdrop' onClick={toggleDrawer}></div>}
				</div>
			)}

			{/* Główna zawartość */}
			<div>{isMobile ? <div>{content}</div> : <div style={{ marginTop: '80px' }}>{content}</div>}</div>
		</>
	)
}

ResponsiveNavBar.propTypes = {
	content: PropTypes.node.isRequired,
}

export default ResponsiveNavBar
