import { Link } from "react-router-dom";

export default function SidebarLink({path, name}: any){
  return (
    <Link to={{ pathname: path, search: `?tag=${name}`}}><li>{name}</li></Link>
  )
}