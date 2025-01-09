import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
  // Fonction pour empêcher la propagation du clic sur le prix ou les soins
  const stopPropagation = (event) => event.stopPropagation();

  return (
    <li className='lmj-plant-item' onClick={() => handleClick(name)}>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
      {name}
      <div onClick={stopPropagation}>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
      </div>
      <div id="pric" onClick={stopPropagation}>
        Prix: {price}€
      </div>
    </li>
  )
}

export default PlantItem
