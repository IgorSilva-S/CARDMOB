import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import Photo from './components/photo'
import Album from './components/Album'

function App() {
  const [count, setCount] = useState(0)
  const [photos, setPhotos] = useState([])
  const [albumId, setAlbumId] = useState(1)

  const fetchPhotos = async () => {
    try {
      const URL = 'https://jsonplaceholder.typicode.com/albums/1/photos'
      const response = await fetch(URL)
      if (response.status === 200) {
        const data = await response.json()
        const updatedPhotos = data.map((photo) => ({
          ...photo,
          thumbnailUrl: `https://picsum.photos/150?random=${photo.id}`
        }))
        setPhotos(updatedPhotos)
      }

    } catch (err) {
      console.error('Erro ao buscar as fotos', err)
    }
  }

  function updateCount() {
    setCount(count + 1)
  }

  const updateCount1 = () => count + 1;

  const data = {
    "nome": "Jhon",
    "update": (newName) => `O novo nome é ${newName}`,
    "endereco": {
      "rua": "xyz",
      "numero": "120",
      "complementos": ["casa", "Na esquina de um local"]
    }
  }

  data.update("Jhonnathan")
  data.endereco.complementos[1]

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <>
      <Counter title="Contador superior" />
      <Counter title="Contador inferior" initial="100" />
      <article>
        <h1>Album da API</h1>
        {photos.map((photo) => {
          return (
            //   <article key={photo.id}>
            //   <h2>ID #{photo.id}, Title: {photo.title}</h2>
            //   <img src={photo.thumbnailUrl} alt={photo.title} />

            // </article>
            <Photo key={photo.id} photo={photo} />
          )

        })}
      </article>
      <div>
        <button onClick={() => {setAlbumId(1)}}>Album #1</button>
        <button onClick={() => {setAlbumId(2)}}>Album #2</button>
        <button onClick={() => {setAlbumId(3)}}>Album #3</button>
        <button onClick={() => {setAlbumId(4)}}>Album #4</button>
        <button onClick={() => {setAlbumId(5)}}>Album #5</button>
        <button onClick={() => {setAlbumId(6)}}>Album #6</button>
      </div>
      <Album albumId={albumId}/>
    </>
  )
}

export default App
