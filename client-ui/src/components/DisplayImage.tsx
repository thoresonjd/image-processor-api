import React from 'react'

interface Props {
  image: string | undefined
}

const DisplayImage: React.FC<Props> = ({image}) => {
  return (
    <div className='display-image center'>
      <img src={image} alt="image" width="200px" />
    </div>
  );
}

export default DisplayImage