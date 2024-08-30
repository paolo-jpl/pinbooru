import { useLocation } from "react-router-dom";

export default function Sidebar(){
  const location = useLocation();

  return(
    <div className="sidebar">
      <input type="text"/>

      {/* match path /post/:id */}
      { /^\/post\/(.+)/.test(location.pathname) ?
        imageTags() : defaultTags()
      }

    </div>
  )
}

function defaultTags(){
  return(
    <>
      <ul className="sidebar-list">
        <div className="sidebar-header">Tags</div>
        <li>one</li>
        <li>one</li>
        <li>one</li>
      </ul>
    </>
  )
}

function imageTags(){
  return(
    <>
      <ul className="sidebar-list">
        <div className="tag-category">Artist</div>
        <li>one</li>
        <li>one</li>
        <li>one</li>
      </ul>

      <ul className="sidebar-list">
        <div className="sidebar-header">Information</div>
        <li>Uploader:</li>
        <li>Date: </li>
        <li>Source: </li>
      </ul>
    </>
  )
}