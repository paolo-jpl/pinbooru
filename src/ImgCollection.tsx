import { useState, useEffect } from "react";
import ImagePreview from "./minor_components/ImagePreview";


export default function ImgCollection({user}: {user: string}){
  //TODO:sperate Explore and Personal Collection into different components
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/image')
      .then(res => { return res.json() })
      .then(imgs => { setImages(imgs)})
      .catch((err: any) => setError(err))
      .finally(() => setLoading(false))
  }, []);

  return(
    <main >
      { error?
        <p>Network Error</p>
        :
        loading ?
        <p>Loading...</p> //TODO: loading skeletons
        :
        <div className="preview-container">
          {images.map((image) => {
            return <ImagePreview image={image}/>
          })}
        </div>
      }
    </main>
  )
}