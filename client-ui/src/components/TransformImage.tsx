import React, { useState, useEffect } from 'react'

interface Props {
  setImage: Function
}

const TransformImage: React.FC<Props> = ({setImage}) => {

  const [transformedImage, setTransformedImage] = useState<string | undefined>(undefined)  

  useEffect(() => (
    setImage(transformedImage)
  ), [transformedImage, setImage])

  const encodeBase64 = (file: any) => {
    return new Promise<string> ((resolve,reject)=> {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || '');
      reader.onerror = error => reject(error);
  })
 } 

  return (
    <div className='transformation-tools center'>Transformation tools</div>
  );
}

export default TransformImage
