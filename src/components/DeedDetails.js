import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


const DeedDetails = () => {
  const [deed, setDeed] = useState()
  const {id} = useParams()


  useEffect(() => {
    fetch(`http://localhost:9393/deeds/${id}`)
      .then(res => res.json())
      .then(data => setDeed(data))
    }, [])

  return (
    <div>
      <h1>{deed.action}</h1>
      <p>{deed.category}</p>
    </div>
  )
}

export default DeedDetails