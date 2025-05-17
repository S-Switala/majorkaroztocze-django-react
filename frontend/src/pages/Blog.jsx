import { useState, useEffect } from 'react'
import axios from '../axios'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet-async'

const Blog = () => {
	const [posts, setPosts] = useState([])
	const stripHtml = html => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

	useEffect(() => {
		axios
			.get(`blog/`)
			.then(response => setPosts(response.data))
			.catch(error => console.error('Błąd ładowania bloga:', error))
	}, [])

	return (
		<>
			<Helmet>
				<title>Blog Roztocze – Porady, Aktualności, Inspiracje | Majorka Roztocze</title>
				<meta name='description' content='Odkryj blog Majorka Roztocze – porady kajakowe, ciekawostki z regionu, pomysły na aktywny wypoczynek oraz aktualności z naszej oferty. Bądź na bieżąco!' />
				<meta name='keywords' content='blog Roztocze, poradnik kajakowy, aktualności Majorka Roztocze, wakacje Tanew, inspiracje podróżnicze, wypoczynek w naturze, kajaki blog' />
				<meta name='author' content='Majorka Roztocze' />
				<meta property='og:title' content='Blog i Porady – Roztocze z Kajaka | Majorka Roztocze' />
				<meta property='og:description' content='Zajrzyj na naszego bloga i poznaj Roztocze z nowej perspektywy. Porady dla kajakarzy, relacje ze spływów i najnowsze aktualności.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://twojadomena.pl/blog' />
				<meta property='og:image' content='https://twojadomena.pl/static/blog-og.jpg' />
				<link rel='canonical' href='https://twojadomena.pl/blog' />
			</Helmet>

			<div className='blog'>
				<header className='header'>
					<div className='wrapper'>
						<div className='hero-content'>
							<h1 className='h1'>Aktualności i Porady z Majorka Roztocze</h1>
							<p className='hero-text'>
								Zajrzyj na naszego bloga, by odkryć ciekawostki z Roztocza, porady dla kajakarzy, inspiracje na aktywny
								wypoczynek oraz aktualności związane z naszą ofertą.
							</p>
							<p className='hero-text'>
								Chcemy dzielić się z Tobą pasją do natury, przygód i lokalnych atrakcji. Bądź na bieżąco!
							</p>
						</div>
					</div>
				</header>

				<div className='blog-list'>
					<div className='wrapper'>
						<h2 className='h2'>Nasz Blog</h2>
						<div className='blog-posts'>
							{posts.map(post => (
								<div key={post.id} className='blog-post'>
									{post.image && (
										<img
											src={post.image}
											alt={post.title}
											className='blog-image'
										/>
									)}
									<h3 className='blog-title'>
										<a href={`/blog/${post.slug}`} className='blog-link'>
											{post.title}
										</a>
									</h3>
									<p className='blog-excerpt'>{stripHtml(post.excerpt).slice(0, 200)}...</p>
									<a href={`/blog/${post.slug}`} className='read-more'>
										Czytaj więcej
									</a>
								</div>
							))}
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	)
}

export default Blog
