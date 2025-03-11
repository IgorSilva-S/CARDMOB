import React from "react";

const Photo = ({ photo }) => {
    return (
        <>
          <h2>ID #{photo.id}, Title: {photo.title}</h2>
            <img src={photo.thumbnailUrl} alt={photo.title} />
        </>
    );
}

export default Photo;