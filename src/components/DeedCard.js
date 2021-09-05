import React from 'react'
import {NavLink} from 'react-router-dom'

const DeedCard = ({deed, deleteDeed}) => {

  return (
   
    <li>
     <NavLink to={`/deed/${deed.id}`} > {deed.action}</NavLink> <button onClick={ () => deleteDeed( deed.id ) }>Delete</button>
    </li>
    
    
  )
}

export default DeedCard