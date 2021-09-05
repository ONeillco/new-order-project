import React, {useState, useEffect} from 'react'
import {useHistory, useParams, NavLink} from 'react-router-dom'

const EditDog = () => {
  const [name, setName] = useState("")
  const [dog, setDog] = useState(null)
  const {id} = useParams()
  const history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:9393/dogs/${id}`)
      .then(res => res.json())
      .then(data => setDog(data))
      // setName(data.name))
         
    },  [])

  const handleChange = e => {
    setName(e.target.value)
    }

    const handleSubmit = async e => {
      e.preventDefault()
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      const body = {name: name}
      const options = {
        method: "POST",
        headers,
        body: JSON.stringify(body)
      }
      await fetch('http://localhost:9393/dogs', options)
      
      history.push("/dogs")
     
    }
  

  return (
    <div>
      <h1>Edit dog</h1>
      <div>
         <p><NavLink to={`/dogs/${ id }/edit`}>Edit dog</NavLink></p>
      </div>
      <form onSubmit={handleSubmit} >
        <div>
          <label >Pups Name:</label>
         
          <input type="text" id="name" value={name} onChange={handleChange} autoFocus={true} />
        </div>
        <br></br>
        <input type="submit" value="Edit Dog" />
      </form>
    </div>
  )
}

export default EditDog