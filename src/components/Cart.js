import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart, activeCategory }) {
	const [isOpen, setIsOpen] = useState(true)

	// Calcul du total du panier
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	// Mise à jour du titre de la page avec le total du panier
	useEffect(() => {
		document.title = `Panier: ${total}€ d'achats`
	}, [total])

	// Fonction pour supprimer un article du panier
	const removeItemFromCart = (index) => {
		const updatedCart = cart.filter((_, i) => i !== index)
		updateCart(updatedCart)
	}

	// Retour du composant selon l'état du panier
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
				aria-label="Fermer le panier"
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<li key={`${name}-${index}`} className="cart-item">
								{name} {price}€ x {amount}
								<button
									onClick={() => removeItemFromCart(index)}
									className="remove-item-button"
									aria-label={`Supprimer ${name} du panier`}
								>
									Supprimer
								</button>
							</li>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button onClick={() => updateCart([])} aria-label="Vider le panier">
						Vider le panier
					</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
				aria-label="Ouvrir le panier"
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
