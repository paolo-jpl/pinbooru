import { Link } from "react-router-dom";

const imagePH = {
  uploader: "Aizken12",
  source: "https://x.com/kanji55755948/status/1829261917657141424",
  url: "https://pbs.twimg.com/media/GV5rUBdasAAsyD5?format=jpg&name=4096x4096",
  desc: "Fusce gravida magna libero, quis auctor eros dictum ut. Suspendisse sollicitudin placerat massa, vel interdum urna maximus ut. Curabitur nec ipsum ut lectus malesuada tempus nec ac orci."
}

export default function ImgPage(){
  const date = new Date();
  return(
    <main>
      <div className="image-container">
        <img src={imagePH.url}/>
        <div className="image-info">
          <button className="default save"> 
            <span className="material-icons">bookmark</span>
            Save 
          </button>
          <div>
            <p>
              <a href={imagePH.url} target="_blank">View Original</a>
            </p>
            <p>{imagePH.desc}</p>
            <p>Source: {imagePH.source}</p>
            <p className="subtext subtext-container">
              Uploaded {date.toDateString()} by 
              <Link to="/">
                {imagePH.uploader}
              </Link>
            </p>
          </div>
          {/* Comments */}
        </div>
      </div>
      {/* <div>
        Similar Images
      </div> */}
    </main>
  )
}