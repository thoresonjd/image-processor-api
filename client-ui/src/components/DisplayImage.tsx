import React from 'react'

interface Props {
  image: string | undefined
}

const DisplayImage: React.FC<Props> = ({image}) => {
  return (
    <>
      <img src={image} alt="image" width="200px" />
    </>
  );
}

export default DisplayImage