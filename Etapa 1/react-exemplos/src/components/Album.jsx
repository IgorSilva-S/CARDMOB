import React, { useState, useEffect } from "react";

import '../album.css'

import Photo from "./photo"

const Album = ({ albumId }) => {
    const [photos, setPhotos] = useState([])

    const fetchPhotos = async () => {
      try {
        const URL = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
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

    useEffect(() => {
        fetchPhotos(albumId)
      }, [albumId])

      return (
        <div className="albumContainer">
            <h1 className="albumTitle">Album #{albumId}</h1>
            <div className="grid-container">
                { photos.length > 0 ? (
                    photos.map(photo => (
                        <div key={photo.id} className="album-item">
                            <Photo photo={photo} />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
      )
}

export default Album