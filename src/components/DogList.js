import React, {useEffect, useState} from 'react'
import DogCard from './DogCard'

const DogList = () => {
  const [ dogs, setDogs ] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9393/dogs`)
      .then(res => res.json())
      .then(data => setDogs(data))
    }, [])


    const deleteDog = async id => {
      await fetch(`http://localhost:9393/dogs/${ id }`, { method: "DELETE" })
      removeDog( id );
    }
    
    const removeDog = id => {
      setDogs(dogs.filter( dog => dog.id !== id))
    }

    const dogDeeds = dogs.map((dog, index) => <DogCard key={index} dog={dog} deleteDog={ deleteDog } />)
    

  return (
    <div>
      <h1>Dogs</h1>
      {dogDeeds}
    </div>
    
  )
}

export default DogList
