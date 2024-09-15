import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from './minor_components/Sidebar';
import ImagePreview from "./minor_components/ImagePreview";

export default function ImgCollection(){
  //TODO:sperate Explore and Personal Collection into different components
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [images, setImages] = useState<any[]>([])
  const [tags, setTags] = useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:3000/image')
      .then(res => { return res.json() })
      .then(imgs => { setImages(imgs)})
      .catch((err: any) => setError(err))
      .finally(() => setLoading(false))

    fetch(`http://localhost:3000/tags`)
      .then(res => { return res.json() })
      .then(tags => { setTags(tags) })
      .catch((err: any) => setError(err))
  }, []);

  return(
    <>
      <Sidebar tags={tags} loading={loading}/>
      <main >
        { error?
          <p>Network Error</p>
          :
          loading ?
          <p>Loading...</p> //TODO: loading skeletons
          :
          <div className="preview-container">
            {images.map((image) => {
              return (
                <Link key={image.id} to={`/post/${image.id}`}>
                  <ImagePreview image={image}/>
                </Link>
              )
            })}
          </div>
        }
      </main>
    </>
  )
}