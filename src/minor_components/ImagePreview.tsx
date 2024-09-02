export default function ImagePreview({image} : any){
  return(
    <div style={{width: "250px", height: "250px"}}>
        <img src={image.imgURL}></img>
    </div>
  )
}