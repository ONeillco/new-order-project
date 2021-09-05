import React from 'react'
import { NavLink } from 'react-router-dom';

const DogCard = ({ dog, deleteDog }) => {
  return (
    <li>
      <NavLink to={`/dogs/${dog.id}`}>{ dog.name }</NavLink> - <button onClick={ () => deleteDog(dog.id) }>Delete</button>
    </li>
  )
}

export default DogCard
