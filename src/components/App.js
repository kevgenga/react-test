import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	// Récupérer le panier dans le localStorage
	const savedCart = localStorage.getItem('cart') 
	// Si le panier n'existe pas dans le localStorage, on initialise un panier vide
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
	// Sauvegarder le panier dans le localStorage	
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	
	// Rendu de l'application
	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App