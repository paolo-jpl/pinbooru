import Sidebar from "./minor_components/Sidebar";
import Navbar from "./minor_components/Navbar";

export default function ImgCollection({user}: {user: string}){
  return(
    <>
      Image Collection

      {user ?
        <>User: {user}</>
        : <></>
      }
    </>
  )
}