import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from '../axios'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet-async'

const BlogPostPage = () => {
	const { link } = useParams()
	const [post, setPost] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		axios
			.get(`blog/${link}/`)
			.then(res => {
				console.log('>>> POST FROM API', res.data)
				setPost(res.data)
			})
			.catch(err => {
				console.error('Nie znaleziono posta:', err)
				navigate('/blog')
			})
	}, [link])

	if (!post) return <p>Ładowanie posta...</p>

	return (
		<>
			<Helmet>
				<title>{post.meta_title || post.title}</title>
				<meta name='description' content={post.meta_description || ''} />
				<meta name='author' content='Majorka Roztocze' />
				<meta property='og:title' content={post.title} />
				<meta property='og:description' content={post.meta_description || ''} />
				<meta property='og:image' content={post.image || '/fallback.jpg'} />
			</Helmet>

				<header className='header'>
					<div className='wrapper'>
						<div className='hero-content'>
							<h1 className='h1'>{post.title}</h1>
						</div>
					</div>
				</header>
			<div className='blog-post-full'>
				<div className='wrapper'>
					<div className='blog-full-content' dangerouslySetInnerHTML={{ __html: post.content }}></div>

					<button className='back-button ' onClick={() => navigate('/blog')}>
						← Powrót do bloga
					</button>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default BlogPostPage
