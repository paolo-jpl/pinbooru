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
    <ul className="sidebar-list">
      <div className="sidebar-header">Trending Tags</div>
      <div>
        <li>one</li>
        <li>one</li>
        <li>one</li>
      </div>
    </ul>
  )
}

function imageTags(){
  return(
    <ul className="sidebar-list">
      <div>
        <span className="tag-category">Artist</span>
        <li>one</li>
        <li>one</li>
        <li>one</li>
      </div>

      <div>
        <span className="tag-category">Content</span>
        <li>two</li>
        <li>three</li>
        <li>one</li>
      </div>
    </ul>
  )
}