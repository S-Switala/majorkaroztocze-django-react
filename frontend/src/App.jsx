import ResponsiveNavBar from './components/ResponsiveNavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reservations from './pages/Reservations'
import Kayaking_trips from './pages/Kayaking_trips'
import Accommodation_offer from './pages/Accommodation_offer'
import Camping_site from './pages/Camping_site'
import Blog from './pages/Blog'
import BlogPostPage from './pages/BlogPostPage'
import Contact from './pages/Contact'
import './styles/main.scss'

function App() {
	return (
		<>
			<div className='App'>
				<div>
					<ResponsiveNavBar
						content={
							<Routes>
								<Route path='' element={<Home />} />
								<Route path='/spływy-kajakowe' element={<Kayaking_trips />} />
								<Route path='/oferta-noclegowa' element={<Accommodation_offer />} />
								<Route path='/pole-namiotowe' element={<Camping_site />} />
								<Route path='/rezerwacje' element={<Reservations />} />
								<Route path='/blog' element={<Blog />} />
								<Route path="/blog/:link" element={<BlogPostPage />} />
								<Route path='/kontakt' element={<Contact />} />
							</Routes>
						}
					/>
				</div>
			</div>
		</>
	)
}

export default App
