import Sidebar from "./minor_components/Sidebar";
import Navbar from "./minor_components/Navbar";

export default function ImgCollection({user}: {user: string}){
  return(
    <main >
      Image Collection

      {user ?
        <>User: {user}</>
        : <></>
      }
    </main>
  )
}