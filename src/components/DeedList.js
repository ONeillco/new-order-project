import React, {useEffect, useState} from 'react'
import DeedCard from './DeedCard'

const DogList = () => {
  const [ deeds, setdeeds ] = useState([])




  useEffect(() => {
    fetch(`http://localhost:9393/deeds`)
      .then(res => res.json())
      .then(data => setdeeds(data))
    }, [])

    const deedCards = deeds.map((deed, index) => <DeedCard key={index} deed={deed} />)

  return (
    <div>
      <h1>deeds</h1>
      {deedCards}
    </div>
    
  )
}

export default DogList



