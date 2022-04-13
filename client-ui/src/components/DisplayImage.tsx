import React from 'react'

interface Props {
  image: string | undefined
}

const DisplayImage: React.FC<Props> = ({image}) => {
  return (
    <div className='display-image center'>
      {image ? (
        <img src={image} alt='image' className='image'/>
      ) : (
        "Image Preview"
      )}
    </div>
  );
}

export default DisplayImage