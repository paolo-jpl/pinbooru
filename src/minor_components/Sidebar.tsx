import { Link, useLocation } from "react-router-dom";
import { groupBy } from "lodash";
import SidebarLink from "./SidebarLink";

export default function Sidebar({tags, loading = true}: any){
  const location = useLocation();

  return(
    <div className="sidebar">
      <input type="text"/>

        {
          loading ? 
          <div>Loading Tags..</div>
          : renderTags(tags, location)
        }
    </div>
  )
}

function renderTags(tags: any, location: any){
  // match path '/post/:id'
  if(/^\/post\/(.+)/.test(location.pathname))
    return imageTags(tags)
  else return defaultTags(tags)
}

function defaultTags(tags: any){
  const arrangedTags = groupBy(tags, 'category'); //TODO: order tabs by trending/ recently updated

  return(
    <ul className="sidebar-list">
      <div className="sidebar-header">Trending Tags</div>
      <div>
        {tags.map((tag: any) => {
          return (
            <SidebarLink key={tag.name} path={'/posts'} name={tag.name}/>
          )
        })}
      </div>
    </ul>
  )
}

function imageTags(tags: any){
  const {artist, content, meta} = groupBy(tags, 'category');
  
  return(
    <ul className="sidebar-list">
      { artist ?
        <div>
          <span className="tag-category">Artist</span>
          {artist.map((tag: any) => {
            return (<SidebarLink key={tag.name} path={'/posts'} name={tag.name}/>)
          })}
        </div>
        : <></>
      }

      { content ?
        <div>
          <span className="tag-category">Content</span>
          {content.map((tag: any) => {
            return (<SidebarLink key={tag.name} path={'/posts'} name={tag.name}/>)
          })}
        </div>
        : <></>
      }

      { meta ?
        <div>
          <span className="tag-category">Meta</span>
          {meta.map((tag: any) => {
            return (<SidebarLink key={tag.name} path={'/posts'} name={tag.name}/>)
          })}
        </div>
        : <></>
      }
    </ul>
  )
}