import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ImgPage(){
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [image, setImage] = useState<any>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/image/${id}`) //TODO: joined table query with user rather than query image and then user
      .then(res => { return res.json() })
      .then(item => { setImage(item[0])})
      .catch((err: any) => setError(err))
      .finally(() => setLoading(false))
  }, []);

  return(
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
              <p>Source: {image.source}</p>
              <p className="subtext subtext-container">
                Uploaded {formatDate(image.uploadedAt)} by 
                <Link to="/" style={{marginLeft: "4px"}}>
                  000
                  {/* {image.uploader} */} 
                </Link>
              </p>
            </div>
            {/* Comments */}
          </div>
        </div> 
        // TODO: Similar Images
      }
    </main>
  )
}

function formatDate(timestamp: string){
  let date = new Date(timestamp);
  let formattedDate = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`;
  return formattedDate;
}