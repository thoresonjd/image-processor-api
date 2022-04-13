import React, { useState, useEffect } from 'react'

interface Props {
  setImage: Function
}

const TransformationTools: React.FC<Props> = ({setImage}) => {

  const [newImage, setNewImage] = useState<string | undefined>(undefined)  

  useEffect(() => (
    setImage(newImage)
  ), [newImage, setImage])

  const getBase64 = (file: any) => {
    return new Promise<string> ((resolve,reject)=> {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || '');
      reader.onerror = error => reject(error);
  })
 } 

  return (
    <>Transformation tools</>
  );
}

export default TransformationTools
