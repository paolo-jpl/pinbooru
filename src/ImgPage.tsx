import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDate } from "./util/util";

import Sidebar from './minor_components/Sidebar';

export default function ImgPage(){
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [image, setImage] = useState<any>([]);
  const [tags, setTags] = useState<any>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/image/${id}`)
      .then(res => { return res.json() })
      .then(item => { setImage(item[0])})
      .catch((err: any) => setError(err))
      .finally(() => setLoading(false))
    
    fetch(`http://localhost:3000/tags/image/${id}/`)
      .then(res => { return res.json() })
      .then(tags => { setTags(tags) })
      .catch((err: any) => setError(err))
  }, []);

  return(
    <>
      <Sidebar tags={tags} loading={loading}/>
      <main>
      { error?
        <p>Network Error</p>
        :
        loading ?
        <p>Loading...</p> //TODO: loading skeletons
        :
        <div className="image-container">
          <img src={image.imgURL}/>
          <div className="image-info">
            <button className="default save"> 
              <span className="material-icons">bookmark</span>
              Save 
            </button>
            <div>
              <p>
                <a href={image.imgURL} target="_blank">View Original</a>
              </p>
              <p>{image.description}</p> 
              <p>Source: <a href={image.source} target="_blank">{image.source}</a></p>
              <p className="subtext subtext-container">
                Uploaded {formatDate(image.uploadedAt)} by 
                <Link to={"/" + image.uploaderId} style={{marginLeft: "4px"}}>
                  {image.uploader} 
                </Link>
              </p>
            </div>
            {/* Comments */}
          </div>
        </div> 
        // TODO: Similar Images
      }
    </main>
    </>
  )
}